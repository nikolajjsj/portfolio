---
layout: ../../layouts/BlogLayout.astro
author: Nikolaj Jensen
datetime: 2025-04-01T16:00:00Z
title: "Building an Intelligent RSS Feed Fetcher: How I Optimized My RSS Reader App"
slug: building-an-intelligent-rss-feed-fetcher
featured: true
draft: false
tags:
  - go
ogImage: ""
description: "Learn how to build an intelligent RSS feed fetcher that optimizes your RSS reader app."
liveUrl: ""
time: 10
---

# Building an Intelligent RSS Feed Fetcher: How I Optimized My RSS Reader App

## The Challenge With RSS Feeds

RSS feeds have been around for decades, but building an efficient RSS reader that handles thousands of feeds presents surprising technical challenges. When I started building my RSS reader app, I quickly realized that a naive approach of fetching all feeds at fixed intervals would not scale well.

Some feeds update multiple times per hour, while others might only post once a week. Using a single fetch interval for all feeds would either:

1. Waste resources by checking rarely-updated feeds too frequently
2. Miss timely content from frequently-updated feeds
3. Potentially overload feed servers with unnecessary requests

This article shares how I built an adaptive feed fetcher that intelligently adjusts polling frequencies based on each feed's publishing patterns.

## The Adaptive Fetcher: Core Concepts

The core idea behind my adaptive fetcher is simple but powerful: **learn each feed's publication pattern and adjust the polling frequency accordingly**.

Here's how it works at a high level:

```go
type AdaptiveFetcher struct {
  // Storage access
  Storage      FeedStorage

  // Configuration parameters
  MinInterval     time.Duration  // Minimum time between fetches
  MaxInterval     time.Duration  // Maximum time between fetches
  DefaultInterval time.Duration  // Default for new feeds
  AnalysisWindow  time.Duration  // Time window to analyze patterns

  // Thread-safe map to track next fetch times
  nextFetchTimes sync.Map
}
```

My adaptive fetcher maintains a thread-safe map of when each feed should be fetched next. This allows different feeds to be polled at different intervals, optimizing both resource usage and content freshness.

## Smart Interval Calculation
The most interesting part of my system is how it calculates the optimal interval for each feed. Let's look at a simplified version:

``` go
func calculateOptimalInterval(feed Feed, articles []Article) time.Duration {
  // Default values
  minInterval := 10 * time.Minute
  maxInterval := 6 * time.Hour
  defaultInterval := 1 * time.Hour

  if len(articles) < 2 {
    return defaultInterval // Not enough data
  }

  // Calculate average time between publications
  var totalGap time.Duration
  var gapCount int

  for i := 0; i < len(articles)-1; i++ {
    gap := articles[i].PublishedAt.Sub(articles[i+1].PublishedAt)
    if gap > 0 {
      totalGap += gap
      gapCount++
    }
  }

  if gapCount == 0 {
    return defaultInterval
  }

  avgGap := totalGap / time.Duration(gapCount)

  // Calculate posts per hour
  timeSpan := articles[0].PublishedAt.Sub(articles[len(articles)-1].PublishedAt)
  postsPerHour := float64(len(articles)) / timeSpan.Hours()

  // Adjust interval based on posting frequency
  var interval time.Duration

  if postsPerHour < 0.01 { // Less than 1 post per 100 hours
    interval = maxInterval  // Very infrequent poster
  } else if postsPerHour > 1 { // More than 1 post per hour
    interval = minInterval  // Very frequent poster
  } else {
    // For typical feeds, check about 3 times per avg posting interval
    interval = time.Duration(float64(avgGap) * 0.33)
  }

  // Ensure interval is within bounds
  if interval < minInterval {
    interval = minInterval
  } else if interval > maxInterval {
    interval = maxInterval
  }

  return interval
}
```

This algorithm analyzes:
1. Average gap between posts - If posts typically come every 24 hours, I don't need to check every 5 minutes
2. Posts per hour - Highly active feeds get checked more frequently
3. Bounds enforcement - I maintain reasonable minimum and maximum intervals
The result is that a news site that posts 20 times a day might be checked every 10-15 minutes, while a personal blog that posts weekly might only be checked every 6 hours.

## Worker Pool Architecture
To efficiently process many feeds, I implemented a worker pool pattern:
``` go 
func (af *AdaptiveFetcher) fetchFeeds() {
  // Get all feeds from storage
  feeds := getAllFeeds()

  // Filter for feeds that are due to be fetched
  feedsToFetch := []Feed{}
  for _, feed := range feeds {
    nextFetchTime, exists := af.nextFetchTimes.Load(feed.ID)
    if !exists || time.Now().After(nextFetchTime.(time.Time)) {
      feedsToFetch = append(feedsToFetch, feed)
    }
  }

  // Skip if nothing to fetch
  if len(feedsToFetch) == 0 {
    return
  }

  // Create feed channel and worker pool
  feedChan := make(chan Feed, len(feedsToFetch))
  var wg sync.WaitGroup

  // Start workers
  workerCount := min(5, len(feedsToFetch))
  for i := 0; i < workerCount; i++ {
    wg.Add(1)
    go worker(&wg, feedChan)
  }

  // Send feeds to workers
  for _, feed := range feedsToFetch {
    feedChan <- feed
  }
  close(feedChan)

  // Wait for completion
  wg.Wait()
}
```

This approach allows me to:
1. Only fetch feeds that actually need updating
2. Process multiple feeds concurrently
3. Limit how many parallel requests I make
4. Scale easily as my feed collection grows

## Beyond Basic Patterns
While my current implementation focuses on average post frequency, I'm working on additional pattern detection:
``` go
// TODO: Advanced pattern detection (code sketch)
func analyzePublicationPatterns(articles []Article) (pattern PatternInfo) {
  // Check for day-of-week patterns
  dayHistogram := [7]int{}
  for _, article := range articles {
    dayHistogram[article.PublishedAt.Weekday()]++
  }

  // Check for time-of-day patterns
  hourHistogram := [24]int{}
  for _, article := range articles {
    hourHistogram[article.PublishedAt.Hour()]++
  }

  // Check for burst patterns
  // (multiple posts in quick succession followed by long gaps)

  // Return detected patterns
  return PatternInfo{
    WeekdayPattern: detectWeekdayPattern(dayHistogram),
    HourPattern: detectHourPattern(hourHistogram),
    BurstPattern: detectBurstPattern(articles),
  }
}
```

Future versions will detect:
- Feeds that post on specific days (e.g., "every Monday and Thursday")
- Feeds that post at specific times (e.g., "always around 9 AM")
- Feeds with "burst" publishing (many posts at once, then nothing for days)

## Further Optimization Tasks
As a solo developer, my to-do list for feed fetcher optimizations is extensive. Here are some exciting improvements I'm planning to implement:

### 1. HTTP Cache Controls & ETags
RSS and Atom feeds often support HTTP caching mechanisms that I'm not yet fully utilizing:
``` go
func fetchWithETag(url string, lastETag string) (*Feed, string, error) {
  req, err := http.NewRequest("GET", url, nil)
  // Add ETag headers if we have them from previous requests
  if lastETag != "" {
    req.Header.Add("If-None-Match", lastETag)
  }

  resp, err := http.DefaultClient.Do(req)
  if err != nil {
    return nil, "", err
  }

  // If 304 Not Modified, nothing changed
  if resp.StatusCode == http.StatusNotModified {
    return nil, lastETag, ErrNotModified
  }

  // Store the new ETag for next time
  newETag := resp.Header.Get("ETag")

  // Parse the feed contents...

  return parsedFeed, newETag, nil
}
```
By storing and respecting ETags, I can avoid re-downloading and re-parsing feeds that haven't changed, saving bandwidth and CPU resources.

### 2. Last-Modified Headers
Similar to ETags, many feeds provide Last-Modified headers:
``` go
func fetchWithLastModified(url string, lastModified string) (*Feed, string, error) {
  req, err := http.NewRequest("GET", url, nil)

  // Send the last modified date if we have it
  if lastModified != "" {
    req.Header.Add("If-Modified-Since", lastModified)
  }

  // Rest of function similar to ETag version...
}
```

### 3. Feed-Level Update Hints
Many RSS feeds actually provide hints about when they'll update next:
``` go
// Look for ttl element in RSS 2.0
ttl := parsedFeed.TTL
if ttl > 0 {
  // Feed publisher suggests checking every TTL minutes
  suggestedInterval := time.Duration(ttl) * time.Minute

  // Still enforce our own bounds
  if suggestedInterval > maxInterval {
    suggestedInterval = maxInterval
  } else if suggestedInterval < minInterval {
    suggestedInterval = minInterval
  }

  return suggestedInterval
}

// Look for updateFrequency in RSS 1.0
// Look for updatePeriod in RSS 1.0
```
Respecting these publisher-provided hints helps reduce unnecessary load on their servers.

### 4. Subscriber-Based Prioritization
An optimization I'm particularly excited about is adjusting fetch priorities based on subscriber counts:
``` go
func calculateFetchPriority(feed Feed) int {
  subscriberCount, _ := getSubscriberCount(feed.ID)

  // Feeds with more subscribers get higher priority
  if subscriberCount > 100 {
    return HighPriority
  } else if subscriberCount > 10 {
    return MediumPriority
  }
  return LowPriority
}
```
This ensures that the most popular feeds in my service get updated most quickly, benefiting the maximum number of users with each fetch operation.


### 5. Smart Error Backoff
I'm also planning a smarter backoff strategy for problematic feeds:
``` go
func calculateBackoffInterval(failures int) time.Duration {
  // Exponential backoff with jitter
  baseDelay := time.Minute * time.Duration(math.Pow(2, float64(failures)))
  if baseDelay > 24*time.Hour {
    baseDelay = 24 * time.Hour  // Cap at 1 day
  }

  // Add jitter to prevent thundering herd problems
  jitter := time.Duration(rand.Int63n(int64(baseDelay) / 4))
  return baseDelay + jitter
}
```

This helps problematic feeds automatically get a rest period, but still be checked periodically.

### 6. Content-Based Diffing
To truly optimize, I'm considering implementing content diffing:
``` go
func hasActuallyChanged(oldContent, newContent string) bool {
  // Strip common dynamic elements like dates, view counts, etc.
  oldNormalized := normalizeContent(oldContent)
  newNormalized := normalizeContent(newContent)

  // Fast hash comparison
  return calculateHash(oldNormalized) != calculateHash(newNormalized)
}
```
This would prevent database updates when feeds change timestamps or other metadata but not actual content.


### 7. Feed Health Metrics
Finally, I'm planning to track more detailed health metrics for each feed:
``` go
type FeedHealth struct {
  SuccessRate         float64     // Percentage of successful fetches
  AverageResponseTime time.Duration
  LastDowntime        time.Time
  ErrorCount          int
  ConsecutiveErrors   int
  ContentFreshness    time.Duration // How often content actually changes
}
```
These metrics will feed back into the fetching algorithm, creating an even more intelligent system.


## Implementation Considerations
If you're building something similar, here are some key considerations:

### 1. Thread safety
Use thread-safe structures like sync.Map when dealing with concurrent workers accessing shared data.

### 2. Error handling
Network errors are common when fetching feeds. Implement sensible retry policies and don't let one problematic feed affect others.

### 3. Developer ergonomics
Use configurable parameters with sensible defaults:
``` go
// Example constructor with sensible defaults
func NewAdaptiveFetcher() *AdaptiveFetcher {
  return &AdaptiveFetcher{
    TickerInterval:  5 * time.Minute,
    MinInterval:     10 * time.Minute,
    MaxInterval:     6 * time.Hour,
    DefaultInterval: 1 * time.Hour,
    AnalysisWindow:  7 * 24 * time.Hour, // 1 week
    WorkerCount:     5,
    RequestTimeout:  20 * time.Second,
  }
}
```

### 4. Feed metadata updates
Use fetch opportunities to also update feed metadata:
``` go
func updateFeedMetadata(feed *Feed, parsedFeed *ParsedFeed) {
  // Update feed title if changed
  if parsedFeed.Title != "" && feed.Title != parsedFeed.Title {
    feed.Title = parsedFeed.Title
  }

  // Update feed image if available
  if parsedFeed.Image != nil && feed.Image == nil {
    feed.Image = parsedFeed.Image.URL
  }

  // Update other metadata...
  // Save changes to database
}
```

### 5. User experience impact
Remember that how you fetch feeds directly impacts user experience. The goal is to balance:
- Content freshness (users want to see new posts quickly)
- Resource usage (lower is better for both you and feed publishers)
- Battery life (for mobile clients syncing with your service)

## Conclusion
Building an intelligent feed fetcher might seem like over-engineering at first glance. But as my RSS reader has grown, the difference between naive polling and smart polling has become dramatic.
My adaptive fetcher has allowed me to scale to handling tens of thousands of feeds while maintaining excellent content freshness and reasonable server costs—all as a solo indie developer.
The principles I've discussed—adaptive intervals, worker pools, and pattern recognition—can be applied to many polling-based systems beyond RSS readers, from API monitoring to social media aggregation.
What optimization challenges have you faced when building polling systems? Let me know in the comments!

---

If you enjoyed this article, check out my RSS reader app at [feedify.app](https://feedify.app) where I've implemented these techniques and many more to create a lightning-fast RSS reading experience.

---
layout: ../../layouts/BlogLayout.astro
author: Nikolaj Jensen
datetime: 2025-03-29T11:19:00Z
title: "Building Seamless API Integrations in Go: Lessons from Feedify"
slug: building-seamless-api-integrations
featured: true
draft: false
tags:
  - go
ogImage: ""
description: "Learn how to build robust API integrations in Go using the lessons learned from Feedify, an RSS reader application."
liveUrl: ""
time: 10
---

# Building Seamless API Integrations in Go: Lessons from Feedify

As developers, we often find ourselves creating applications that need to talk to other services. The ability to integrate with third-party tools can transform a good product into an essential one by fitting into users' existing workflows. In this article, I'll share how I approached building API integrations for [Feedify](https://feedify.app), my RSS reader application, and provide some practical guidance for implementing your own integrations in Go.

## Why Integrations Matter

When I started building Feedify, I focused on creating a solid core experience: a clean interface for reading RSS feeds. However, user feedback quickly revealed that while people loved consuming content in the app, they wanted to do more with the articles they found interesting. Some wanted to save articles to Notion for research, others wanted to share discoveries with teammates via Slack, and power users wanted webhook support to build custom workflows.

Rather than trying to rebuild these capabilities within Feedify, I decided to leverage existing platforms through API integrations.

## Architecture for Flexibility

The first challenge was designing an architecture that could support multiple integrations without becoming unwieldy. Here's the approach I took:

```go
type Integrations struct {
    Log *logger.LoggerService
}

func NewIntegrations(log *logger.LoggerService) *Integrations {
    return &Integrations{
        Log: log,
    }
}
```

This simple structure serves as the coordinator for all integrations. It doesn't know the details of each service but orchestrates when and how they're called.

I defined two primary operations:

1. `SendEntry` - Triggered when a user saves an article
2. `PushEntries` - Triggered when new articles arrive in a feed

This clean separation of concerns makes it easy to add new integration types without modifying the core application logic.

## Client Implementation Pattern

For each integrated service, I followed a consistent pattern:

1. Create a package for the service
2. Define a client struct with necessary authentication details
3. Implement methods that handle the specific API calls

Let's look at the Notion integration as an example:

```go
package notion

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "time"
)

const defaultClientTimeout = 10 * time.Second

type Client struct {
    apiToken string
    pageID   string
}

func NewClient(apiToken, pageID string) *Client {
    return &Client{apiToken, pageID}
}

func (c *Client) UpdateDocument(entryURL string, entryTitle string) error {
    if c.apiToken == "" || c.pageID == "" {
        return fmt.Errorf("notion: missing API token or page ID")
    }
    
    apiEndpoint := "https://api.notion.com/v1/blocks/" + c.pageID + "/children"
    
    requestBody, err := json.Marshal(&notionDocument{
        Children: []block{
            {
                Object: "block",
                Type:   "bookmark",
                Bookmark: bookmarkObject{
                    Caption: []any{},
                    URL:     entryURL,
                },
            },
        },
    })
    
    // Implementation details...
    
    return nil
}
```

This pattern creates a clean, testable client that handles all the details of communicating with the Notion API. The client knows how to format requests according to Notion's API specifications and handle any service-specific quirks.

## Orchestrating Multiple Integrations

With individual clients in place, the integration service coordinates their use:

```go
func (i *Integrations) SendEntry(entry *store.Article, userIntegrations *store.Integration) {
    if userIntegrations.NotionEnabled {
        i.Log.Log().Info().Int64("user_id", userIntegrations.UserID).Int64("entry_id", entry.ID).Str("entry_url", entry.Url).Msg("Sending entry to Notion")

        client := notion.NewClient(
            userIntegrations.NotionToken,
            userIntegrations.NotionPageID,
        )
        if err := client.UpdateDocument(entry.Url, entry.Title); err != nil {
            i.Log.Log().Err(err).Int64("user_id", userIntegrations.UserID).Int64("entry_id", entry.ID).Str("entry_url", entry.Url).Msg("Unable to send entry to Notion")
        }
    }
    
    // Other integrations...
}
```

This approach has several benefits:

1. **Separation of concerns**: Each client handles only its service-specific logic
2. **Clean error handling**: Failures in one integration don't affect others
3. **Comprehensive logging**: Every operation is logged for debugging
4. **Easy extensibility**: Adding new integrations requires minimal changes

## Practical Lessons Learned

Building these integrations for Feedify taught me several valuable lessons:

### 1. Consistent Error Handling

In production systems, external APIs will fail. It's not a question of if, but when. My approach guarantees that:

- Errors are properly logged with context
- One failing integration doesn't prevent others from working
- The application remains responsive even when external services aren't

### 2. Timeout Management

Every external API call includes a timeout:

```go
const defaultClientTimeout = 10 * time.Second
// ...
httpClient := &http.Client{Timeout: defaultClientTimeout}
```

This prevents hung connections from degrading the user experience if an external service is slow to respond.

### 3. Structured Logging

The integration layer uses structured logging to make troubleshooting easier:

```go
i.Log.Log().Info().Int64("user_id", userIntegrations.UserID).Int64("entry_id", entry.ID).Str("entry_url", entry.Url).Msg("Sending entry to Notion")
```

This approach captures relevant context with each log entry, making it much easier to trace issues across multiple integrations.

### 4. Webhooks for Ultimate Flexibility

While dedicated integrations are valuable, I also implemented webhook support to enable custom workflows:

```go
if userIntegrations.WebhookEnabled {
    webhookClient := webhook.NewClient(userIntegrations.WebhookURL, userIntegrations.WebhookSecret)
    if err := webhookClient.SendSaveEntryWebhookEvent(entry); err != nil {
        // Error handling...
    }
}
```

This allows power users to build their own integrations with virtually any service that accepts HTTP requests.

## Getting Started with Your Own Integrations

If you're looking to add integrations to your Go application, here's a simple framework to follow:

1. **Create a client package for each service**: Keep service-specific code isolated
2. **Define a consistent client interface**: Make it easy to add new integrations
3. **Implement proper error handling**: External services will fail
4. **Add comprehensive logging**: Troubleshooting is much easier with context
5. **Consider adding webhook support**: This gives users ultimate flexibility

## What's Next for Feedify

The latest release of Feedify (v1.0.12) includes all the integrations discussed here:

- Notion integration for saving articles to your workspace
- Slack integration for sharing articles to channels
- Readwise integration for knowledge management
- Webhook support for custom integrations

I'm also working on additional integrations based on user feedback. Building these connections between services has significantly enhanced Feedify's utility while maintaining its focused core experience.

## Conclusion

Integrations transform standalone applications into components of a larger workflow ecosystem. With Go's strong HTTP client support and clean error handling, implementing robust integrations is straightforward and rewarding.

If you're building an API or application in Go, I hope these patterns and lessons help you create integrations that delight your users. And if you're an RSS enthusiast, check out [Feedify](https://feedify.app) to see these integrations in action!

---

*What integrations have you built for your Go applications? I'd love to hear about your experiences in the comments below.*

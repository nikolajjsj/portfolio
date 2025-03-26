---
layout: ../../layouts/BlogLayout.astro
author: Nikolaj Jensen
datetime: 2025-03-26T17:30:00Z
title: "Handling JSON Default Values in Go: A Developer's Findings"
slug: handling-json-default-values-in-go
featured: true
draft: false
tags:
  - go
ogImage: ""
description: "Learn how to handle default values in Go when unmarshalling JSON data."
liveUrl: ""
time: 5
---

# Handling JSON Default Values in Go: A Developer's Findings

## The Real-World Challenge

As a developer building Feedify, my latest RSS reader application, I quickly encountered a common pain point in Go development: how to elegantly handle default values when working with JSON marshalling and unmarshalling. This article will walk you through practical techniques to solve this challenge, solely based on my findings that occurred during my development process.

### What was the issue?

My RSS reader has user settings for stuff like: the background color of the article reader section, font sizes, and more. This is simply stored as a JSONB column in a settings table in my database, of which I simply am marshalling with the awesome standard library in Go, and sending to the user via API requests. But here I needed the ability for default values, which I stored in a struct (type Settings struct), which I have a generator function called: defaultSettings, which can evolve over time as more and more settings are added.

## Why Default Values Matter

In modern application development, JSON is the lingua franca of data exchange. When working with APIs, configuration files, or external data sources, you'll often need to provide sensible default values for optional fields. In the context of Feedify, this might mean setting default refresh rates for feeds or configuring default display preferences.

## Solving the Default Value Puzzle in Go

Go provides multiple strategies for handling default values during JSON operations. I'll share three powerful approaches that have transformed my development workflow:

### 1. Struct Tags with Omitempty

The simplest method involves using the omitempty struct tag. While this doesn't provide default values during unmarshalling, it helps with cleaner JSON representation.

```go
type FeedSettings struct {
    RefreshRate int    `json:"refresh_rate,omitempty"`
    Theme       string `json:"theme,omitempty"`
}
```

### 2. Pointer-Based Defaults

By using pointers, you can distinguish between unset and zero values, allowing more nuanced default handling.

```go
type FeedConfig struct {
    MaxItems    *int    `json:"max_items"`
    SortOrder   *string `json:"sort_order"`
}

func DefaultFeedConfig() *FeedConfig {
    defaultMax := 10
    defaultSort := "newest"
    return &FeedConfig{
        MaxItems:   &defaultMax,
        SortOrder: &defaultSort,
    }
}
```

### 3. Unmarshal directly to a instantiated struct: The Approach I Went With

When handling user settings, I opted for a straightforward yet powerful approach. I start by creating a default settings configuration using the DefaultUserSettings() function, which establishes baseline values for all potential settings. Then, I seamlessly merge user-specific configurations from the database by marshalling the database response into the settings struct.

This method elegantly accomplishes two critical tasks:
- It ensures every setting has a sensible default value
- It allows users to override these defaults with their preferences

```go
settings := DefaultUserSettings()
result, _ := f.service.Query().GetSettings()
json.Unmarshal([]byte(result.Settings), &settings)
```

### Bonus Tip: Validation

Consider combining these default value techniques with validation libraries like go-playground/validator to ensure data integrity.

```go
type FeedSettings struct {
    RefreshRate int    `json:"refresh_rate" validate:"gte=0,lte=1440"`
    Theme       string `json:"theme" validate:"oneof=light dark system"`
}
```

## Conclusion

Handling default values in Go doesn't have to be complicated. By understanding these techniques, you can create more resilient, user-friendly applications that gracefully handle incomplete or missing configuration data.


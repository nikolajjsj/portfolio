---
layout: ../../layouts/BlogLayout.astro
author: Nikolaj Jensen
datetime: 2025-03-18T15:22:00Z
title: "Building Feedify: A Modern RSS Reader with Go, React, and PostgreSQL"
slug: building-feedify
featured: true
draft: false
tags:
  - go
  - react
  - postgresql
ogImage: "assets/feedify-og-image.png"
description: "Learn how to build a modern RSS reader using Go, React, and PostgreSQL."
liveUrl: https://feedify.app
time: 5
---

# Building Feedify: A Modern RSS Reader with Go, React, and PostgreSQL

When I set out to build **Feedify**, my goal was to create a fast, efficient, and privacy-focused RSS reader that could handle large amounts of content seamlessly. To achieve this, I chose a modern and scalable tech stack that balances performance, maintainability, and developer experience.

Here’s a deep dive into how Feedify is built under the hood.

## 🚀 Backend: Go + Chi + PostgreSQL + SQLC

### **Go as the API Backbone**
Feedify’s backend is powered by **Go**, known for its performance, concurrency model, and simplicity. Go’s lightweight nature ensures that API requests are handled efficiently, even under high load.

### **Routing with Chi**
For routing, I use **Chi**, a lightweight and composable router that makes it easy to define routes while maintaining flexibility. Chi allows for middlewares, grouping, and fine-grained control over HTTP handlers without unnecessary complexity.

Example of a simple API route in Feedify:
```go
r := chi.NewRouter()
r.Get("/feeds", GetFeedsHandler)
r.Post("/feeds", CreateFeedHandler)
r.Get("/feeds/{id}", GetFeedHandler)
```

### **PostgreSQL for Data Storage**
All user data, including subscriptions, articles, and settings, are stored in **PostgreSQL**. Postgres is a powerful, battle-tested relational database that scales well and supports JSONB fields when needed.

### **SQLC for Schema Management**
I use **SQLC** to generate Go code from SQL queries, ensuring type safety and eliminating the need for an ORM. This provides the benefits of raw SQL performance while maintaining maintainable Go code.

Example SQLC query for fetching feeds:
```sql
-- name: GetUserFeeds :many
SELECT * FROM feeds WHERE user_id = $1 ORDER BY created_at DESC;
```

Then, in Go, I can call:
```go
feeds, err := queries.GetUserFeeds(ctx, userID)
```

This approach ensures that my database interactions remain efficient and type-safe.

## ⚡ Frontend: Vite + React + TypeScript

### **React for the UI**
The frontend is built using **React**, providing a reactive, component-based architecture that ensures a smooth user experience. The app is optimized for speed and usability, with an intuitive three-column layout for navigation.

### **Vite for Fast Builds**
Instead of using Webpack, I chose **Vite** for an incredibly fast development experience. Vite’s hot module replacement (HMR) and instant server startup make frontend development significantly smoother.

### **TanStack Query for Data Fetching**
To handle API calls and caching efficiently, I use **TanStack Query** (formerly React Query). It simplifies data fetching, caching, and synchronization with the server.

Example usage:
```tsx
const { data: feeds, isLoading } = useQuery(["feeds"], fetchFeeds);
```
This eliminates the need for unnecessary state management and ensures efficient updates.

## 💳 Stripe for Payments
Feedify offers both monthly and yearly subscription plans, managed via **Stripe**. I use Stripe’s Checkout API to handle secure payments with minimal integration overhead.

Example Stripe implementation:
```go
params := &stripe.CheckoutSessionParams{
    PaymentMethodTypes: stripe.StringSlice([]string{"card"}),
    Mode:              stripe.String("subscription"),
    SuccessURL:        stripe.String(successURL),
    CancelURL:         stripe.String(cancelURL),
}
session, err := session.New(params)
```
This ensures seamless and secure transactions while keeping the implementation straightforward.

## 🔥 Key Takeaways
- **Go + Chi** provide a robust backend with high performance and maintainability.
- **PostgreSQL + SQLC** allow type-safe, efficient database interactions.
- **React + Vite** ensure a fast, modern frontend experience.
- **TanStack Query** simplifies API calls and caching.
- **Stripe** handles payments securely and efficiently.

Feedify is built to be fast, reliable, and enjoyable for both end-users and developers. If you’re interested, check it out at [feedify.app](https://feedify.app) and let me know what you think!

---

Would love to hear from fellow developers—what’s your go-to stack for building modern web apps?



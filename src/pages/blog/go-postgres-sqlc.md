---
layout: ../../layouts/BlogLayout.astro
author: Nikolaj Jensen
datetime: 2025-03-12T18:13:00Z
title: "Leveraging PostgreSQL and SQLC for Efficient and Type-Safe Database Access in Go"
slug: go-postgres-sqlc
featured: true
draft: false
tags:
  - go
  - postgresql
  - sqlc
ogImage: ""
description: "Learn how to leverage PostgreSQL and SQLC for efficient and type-safe database access in Go."
liveUrl: ""
time: 8
---

# Leveraging PostgreSQL and SQLC for Efficient and Type-Safe Database Access in Go

When building modern web applications, database efficiency and maintainability are critical factors. PostgreSQL has long been a go-to relational database due to its robustness, scalability, and rich feature set. However, interacting with it in Go applications often leads to trade-offs between raw SQL performance and ORM convenience.

This is where **SQLC** comes in—a tool that generates type-safe Go code from raw SQL queries. By using PostgreSQL with SQLC, you can achieve:
- **Performance of raw SQL** (without an ORM overhead)
- **Type safety in Go code** (reducing runtime errors)
- **Automatic query generation** (for maintainability and readability)

In this article, we'll explore how to integrate **PostgreSQL and SQLC** effectively in a Go project.

## 📌 Why SQLC Over an ORM?
Go developers often debate whether to use an **ORM (e.g., GORM, Ent)** or stick with raw SQL using **database/sql**. While ORMs simplify some tasks, they introduce abstraction overhead, reduce query control, and can impact performance.

SQLC bridges this gap by allowing you to **write raw SQL queries** and automatically generate **strongly-typed Go code**. This approach offers:
- **Better performance:** No runtime query generation.
- **Type safety:** Queries are checked at compile time.
- **Maintainability:** Queries are centralized in SQL files, making them easier to manage.

## 🛠 Setting Up PostgreSQL and SQLC in a Go Project
Let’s go through the setup process for using PostgreSQL with SQLC in a Go application.

### **1️⃣ Install PostgreSQL**
Ensure you have PostgreSQL installed.

### **2️⃣ Create a Sample Database**
We’ll create a simple database for managing **feeds** (useful for an RSS reader like [Feedify](https://feedify.app)).
```sql
CREATE DATABASE feedify;
```

Connect to it:
```sh
psql feedify
```

Then, create a `feeds` table:
```sql
CREATE TABLE feeds (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    url TEXT NOT NULL UNIQUE,
    title TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### **3️⃣ Install SQLC**
Install SQLC via Go:
```sh
go install github.com/kyleconroy/sqlc/cmd/sqlc@latest
```
Verify installation:
```sh
sqlc version
```

### **4️⃣ Configure SQLC**
Create a `sqlc.yaml` file in your project root:
```yaml
version: "2"
sql:
  - schema: "db/schema.sql"
    queries: "db/queries.sql"
    engine: "postgresql"
    gen:
      go:
        package: "db"
        out: "db"
```
This tells SQLC where to find schema and query files and where to generate the Go code.

### **5️⃣ Define SQL Queries**
Create a `db/queries.sql` file:
```sql
-- name: GetUserFeeds :many
SELECT * FROM feeds WHERE user_id = $1 ORDER BY created_at DESC;

-- name: CreateFeed :one
INSERT INTO feeds (user_id, url, title) VALUES ($1, $2, $3) RETURNING *;
```

### **6️⃣ Generate Go Code**
Run SQLC to generate Go structs and query methods:
```sh
sqlc generate
```
This creates Go code that looks like this:
```go
type Feed struct {
    ID        int       `json:"id"`
    UserID    int       `json:"user_id"`
    URL       string    `json:"url"`
    Title     *string   `json:"title,omitempty"`
    CreatedAt time.Time `json:"created_at"`
}
```

### **7️⃣ Using SQLC in Go Code**
Now, integrate SQLC into your Go application:
```go
package main

import (
    "context"
    "database/sql"
    "fmt"
    "log"
    _ "github.com/lib/pq"
    "myproject/db"
)

func main() {
    conn, err := sql.Open("postgres", "postgres://user:password@localhost:5432/feedify?sslmode=disable")
    if err != nil {
        log.Fatal(err)
    }
    defer conn.Close()

    queries := db.New(conn)
    ctx := context.Background()

    // Insert a new feed
    newFeed, err := queries.CreateFeed(ctx, db.CreateFeedParams{
        UserID: 1,
        URL:    "https://example.com/feed",
        Title:  sql.NullString{String: "Example Feed", Valid: true},
    })
    if err != nil {
        log.Fatal(err)
    }
    fmt.Printf("New Feed: %+v\n", newFeed)

    // Fetch user feeds
    feeds, err := queries.GetUserFeeds(ctx, 1)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("User Feeds:", feeds)
}
```

## 🌟 Advantages of This Approach
By combining **PostgreSQL with SQLC**, we gain several benefits:
1. **Raw SQL power** – No abstraction overhead.
2. **Compile-time safety** – Queries are validated before running.
3. **Automatic struct generation** – No need to manually define Go models.
4. **Better maintainability** – Queries are managed in separate SQL files.

## 🚀 Scaling Up
As your application grows, consider:
- **Connection pooling** with [pgx](https://github.com/jackc/pgx)
- **Background job processing** with tools like [TaskQ](https://github.com/vmihailenco/taskq)
- **Caching layers** using **Redis** for frequently accessed queries

## 🎯 Final Thoughts
Using **PostgreSQL with SQLC** is a powerful way to interact with a database in Go. You get the best of both worlds—**SQL’s raw power** and **Go’s type safety**—without the pitfalls of ORMs. If you're building a high-performance Go application, this setup is an excellent choice.

Would you consider SQLC for your next Go project? Let me know your thoughts!


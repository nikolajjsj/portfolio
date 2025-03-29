---
layout: ../../layouts/BlogLayout.astro
author: Nikolaj Jensen
datetime: 2021-11-21T12:00:00Z
title: "Go — Values, Variables, and Constants (basics)"
slug: basics-go-values-variables-and-constants
featured: false
draft: false
tags:
  - go
ogImage: ""
description: "Learn how to use values, variables, and constants in Go."
liveUrl: ""
time: 1
---

# Go — Values, Variables, and Constants (basics)

Go has several different value types, including:

- String
- Integer
- Float
- Boolean
- etc.

Here are some examples:

```go
package main

import "fmt"

func main() {
    // String
    var name string = "Alice"
    fmt.Println(name) // Output: Alice

    // Integer
    var age int = 30
    fmt.Println(age) // Output: 30

    // Float
    var score float64 = 95.5
    fmt.Println(score) // Output: 95.5

    // Boolean
    var isActive bool = true
    fmt.Println(isActive) // Output: true
}
```

All these values can be assigned to variables and saved for later use. Go’s variables are explicitly declared, and the type and value are then used by the compiler to, for example, check for type correctness when comparing two variables or during function calls.

Here are some examples of variable initialization:

```go
package main

import "fmt"

func main() {
    // Declare a variable without initialization
    var count int
    fmt.Println(count) // Output: 0
}

---
layout: ../../layouts/BlogLayout.astro
author: Nikolaj Jensen
datetime: 2022-04-28T12:00:00Z
title: "Go — Maps (basics)"
slug: basics-go-maps
featured: false
draft: false
tags:
  - go
ogImage: ""
description: "Learn how to use maps in Go to store key/value pairs."
liveUrl: ""
time: 2
---

# Go — Maps (basics)

Go's version of other languages' Hash and Dict are called Maps.

To create a Map, you can use the `make` function. Here, we create a map with keys of type `string` and values of type `int`:

```go
m := make(map[string]int)
m["k1"] = 7
m["k2"] = 13
```

To access a value in the map, use the square bracket notation as shown above (`m["k1"] = 7`). You can also initialize a map and assign values in a single line:

```go
m := map[string]int{"bar": 7, "baz": 11}
```

The built-in function `len` returns the number of key/value pairs in a map:

```go
fmt.Println("len:", len(m)) // 2
```

To delete a key/value pair from the map, use the `delete` function. Here, we delete the pair with the key "k2" from the map `m`:

```go
delete(m, "k2")
```

When accessing a value in a map, two values are returned. The second value indicates whether the key was present in the map. This is useful for distinguishing between missing keys and keys with "falsy" values like `0` or `""`, which could evaluate to false in user-defined logic checks. You can use a blank identifier (`_`) to omit the value if it's not needed:

```go
_, isThere := m["none"]
fmt.Println("Is there:", isThere) // false
```

---
layout: ../../layouts/BlogLayout.astro
author: Nikolaj Jensen
datetime: 2022-01-30T12:00:00Z
title: "Go — Slices (basics)"
slug: basics-go-slices
featured: false
draft: false
tags:
  - go
ogImage: ""
description: "Learn how to use slices in Go."
liveUrl: ""
time: 2
---

# Go — Slices (basics)

Slices are very much similar to Arrays in Go but provide a much more powerful, and easier interface than arrays do. One of the main differences between slices and arrays in Go is that slices are only detailed by the items it contains, and not what they possibly could contain.

You can create an empty slice using the function: `make`. Note that even though the slice is initialized with 3 spots, it does not show these 3 spots:

```go
package main

import "fmt"

func main() {
  slice := make([]string, 3)
  fmt.Println("Empty:", slice) // Empty: []
}
```

Like arrays, you can get and set the different items in the slice, and also see the length of the slice, just as you did with arrays:

```go
package main

import "fmt"

func main() {
  slice := make([]string, 3)

  slice[0] = "1"
  slice[1] = "2"
  slice[2] = "3"
  fmt.Println("set:", slice)      // set: [1, 2, 3]
  fmt.Println("get:", slice[2])   // get: 3

  fmt.Println("len:", len(slice)) // len: 3
}
```

Unlike arrays, slices have some more functionality which makes slices much more powerful than arrays.

One of these powerful functions is the `append` function. Append allows for, like the name suggests, appending values to the slice:

```go
package main

import "fmt"

func main() {
  slice := make([]string, 3)

  slice[0] = "1"
  slice[1] = "2"
  slice[2] = "3"

  slice = append(slice, "4")
  slice = append(slice, "5", "6")
  fmt.Println("append:", slice) // append: [1, 2, 3, 4, 5, 6]
}
```

More functionalities exist with slices, such as copying slices and slicing slices, making them more dynamic than arrays in Go.

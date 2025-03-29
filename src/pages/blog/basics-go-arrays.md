---
layout: ../../layouts/BlogLayout.astro
author: Nikolaj Jensen
datetime: 2022-01-22T12:00:00Z
title: "Go — Arrays (basics)"
slug: basics-go-arrays
featured: false
draft: false
tags:
  - go
ogImage: ""
description: "Learn how to use arrays in Go."
liveUrl: ""
time: 1
---

# Go — Arrays (basics)

In Go, an array is a sequence of elements defined by a specific length. This is unlike other high-level programming languages like JavaScript, Python, and many more.

In Go, arrays are always the same length as they are defined. Here is an example of initializing an array of length 5 containing all zeroes in Go:

```go
package main

import "fmt"

func main() {
  var a [5]int
  fmt.Println("empty:", a) // empty: [0 0 0 0 0]
}
```

We can then access or set new values for each of the "spots" in the array:

```go
package main

import "fmt"

func main() {
  var a [5]int

  a[4] = 69
  fmt.Println("set:", a)      // set: [0 0 0 0 69]
  fmt.Println("get:", a[4])   // get: 69
}
```

The previously mentioned length of an array can also be found by the function `len`:

```go
package main

import "fmt"

func main() {
  var a [5]int

  fmt.Println("len:", len(a)) // len: 5
}
```

When initializing a new array, we can also put in the values we want in each place in the array, called initialization and declaration:

```go
package main

import "fmt"

func main() {
  a := [5]int{2, 4, 6, 8, 10}

  fmt.Println("array:", a) // array: [2 4 6 8 10]
}
```

More often than not, you will usually see "slices" in Go rather than arrays. For slices, see my next article, which will describe the differences between arrays and slices in Go.

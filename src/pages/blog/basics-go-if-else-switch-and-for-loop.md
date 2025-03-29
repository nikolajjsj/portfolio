---
layout: ../../layouts/BlogLayout.astro
author: Nikolaj Jensen
datetime: 2022-01-22T12:00:00Z
title: "Go — If/Else, Switch, and For loop (basics)"
slug: basics-go-if-else-switch-and-for-loop
featured: false
draft: false
tags:
  - go
ogImage: ""
description: "Learn how to use If/Else, Switch, and For loop in Go."
liveUrl: ""
time: 3
---

# Go — If/Else, Switch, and For loop (basics)

Logic checks in Go can be performed in several different ways; two of these are: If/Else statements and Switches. Both of these I will describe here.

## If/Else

Here is an example of an if/else block, which in this case will always result in the if logical test returning true, and therefore always run the if-block's code:

```go
package main

import "fmt"

func main() {
  // Will result in the if block running
  if true {
    fmt.Println("This is the if block")
  } else {
    fmt.Println("This is the else block")
  }
}
```

If you need more logical tests, you can also use the "else if" statement:

```go
package main

import "fmt"

func main() {
  num := 5

  if num < 2 {
    fmt.Println("num is less than 2")
  } else if num < 4 {
    fmt.Println("num is less than 4")
  } else {
    fmt.Println("num is higher than or equal to 4")
  }
}
```

If you need a lot of different tests, a more concise and easier logical test operator is the Switch statement, which will be described next.

## Switch

Here is an example of a typical switch statement:

```go
package main

import "fmt"

func main() {
  i := 3

  switch i {
  case 1:
    fmt.Println("i is 1")
  case 2:
    fmt.Println("i is 2")
  case 3:
    fmt.Println("i is 3")
  }
}
```

If one of the case blocks has the same code, you can separate each case with commas to contain more checks:

```go
package main

import "fmt"

func main() {
  i := 7

  switch i {
  case 1, 2, 3:
    fmt.Println("i is 1, 2, or 3")
  case 4, 5, 6:
    fmt.Println("i is 4, 5, or 6")
  case 7, 8, 9:
    fmt.Println("i is 7, 8, or 9")
  }
}
```

Besides the case blocks, there is also a default block, which acts like the else block described earlier. The default block will run if none of the cases were logically true. Taking the above example, if the variable `i` was equal to 10, then a potential default block would run. That is because none of the case blocks caught this:

```go
package main

import "fmt"

func main() {
  i := 10

  switch i {
  case 1, 2, 3:
    fmt.Println("i is 1, 2, or 3")
  case 4, 5, 6:
    fmt.Println("i is 4, 5, or 6")
  case 7, 8, 9:
    fmt.Println("i is 7, 8, or 9")
  default:
    fmt.Println("i is not: 1, 2, 3, 4, 5, 6, 7, 8, or 9")
  }
}
```

## For loop

The for loop is useful for running some code block a number of times or based on items in an array, or some other thing you have to do a lot of times.

Here are some examples of different for loops in Go:

```go
package main

import "fmt"

func main() {
  i := 3
  for i >= 1 {
    fmt.Println(i)
    i = i - 1 // 3, then 2, and finally 1
  }

  for x := 7; x <= 9; x++ {
    fmt.Println(x) // 7 then 8 and finally 9
  }

  for y := 0; y <= 5; y++ {
    if y%2 == 0 {
      continue
    }
    fmt.Println(y) // every odd number
  }

  for {
    fmt.Println("infinite loop")
  }
}


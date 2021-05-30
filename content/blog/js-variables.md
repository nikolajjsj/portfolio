---
title: JavaScript - Variables
description: 'JavaScript variables are containers for the programmer to store data values.'
img: /javascript.svg
block: JavaScript
---

## Introduction

One of the most important things in programming is being able to store values in some sort of containers.
![Photo of containers](https://images.unsplash.com/photo-1494961104209-3c223057bd26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1892&q=80 'Containers')

> Note: Developers often sees variables as containers for data.

In order to do this, we use variables. In JavaScript, you can declare a variable with 3 different keywords: var, let and const.
We’ll go over the differences later, but let’s first see a simple example of how to use a variable!

### Declaring a variable with some data

When making giving a variable some data to store, two things are happening:

1. We’re declaring the variable.
2. Then defining the variable by giving it some data.

```js
var foo // Declaring a variable
foo = 'data' // Storing the string: 'data'

var foo = 'data' // Shorter notation
```

We just initialized a variable called greeting, that holds the data/string: 'data'!

Like I said before, we can use three different keywords in JavaScript in order to declare variables:

- ```js
  var // As seen above
  ```
- ```js
  const
  ```
- ```js
  let
  ```

A, very simplified, difference between the three types of variables, is that you can change the value of variables declared with var and let, whereas a variable declared with const is, as the name suggests, constant ([almost?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const#const_in_objects_and_arrays)) not being able to change the stored data value.

## let, const

```js
let baz
baz = 'data'
```

---

### Source

- <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables>
- <https://www.w3schools.com/js/js_variables.asp>

---
layout: ../../layouts/BlogLayout.astro
author: Nikolaj Jensen
datetime: 2025-03-24T17:46:00Z
title: "Understanding Type Composition in Go: A Comprehensive Guide"
slug: understanding-type-composition-in-go
featured: true
draft: false
tags:
  - go
ogImage: ""
description: "Learn how to use type composition in Go to build complex types from simpler ones."
liveUrl: ""
time: 6
---

# Understanding Type Composition in Go: A Comprehensive Guide

During the development of my recent Go project [Feedify](https://app.feedify.app), I encountered challenges with type composition that required a deeper understanding of Go's approach to code reuse. This article explores the insights I gained, expanding on an excellent answer that helped me tremendously in sorting out these issues.

## Two Approaches to Type Composition in Go

Go offers two primary methods for type composition, each with distinct behaviors and use cases:

### Method 1: Type Definition (Type Alias)

```go
type Vehicle Car
```

This creates a completely new type based on an existing type's structure.

### Method 2: Embedding (Composition)

```go
type SportsCar struct {
    Car    // Embedding the Car type directly
}

// Or with a pointer
type RentalCar struct {
    *Car   // Embedding a pointer to Car
}
```

This embeds one type within another, creating a composition relationship.

## A Clear Comparison with Real-World Examples

Let's explore these approaches with concrete examples:

```go
package main

import "fmt"

// Original base type
type Car struct {
    Model  string
    Color  string
    MaxSpeed int
}

// Methods for the base type
func (c *Car) Drive() {
    fmt.Printf("Driving %s %s at up to %d mph\n", c.Color, c.Model, c.MaxSpeed)
}

func (c *Car) Park() {
    fmt.Printf("Parking %s %s\n", c.Color, c.Model)
}

// ================ APPROACH 1: TYPE DEFINITION ================

// Create a new type based on Car
type Truck Car

// Truck must define its own methods
func (t *Truck) LoadCargo(weight int) {
    fmt.Printf("Loading %d lbs into %s %s\n", weight, t.Color, t.Model)
}

// ================ APPROACH 2A: VALUE EMBEDDING ================

// SportsCar embeds Car directly
type SportsCar struct {
    Car          // Embed Car as a value
    Convertible bool
}

// SportsCar can have additional methods
func (s *SportsCar) ToggleRoof() {
    if s.Convertible {
        fmt.Printf("Toggling roof on %s %s\n", s.Color, s.Model)
    } else {
        fmt.Printf("This %s is not a convertible\n", s.Model)
    }
}

// ================ APPROACH 2B: POINTER EMBEDDING ================

// RentalCar embeds a pointer to Car
type RentalCar struct {
    *Car         // Embed Car as a pointer
    RentalCompany string
}

// RentalCar can have additional methods
func (r *RentalCar) Return() {
    fmt.Printf("Returning %s %s to %s\n", r.Color, r.Model, r.RentalCompany)
}

func main() {
    fmt.Println("===== Car (Base Type) =====")
    sedan := &Car{
        Model:    "Sedan",
        Color:    "Blue",
        MaxSpeed: 120,
    }
    sedan.Drive()
    sedan.Park()
    
    fmt.Println("\n===== Truck (Type Definition) =====")
    pickup := &Truck{
        Model:    "Pickup",
        Color:    "Red",
        MaxSpeed: 100,
    }
    // pickup.Drive()  // ERROR: Truck doesn't inherit Car's methods
    pickup.LoadCargo(500)
    fmt.Printf("Truck can go up to %d mph\n", pickup.MaxSpeed) // Can access fields
    
    fmt.Println("\n===== SportsCar (Value Embedding) =====")
    ferrari := &SportsCar{
        Car: Car{          // Must initialize the embedded type
            Model:    "Ferrari",
            Color:    "Red",
            MaxSpeed: 200,
        },
        Convertible: true,
    }
    ferrari.Drive()        // SportsCar inherits Car's methods
    ferrari.Park()         // SportsCar inherits Car's methods
    ferrari.ToggleRoof()   // SportsCar's own method
    
    fmt.Println("\n===== RentalCar (Pointer Embedding) - CORRECT =====")
    hertzCar := &RentalCar{
        Car: &Car{         // Must initialize the pointer to Car
            Model:    "Economy",
            Color:    "White",
            MaxSpeed: 90,
        },
        RentalCompany: "Hertz",
    }
    hertzCar.Drive()       // RentalCar inherits Car's methods
    hertzCar.Park()        // RentalCar inherits Car's methods
    hertzCar.Return()      // RentalCar's own method
    
    fmt.Println("\n===== RentalCar (Pointer Embedding) - ERROR CASE =====")
    // Creating a RentalCar with uninitialized Car pointer
    incomplete := &RentalCar{
        RentalCompany: "Budget",
        // Car field is nil! No Car pointer initialized
    }
    
    // This works fine because we're not touching the Car pointer
    fmt.Printf("Rental company: %s\n", incomplete.RentalCompany)
    
    // This will PANIC with nil pointer deferencing
    // fmt.Printf("Car model: %s\n", incomplete.Model)
    
    // But methods still work! (Though they might cause issues inside)
    incomplete.Drive() // This works because the method is promoted, but may cause issues inside the method
}
```

## Key Differences and Lessons

Through this example, we can clearly see the key differences:

### Field Access

**Both approaches** provide access to the original type's fields:
- `pickup.MaxSpeed` works (Type Definition)
- `ferrari.Model` works (Value Embedding)
- `hertzCar.Color` works (Pointer Embedding)

### Method Inheritance

**Only embedding** provides access to the original type's methods:
- `pickup.Drive()` would fail - Type Definition doesn't inherit methods
- `ferrari.Drive()` works - Value Embedding inherits methods
- `hertzCar.Drive()` works - Pointer Embedding inherits methods

### Initialization Requirements

**Pointer embedding** requires careful initialization:
- Value embedding: The embedded value is automatically initialized with zero values
- Pointer embedding: The embedded pointer must be explicitly initialized to avoid nil pointer errors

## When to Use Each Approach

1. **Use Type Definition When**:
   - You want to create a completely separate type with its own identity
   - You need the same structure but different behavior
   - You don't need to inherit methods from the original type

2. **Use Value Embedding When**:
   - You want to extend a type with additional functionality
   - You need to inherit all methods from the original type
   - You want simpler initialization without worrying about nil pointers

3. **Use Pointer Embedding When**:
   - You need the embedded object to be shared/updated across instances
   - The embedded type is large and you want to avoid copying
   - You need polymorphic behavior (interface satisfaction)

## Conclusion

Understanding these composition patterns in Go helps write cleaner, more maintainable code while avoiding common pitfalls like nil pointer dereferences. During the development of Feedify, recognizing these distinctions was crucial for properly extending third-party types while maintaining their behavior.

By choosing the right composition approach for each situation, you can leverage Go's flexible type system to create code that is both reusable and maintainable.

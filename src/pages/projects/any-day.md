---
layout: ../../layouts/ProjectLayout.astro
author: Nikolaj Jensen
datetime: 2026-08-26T12:00:00Z
title: Any Day
slug: any-day
featured: true
draft: true
tags:
  - swift
  - swiftui
  - widgetkit
description: Countdown app that shows everything you're waiting for on one screen
---

Application i built using Swift & SwiftUI.

Any Day keeps track of the dates you're waiting for and shows how long until each one.
Everything you're counting down to sits on a single screen, with further-off events
higher up, so you can see what's coming soon and how your events fall relative to each
other.

## What it does

Add a countdown for any date. The time remaining picks its own unit based on how far
away the event is: years and months for distant dates, days for the next few months,
and a live hours:minutes:seconds clock on the final day.

Drag the screen to move forward in time and see how long until each event from any
point. Pinch to switch between showing the next few days and the next several years.

Press and hold an event and drag down to set a reminder before it. Press and hold an
empty part of the screen to create an event at that moment instead — what the gesture
does is decided by what is under your finger.

Birthdays and anniversaries can repeat yearly, events can each have their own time zone
so a wedding abroad counts down to the local time there, and past events aren't deleted
— they move below the line and show how long ago they happened.

Countdowns also appear in Home Screen widgets, a Lock Screen widget, a live countdown in
the Dynamic Island on the final day, a Control Center button, and Siri.

## How it works

The layout is logarithmic rather than linear, so the next week takes up far more of the
screen than the year after it. Time-to-screen mapping, row placement and the string
formatter are all pure value types with no view or model dependencies, which is what
lets the app, the widgets and the Live Activity render the same field and the same
figures from the same code.

Two decisions did most of the work. Every event on every surface always carries an
explicit time-remaining string, so the visualisation supplies context and the number
supplies the answer — no bars or rings to estimate from. And the granularity is chosen
by distance automatically rather than by the user, so there is one format to learn
instead of a settings screen.

Widgets fit their own horizon to the furthest event they show, which keeps a small card
composed, while colour and line weight stay measured against a fixed reference — an
event has to look as urgent in a widget as it does in the app, regardless of what else
is on the screen with it.

## Built with

Swift and SwiftUI on iOS 26, SwiftData with a CloudKit private database, WidgetKit,
ActivityKit, App Intents and StoreKit 2. No third-party dependencies. 189 tests cover
the parts that are pure arithmetic — the granularity ladder, the mapping, row layout,
recurrence resolution and the paid-feature policy — without needing a simulator.

[Privacy Policy](/any-day/privacy-policy)

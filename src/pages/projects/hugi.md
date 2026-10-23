---
layout: ../../layouts/ProjectLayout.astro
author: Nikolaj Jensen
datetime: 2026-10-23T18:00:00Z
title: Hugi
slug: hugi
featured: true
draft: false
tags:
  - swift
  - swiftui
  - workoutkit
  - healthkit
  - foundation-models
ogImage: assets/hugi-og.jpg
description: A running coach for iPhone and Apple Watch that builds training plans from a first 5K to a first 100 miles, adapts them to the runs you actually do, and puts every workout in the Workout app
---

Hugi plans your training for a race, from a first 5K to a 100-mile ultra. It reads what you actually ran from Apple Health, suggests changes when life gets in the way, and puts the next two weeks of structured workouts straight into the Workout app on your Apple Watch.

## A plan you can trust

The plan comes from a deterministic engine: a Swift package with no UI, no network and no randomness. Same answers in, same plan out. It periodises base, build, peak and taper, sizes hard sessions by Daniels' limits, and builds the long run toward what the race actually needs.

Every plan it makes, every change it suggests and every change you make yourself has to pass the same guardrails. Weekly load grows by at most 10 %, measured from the higher of the last two weeks that had any training, so a week after a break or a lighter week isn't read as a jump. There are no more than three weeks of growth in a row. Road long runs stay a sensible share of the week, and there are never more than two hard sessions. A contract test builds plans for every distance, goal, schedule, starting volume and plan length, and every one of them has to pass.

Some race dates are simply too soon. Rather than quietly cramming, Hugi works out the minimum long run, peak week and (for 100 miles) back-to-back weekend the race needs. If growing safely from where you are can't get there in time, it says so, and offers the earliest race date that works.

## Changes you approve

Nothing changes behind your back. Cut a run short and Hugi asks what happened. Ride for two hours on top of your plan and it offers to ease the rest of the week. Rate a run's effort and your paces follow your fitness. Tell it you're tired, ill or injured and it builds back gradually after a few easy days.

Each suggestion shows exactly what it would change before you accept it. That preview isn't a description of the change. It's the change itself, applied to a copy of your plan and compared with the original, so what you approve is what you get.

## Built for the Workout app

Hugi doesn't record runs. The Workout app on Apple Watch already does that well. Instead, Hugi schedules each session there through WorkoutKit as a custom workout, with warm-up, repeats and cool-down, and an alert for your target pace or heart-rate zone.

Every goal and alert is checked against WorkoutKit's own `supportsGoal` and `supportsAlert` before it's sent, so the Watch never gets a step it can't run. The plan's session id travels with the workout into HealthKit, so a finished run ticks off its session without any guessing from times and distances.

## A coach that never sets a number

The coach runs on Apple's on-device Foundation Models. It explains why each session is in your plan, sums up your week, debriefs your runs and answers questions. It never writes a pace, a distance or a date you'll run to: Swift computes every number, and the model writes the words around them.

In the chat, it can prepare a change through one tool: move or skip a run, ease off, or take a break. That opens the same preview as every other change, so you approve it like any other. Small on-device models have opinions, and one of them was that "I feel tired" deserved three weeks off. The prompt now says plainly that tiredness means easing off, not a break.

Without Apple Intelligence every screen still works, with fixed text in place of the coach's.

## Ultras and trails

Import your race's GPX file and Hugi shows the route on a map and its elevation profile, and turns waypoints near the course into aid stations. Your runs get climbing targets, and peak weeks pair the long run with a second one the next day. The race-day plan splits the course at each aid station, weighting every leg for its climb, then shows your margin to each cutoff and how much carbohydrate and fluid to carry on each leg.

## Built with

Swift and SwiftUI on iOS 27, with Liquid Glass throughout, Swift Charts and MapKit. HealthKit reads workouts, WorkoutKit schedules them, Foundation Models writes the coaching, and StoreKit 2 handles subscriptions and a lifetime purchase. The plan engine is a separate Swift package with its own Swift Testing suite.

There are no third-party dependencies, no account, no server and no analytics.

[Privacy policy](/hugi/privacy-policy)

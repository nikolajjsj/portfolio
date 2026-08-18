---
layout: ../../layouts/ProjectLayout.astro
author: Nikolaj Jensen
datetime: 2026-08-01T10:00:00Z
title: Health Sync
slug: health-sync
url: /health-sync
featured: true
draft: false
tags:
  - swift
  - swiftui
  - healthkit
description: Syncs Fitbit data into Apple Health, with the timestamps right
---

Health Sync brings everything a Fitbit records into Apple Health, and takes care over the parts that are easy to get quietly wrong.

## Why it exists

The Fitbit app doesn't write to Apple Health. The legacy Fitbit Web API is decommissioned in September 2026 and never supported the Fitbit Air in the first place, so the only remaining route is Google's Health API, which replaced it in March 2026. Health Sync targets that exclusively.

## The interesting problem is time

Measurements that describe a whole night — resting heart rate, oxygen saturation, respiration rate, temperature — arrive with a date and no time at all. Writing them at midnight files last night's reading on the wrong day, and every daily average built on top inherits the mistake.

Health Sync fetches your sleep sessions first and anchors each of those values inside the night it was actually measured. Timestamps resolve against the Fitbit account's time zone rather than the phone's, so days line up the way Google computed them even when you travel.

## Writing twice is worse than not writing

Every sample carries a stable identifier derived from *when* a measurement happened, never from its value, so a reading Google later corrects updates the existing sample instead of landing beside it. A content hash keeps unchanged data from being rewritten at all.

That last part was less obvious than it sounds. The first version hashed with Swift's `Hasher`, which is seeded randomly per process — it worked perfectly for a whole session, then rewrote about 4,700 samples on the next cold start.

## Knowing when to write nothing

Apple Health stores exactly one HRV statistic, SDNN. Fitbit devices report a different one, RMSSD, and no fixed conversion exists between them — the ratio moves with autonomic state. So the app writes nothing at all for HRV rather than putting a plausible, invented number into a health record. Readings that fall outside a physiologically sensible range are refused on the same principle.

## Built with

Swift 6 and SwiftUI on iOS 27, with OAuth 2.0 PKCE and no third-party dependencies. The mapping layer is written as pure functions, which puts the whole correctness surface — timestamps, units, conversions, sleep-stage mapping — under test without a simulator, HealthKit or a network.

[Privacy policy](/health-sync/privacy-policy)

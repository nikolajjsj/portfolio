---
layout: ../../../layouts/AboutLayout.astro
title: Health Sync Privacy Policy
description: Privacy policy for the Health Sync iOS app.
---

# Privacy Policy

_Last updated: 1 August 2026_

## General

Health Sync moves health data from your Google Account into Apple Health on your iPhone. All of that happens on your device.

There is no Health Sync account and no Health Sync server. I never receive your health data and have no way to. Nothing is sold, shared, or used for advertising.

## What the app reads

With your permission, Health Sync reads the measurements your Fitbit has recorded into your Google Account, through Google's Health API: steps, floors climbed, distance, energy burned, workouts, sleep, heart rate, resting heart rate, VO₂ max, weight, oxygen saturation, respiration rate, temperature, nutrition and water intake. Each is a separate switch, and the app only asks Google for the categories you have turned on.

It also reads back from Apple Health, for two reasons: to recognise measurements it has already written so it updates them instead of creating duplicates, and to show you what it skipped because another app had already recorded it.

## Where the data goes

Into Apple Health on your device, and nowhere else.

The app contacts exactly two things, both operated by Google and only at your instruction: Google's sign-in and token endpoints, and the Google Health API. Google's handling of your data is governed by the [Google Privacy Policy](https://policies.google.com/privacy).

## Your Google sign-in

Signing in uses OAuth 2.0 with PKCE in a system browser session, so the app never sees your Google password. The token that keeps you signed in is held in the iOS Keychain and is sent only to Google.

## What is stored on your device

So that the same measurement is never written twice, the app keeps a small local record of each one it has written: an identifier derived from the data type and the time of the measurement, a digest used only to detect change — the measurement itself cannot be recovered from it — and the date it was written.

It also keeps a sync history of times, counts and errors. One detail worth stating plainly: when a reading is rejected as physiologically implausible, the message kept in that history names the rejected value, so you can see what was refused and why.

All of this stays in the app's private storage on your device.

## Third-party services

Health Sync contains no analytics, advertising, tracking or crash-reporting services, and no advertising identifiers. It does not track you across apps or websites. Health data is never used for advertising or marketing, never shared with data brokers, and never disclosed to anyone.

## Deleting your data

- **Disconnect Google** — sign out in the app. The token is revoked with Google and removed from your Keychain.
- **Remove what was written to Apple Health** — the app's Diagnostics screen deletes everything it has written. Apple Health's own controls work too.
- **Remove everything else** — delete the app.
- **Revoke access independently** — [Google Account → Third-party access](https://myaccount.google.com/connections).

Deleting the app does not remove measurements already written into Apple Health. Those are yours, and stay until you delete them.

## Changes to this policy

If this policy changes, the updated version appears on this page with a new date.

## Contact

If you have any questions about this privacy policy, feel free to reach out via [nikolajjsj.com](https://nikolajjsj.com).

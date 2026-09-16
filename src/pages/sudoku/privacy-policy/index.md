---
layout: ../../../layouts/AboutLayout.astro
title: Sudoku Privacy Policy
description: Privacy policy for the Sudoku app.
---

_Last updated: 16 September 2026_

## General

Sudoku runs on your device. There is no Sudoku account, no Sudoku server, and no analytics of any kind.

This is a statement about the code rather than a promise about intentions: the app contains no networking of its own — no third-party frameworks, and no analytics, advertising, tracking or crash-reporting services. It does not track you across apps or websites and contains no advertising identifiers. I never receive your puzzles, your times, your statistics or anything else, and have no way to. Nothing is sold or shared.

The only services the app talks to are Apple's, on your behalf: iCloud, Game Center and the App Store. Each is covered below.

## What is stored on your device

- **Your games** — puzzles you have started or finished, the digits and pencil marks in them, and how long they took.
- **Your progress** — streaks, records per difficulty, which techniques you have practised, and which lessons you have read.
- **Your library** — puzzles you imported, scanned or were sent.
- **Settings** — theme, input style, handedness, sound and haptics, and the reminder time if you set one.

Some of this is shared with the app's widgets and its Share extension through a private app group, so a widget can show your streak without a second copy of everything. Deleting the app removes all of it.

## iCloud

If you are signed in to iCloud, your games and progress sync across your devices through CloudKit's **private** database. That database belongs to your Apple Account. I cannot read it, and no one else can either — it is not a service I operate, and the app never uses CloudKit's public database for anything. Your settings sync the same way through iCloud key-value storage.

If you are not signed in to iCloud, the app stores everything locally instead and works exactly the same. You can turn sync off by signing the app out of iCloud in system settings.

Apple's handling of iCloud data is governed by [Apple's privacy policy](https://www.apple.com/legal/privacy/).

## Game Center

Game Center is optional and the app works fully without it. If you are signed in, the app reads your Game Center display name to show it, and submits achievements and leaderboard scores — solve times, clean solves and streak length — to Apple's Game Center.

Those scores are visible to other players on the leaderboards, which is what a leaderboard is for. The app never presents a sign-in prompt at launch; if Game Center offers one, it is held behind a button on your profile so signing in is something you choose.

## Purchases

The full version is sold as a one-time purchase or a yearly subscription, handled entirely by the App Store. Payment is between you and Apple: the app never sees your payment details, your name or your Apple Account, and receives only whether a purchase is active. Restoring a purchase asks the App Store, not me.

Subscriptions renew until cancelled and can be managed in your App Store settings.

## The camera and your photos

You can photograph a printed puzzle, or choose an existing picture, and the app will read the grid.

The picture is processed entirely on your device, by Apple's Vision framework. It is never uploaded, never sent anywhere, and not kept — what is saved is the resulting puzzle, as eighty-one digits. The app asks for camera or photo access only at the moment you use those features, and only the picture you choose is read.

## Hints and the on-device model

Hint explanations can be reworded by Apple's on-device model. That runs on your device and nothing about the puzzle leaves it. The app makes no request to any language-model service, Apple's or anyone else's, and there is no setting that would change that.

## Reminders

If you turn the daily reminder on, the app asks for notification permission at that moment and at no other time. The reminders are scheduled locally on your device. There is no push server, so nothing about when you play is sent anywhere.

## Siri and Spotlight

Shortcuts and Spotlight entries are provided to the system on your device so you can start a puzzle or find a lesson from search. Apple's handling of Siri and Spotlight data is covered by [Apple's privacy policy](https://www.apple.com/legal/privacy/).

## Children

Sudoku collects nothing, so it collects nothing from children either. There is no chat, no user-generated content, no advertising, and nothing to sign up for. Game Center leaderboards show the display names other players chose, and can be turned off in Screen Time.

## Deleting your data

- **Delete a game or a library entry** — removes it from the device, and from iCloud if sync is on.
- **Reset progress** — clears your records and statistics from the app's settings.
- **Delete the app** — removes everything stored locally.
- **Remove the iCloud copy** — delete the app's data from iCloud in your system settings, under your Apple Account.

Game Center achievements and scores live with Apple rather than with the app; they can be reset from your Game Center account.

## Changes to this policy

If this policy changes, the updated version appears on this page with a new date.

## Contact

If you have any questions about this privacy policy, feel free to reach out via [nikolajjsj.com](https://nikolajjsj.com).

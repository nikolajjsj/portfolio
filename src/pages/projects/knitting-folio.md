---
layout: ../../layouts/ProjectLayout.astro
author: Nikolaj Jensen
datetime: 2026-10-20T10:00:00Z
title: Knitting Folio
slug: knitting-folio
featured: true
draft: false
tags:
  - swift
  - swiftui
  - swiftdata
  - watchos
liveUrl: https://apps.apple.com/us/app/knitting-folio/id1668641290
description: A knitting journal for iPhone and Apple Watch — projects, yarn and needles in one place, and a row counter you can tap without putting the needles down
---

Knitting Folio keeps a knitter's projects together: the yarn, the needle size, the garment size, the pattern notes, a photo, and as many counters as the pattern needs — rows, rounds, cable repeats, decreases. Projects sit "on the needles" until they are finished, and then move to a shelf of their own.

## The fabric is drawn, not photographed

A project without a photo used to get the same stock picture of yarn as every other project. Now it gets knitted fabric: stockinette, drawn stitch by stitch in a SwiftUI `Canvas`, each stitch two plump legs leaning apart into a V, lit from the top-left so the yarn reads as plied.

Every project has its own colourway — madder, rust, ochre, moss, teal, denim, heather, rose, walnut — chosen from the moment it was cast on rather than stored, so it is stable, needs no schema change, and syncs for free. The colourway tints the whole project screen. In dark mode the text in it is lifted toward white so it stays readable on the dark page, while the fabric keeps the true colour of the yarn.

The row counter uses the same drawing. Each tap knits a new row onto a wooden needle, with a haptic tap per row and a heavier one every tenth, and the screen stays awake while a project is open, because a knitter glances at it with both hands full.

## A counter for hands that are busy

The Apple Watch app exists for one gesture: double tap. Pinch twice and a row is added, without letting go of the needles or touching the screen.

The interesting part is what the Watch is *not* allowed to do. It never writes a count. The iPhone is the only writer to the store, and the Watch sends changes — "+1 on this counter" — rather than totals, so taps made on both devices add up instead of the last one silently winning.

Each change travels two ways at once. It is queued with WatchConnectivity's `transferUserInfo`, which survives a relaunch and is delivered exactly once, but in practice can take its time; and while the iPhone is in reach it is also sent directly, which arrives immediately. When the direct copy is acknowledged the queued one is cancelled, and if both arrive anyway the iPhone recognises a change it has already applied and ignores it. The iPhone saves before it acknowledges, because the moment it returns, the Watch considers the change delivered.

The Watch shows the iPhone's latest snapshot plus whatever it has sent that the iPhone has not yet applied, rebuilt from the on-disk queue after a relaunch, so the number on the wrist never jumps backwards.

## Data that is never lost

Projects and counters are SwiftData models synced through your own private iCloud database. The redesign and the Watch app did not touch the schema at all, and it will only ever grow by optional properties — CloudKit cannot take anything else, and a migration that loses someone's row count is not one worth shipping.

Deleting a project hides it rather than erasing it, and the preview data used in development is held in memory and explicitly kept out of CloudKit, so it can never reach a real iCloud account.

## Built with

Swift and SwiftUI on iOS 26 and watchOS 26, with Liquid Glass throughout, SwiftData over CloudKit, and WatchConnectivity between the two apps. There are no third-party dependencies, no account, no server and no analytics.

Titles are set in New York, the serif, like the cover of a pattern book. The app is in English and Danish — where "rows" and "needles" are both *pinde*, which is why the needle tile says *strikkepinde*.

[Privacy policy](/knitting-folio/privacy-policy)

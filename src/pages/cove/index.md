---
layout: ../../layouts/ProjectLayout.astro
author: Nikolaj Jensen
datetime: 2026-09-12T10:00:00Z
title: Cove
slug: cove
url: /cove
featured: true
draft: false
tags:
  - swift
  - swiftui
  - jellyfin
description: A native iOS and iPad client for your own Jellyfin media server
---

Cove plays the films and shows on your own Jellyfin server, on your own iPhone and iPad. No account, no subscription, and nothing in between you and your media.

## Why it exists

Self-hosted media has a good server and, on iOS, a thin choice of clients. Most are cross-platform shells that feel like a website in a wrapper — no Picture in Picture worth the name, no offline that survives a flight, no lock-screen controls that behave. Cove is built in SwiftUI against AVPlayer directly, so the parts iOS is good at are the parts it uses.

## Offline is the hard part

Downloading a file is easy. Making a downloaded library feel like a library is not.

Cove keeps the artwork and metadata alongside the media, so a season you took on a plane still looks like that season rather than a list of filenames. Transfers continue in the background, can be pinned to Wi-Fi, and carry separate quality settings for Wi-Fi and cellular so a 4K remux never quietly eats a data plan. Anything watched offline is queued and reported back to the server when the connection returns, so resume positions stay honest across devices.

One deliberate constraint shapes the storage layer: download URLs are persisted, so they are stored with no credential in them at all and the access token is attached per request. A token written into a database is a credential in plaintext, and it goes stale the moment you sign in again.

## Talking to a server you do not control

Jellyfin 12.0 deleted a family of endpoints earlier clients were built on and disabled the legacy query-parameter auth that went with them. Cove targets the replacements, and every path built from server-supplied data — item ids, transcode URLs, subtitle language tags — is treated as untrusted input rather than as a filename, because the server chooses those strings and the app writes them to disk.

## Built with

Swift 6 in full strict-concurrency mode, SwiftUI, and AVFoundation, on iOS 26. Persistence is GRDB over SQLite; images go through Nuke. The app is split into a multi-target Swift package behind a server-agnostic provider protocol, which keeps the playback and download engines testable against the real schema and real files instead of mocks — and leaves room for a second backend later.

The app icon and the animated mark on the first screen are drawn from one shared geometry file, so the creature on your home screen is the one that greets you inside.

[Privacy policy](/cove/privacy-policy)

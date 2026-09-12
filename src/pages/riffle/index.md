---
layout: ../../layouts/ProjectLayout.astro
author: Nikolaj Jensen
datetime: 2026-09-12T17:00:00Z
title: Riffle
slug: riffle
url: /riffle
featured: true
draft: false
tags:
  - swift
  - swiftui
  - rss
description: An RSS reader for iPhone, iPad and Mac that syncs with your own server and reads offline
---

Riffle reads your feeds on iPhone, iPad and Mac. It syncs with FreshRSS, Miniflux, Fever and Feedbin — or with nothing at all, fetching feeds on the device itself — and it is built for the train, where the signal is gone and the reading is not.

## Why it exists

If you run your own reader server, the server is the easy half. The client is where it falls down: an app that needs a connection to show you an article you already downloaded, or that loses the fact you starred something because you did it in a tunnel.

Riffle treats the device as the source of truth for what you have read, and the server as something to reconcile with when it is reachable. Everything is on disk before it is anywhere else.

## The interesting problem is disagreeing politely

Every action writes locally first and queues an intent for the server. That part is easy. The hard part is the order things happen in when the connection comes back.

The engine pushes before it reads. Anything queued goes out first, so the server reflects what you did before Riffle asks it what it thinks — and the set of articles with unsent changes is captured *before* that push and held for the whole run. That second detail is the one that matters: a server snapshot taken moments after your write may not include it yet, and without the protection a stale reconcile quietly undoes the change you just made. The conflict rule is one sentence — local intent wins until the server acknowledges it, then the server is authoritative — and it is what makes reading on a train and syncing at home produce the right answer.

Some services make this harder than others. Feedbin's entries carry no read state at all; the truth lives in a separate set fetched later. So "state unknown" had to be something the model could say, rather than a placeholder filled in and corrected afterwards — a sync that fails between those two steps would otherwise mark everything you had not read as read.

## Polling is someone else's machine

A self-hosted instance is usually one small server, and the sites it polls on your behalf block clients that hammer them. Riffle will not pull more often than every fifteen minutes however it is configured, and the interval is a floor rather than a suggestion — automatic refreshes decline to repeat one inside the window. A refresh you ask for is never throttled, because that is you choosing to spend the request.

The flush that follows a read or a star is a push and nothing else. Running a full sync there — the structure, the changed articles, the entire unread and starred sets — every few seconds while someone works through a list is both wasteful and the fastest way for a client to get itself banned.

Feeds fetched on the device get the same care: conditional requests with `ETag` and `If-Modified-Since`, a body hash so a server without validators is still cheap to skip, per-feed exponential backoff with jitter, and `Retry-After` honoured with a floor under it.

## Built with

Swift 6 in strict concurrency mode, SwiftUI, on iOS 26 and macOS 26, with a shared folder rather than a package between the two.

Storage is SQLite through the system library, with a small wrapper the project owns: WAL, foreign keys, `BEGIN IMMEDIATE` for every write, prepared statements, FTS5 for search, and migrations under `user_version`. That was a deliberate choice over SwiftData and Core Data. The integrity rules — cascades, unique server identities, the constraint that makes replaying a sync page twice harmless — are things I wanted written down in the schema rather than inferred from a model graph.

The reader renders through a template whose typography is the point, with full-text extraction on the device for feeds that publish only summaries. There are widgets and a Share extension, both reading the same store through an app group, and the whole app can be driven from the keyboard with vim-style keys.

[Privacy policy](/riffle/privacy-policy)

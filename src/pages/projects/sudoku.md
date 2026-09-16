---
layout: ../../layouts/ProjectLayout.astro
author: Nikolaj Jensen
datetime: 2026-09-16T10:00:00Z
title: Sudoku
slug: sudoku
featured: true
draft: false
tags:
  - swift
  - swiftui
  - vision
  - foundation-models
description: A sudoku that explains every move — graded by the techniques a puzzle actually needs, with hints that name the argument instead of filling in the answer
---

Most sudoku apps give you a grid and a hint button that fills in a square. This one tells you *why*: which technique applies, where it sits on the board, and how the argument works. Then it gets out of the way.

## Difficulty is a claim, so it has to be measured

"Hard" in most apps means "few givens", which is not the same thing at all — a grid can look empty and fall to nothing but single candidates. Here every puzzle is solved by the same ladder of techniques a person would use, and graded by what it genuinely requires: the hardest rung it needs, and how much work it takes to get there.

That produces eleven tiers, and the fourth is roughly where a newspaper stops. The grading is also the difficulty model, which makes adding a technique expensive rather than free: a new rung re-grades every existing puzzle and re-poses every drill, so it has to be justified by grids that actually need it.

Finding those grids meant carving 1,200 minimal puzzles across two independent seeds and asking which techniques the ladder could not do without. The answer was not the one I expected. Not one of them needed a fish — the patterns that strain the ladder are chain-shaped, so the family I had listed as the gap turned out not to be the gap at all.

## The solver is the authority; the model only narrates

Hints can be reworded by Apple's on-device model, and the rule behind that is not negotiable: every fact in the prompt — the technique, the cells, the digits, the houses, the conclusion — comes from a deduction the engine has already proved. The model is asked to rephrase, never to reason.

Ask a language model to *find* a Skyscraper and it will confidently invent one. A coaching app that teaches invented sudoku logic is worse than no coaching app, so the model never gets to be the source of a claim. Everything works without it, and the authored explanation is always underneath.

## Reading a grid from a photograph

Point the camera at a printed puzzle and Vision reads it. The interesting failure was not the digits but the framing: detect one rectangle and trust it, and a puzzle inset in a newspaper page gets flattened onto the *page*, leaving the grid inset in the result while the digit-to-cell arithmetic assumes the image is the grid. The digits come out recognised and filed in the wrong cells, which reaches you as "it couldn't find the puzzle".

Nothing inside a single attempt can tell a grid from a page. So the recogniser reads several framings and keeps whichever produces a board that validates — the same move as the repair search that sits behind it, which tries plausible OCR confusions (a 5 read as a 6, an 8 as a 3) and accepts a correction only when the result has exactly one solution. The puzzle is its own checksum.

Vision still drops about one given in ten, and it will not be talked out of it: isolated digits with empty neighbours simply do not come back, and re-running recognition on the single cell returns nothing ten times out of twelve. What the app can do is notice. A cell read as empty that has ink in it is a digit that was missed, so it gets marked for you to tap — measured against the glyphs in that image rather than a fixed threshold, because a dim photograph and a heavy print are not the same.

## Everything is on the device

There is no account, no server and no analytics. Records sync through your own private iCloud database or stay on the device if you are not signed in, and the whole app works offline — the daily puzzle comes from a bundled pool rather than a request, so it is the same grid for everyone on a given day without anything to phone home to.

## Built with

Swift 6 in strict concurrency, SwiftUI, on iOS 26, with no third-party dependencies at all.

The engine — the technique ladder, the generator, the grader — is plain Swift with no framework underneath it, and is exercised from a command-line harness that runs the whole suite in about twenty seconds. That is what makes calibrating a difficulty curve practical: it is an empirical exercise, and it needs a loop measured in seconds rather than in app builds.

Records are an append-only event log in SwiftData over CloudKit, so two devices that both played offline merge rather than overwrite. There are widgets, a Share extension, Live Activities, Game Center, Spotlight and Siri intents, and the board can be played entirely from a hardware keyboard or through VoiceOver.

[Privacy policy](/sudoku/privacy-policy)

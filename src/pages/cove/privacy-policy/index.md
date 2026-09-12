---
layout: ../../../layouts/AboutLayout.astro
title: Cove Privacy Policy
description: Privacy policy for the Cove iOS app.
---

_Last updated: 12 September 2026_

## General

Cove is a client for a Jellyfin media server that you run. It talks to that server and, with two exceptions described below, to nothing else.

There is no Cove account and no Cove server. I never receive your media, your library, your viewing history or your credentials, and have no way to. Nothing is sold, shared, or used for advertising.

## Your server and your sign-in

You supply the address of your own Jellyfin server and sign in with an account on it. Your username and password are sent to that server and nowhere else. The access token it returns is held in the iOS Keychain.

Your server's address, your library contents and everything you watch are between you and your server. I have no visibility into any of it.

## What is stored on your device

- **Downloads** — the media you choose to download, with its artwork and metadata, in the app's private storage.
- **Offline metadata** — a local database of your library so downloaded items still show their titles, artwork and details with no connection.
- **Playback reports made offline** — what you watched while disconnected, queued and sent to your own server when the connection returns, so resume positions stay correct.
- **Settings** — playback, quality and appearance preferences.
- **Cached artwork** — images fetched from your server, cached so the app is not re-downloading the same poster forever.

Download URLs are stored without any credential in them; the access token is attached to each request as it is made, and never written to the database.

All of this stays on your device. Deleting the app removes it.

## Subtitle search (optional)

If you choose to use subtitle search, you provide your own [OpenSubtitles](https://www.opensubtitles.com) API key, which is stored in the iOS Keychain. Only then does the app contact OpenSubtitles, and only when you run a search.

What is sent is what a subtitle lookup needs: the title you are searching for or the item's IMDb id, and your chosen language. Your Jellyfin server address and your account are never sent. If you do not add a key, the app never contacts OpenSubtitles at all. OpenSubtitles' handling of that request is governed by their own privacy policy.

## Links to other sites

Item pages can show links to IMDb, TMDB and TheTVDB when your server has recorded those ids. These are ordinary links — the app does not contact those sites, and nothing is sent to them unless you tap one and open it yourself.

## Notifications

If you allow them, notifications tell you when a download finishes. Permission is requested the first time you start a download, not at launch, and the app works normally if you decline. Notifications are generated on your device; there is no push server.

## Third-party services

Cove contains no analytics, advertising, tracking or crash-reporting services, and no advertising identifiers. It does not track you across apps or websites. Nothing about your library or your viewing is transmitted anywhere except to your own server.

## Children

Cove has no accounts and collects nothing, so it collects nothing from children either. What is available in the app is whatever is on the server you connect it to.

## Deleting your data

- **Sign out** — removes the access token from your Keychain.
- **Remove downloads** — the app's storage management screen deletes downloaded media, individually or all at once.
- **Remove everything** — delete the app. All local data goes with it.
- **Remove your subtitle key** — clear it in settings, or delete the app.

Nothing you delete in Cove affects what is on your Jellyfin server. That is yours, and Cove only reads it.

## Changes to this policy

If this policy changes, the updated version appears on this page with a new date.

## Contact

If you have any questions about this privacy policy, feel free to reach out via [nikolajjsj.com](https://nikolajjsj.com).

---
layout: ../../../layouts/AboutLayout.astro
title: Riffle Privacy Policy
description: Privacy policy for the Riffle RSS reader.
---

_Last updated: 12 September 2026_

## General

Riffle is a feed reader that runs on your device. It talks to the feeds you subscribe to and, if you use one, the sync service you configured — and to nothing else.

There is no Riffle account and no Riffle server. I never receive your subscriptions, your reading history or your credentials, and have no way to. Nothing is sold, shared, or used for advertising.

## Your account, if you use one

Riffle can sync with FreshRSS, Miniflux, Fever and Feedbin. You supply the address of that server and sign in with an account on it. Your username, password and API keys are sent to that server and nowhere else.

Credentials are held in the Keychain. They are never written into the app's database, never logged, and never sent anywhere but the server you named.

What you read and what you star is sent to that server, because that is the entire point of syncing — it is how the same state reaches your other devices. Where that server is and who runs it is your decision; if it is your own machine, none of it leaves your control.

## Or no account at all

Riffle can fetch feeds itself, with no service in between. In that mode the app requests the feed from whoever publishes it, exactly as a browser would, and the publisher sees an ordinary request from your device. Your subscriptions are known only to your device.

## What is stored on your device

- **Your library** — feeds, folders, articles, and which ones you have read or starred, in a local database.
- **Article text** — downloaded so it can be read with no connection, including full text you asked Riffle to extract.
- **Feed icons and article images** — cached so the app is not re-fetching the same picture forever.
- **Queued actions** — reads and stars made while offline, waiting to reach your server.
- **Settings** — refresh interval, typography, and reading preferences.

This lives in a container shared with Riffle's widgets and its Share extension, so they can show your unread count and add a feed without a second copy of everything. Riffle does not sync any of it through iCloud. Deleting the app removes all of it.

Read articles are deleted automatically once they pass the retention period you choose. Unread and starred articles are always kept.

## Article content and images

Articles often reference images, video and web fonts hosted by the publisher. When Riffle displays an article it loads those from wherever the publisher put them, which means the publisher can see a request from your device, as they would if you visited the page.

Two features go further, and only when you ask:

- **Reader mode** fetches the article's page to extract its full text, for feeds that publish only a summary.
- **Web Page** shows the live page in a web view, with scripts enabled, exactly as a browser would — including whatever cookies and trackers that page carries.

Article HTML rendered by Riffle itself never runs scripts.

## The Share extension

Sharing a link to Riffle looks for a feed at that address and adds it to your library. The address you shared is used for that and stored as a subscription if you choose to subscribe. It is not sent anywhere except to the site being checked and, if you are using a sync service, to your own server as a new subscription.

## Third-party services

Riffle contains no analytics, advertising, tracking or crash-reporting services, and no advertising identifiers. It does not track you across apps or websites. No third-party service is used for feed discovery, icons or article previews — the app talks to the publishers and to your server, and that is all.

## Children

Riffle has no accounts of its own and collects nothing, so it collects nothing from children either. What appears in the app is whatever the feeds you add publish.

## Deleting your data

- **Remove a feed** — deletes its articles from the device.
- **Remove an account** — deletes its feeds and articles, and removes its credentials from the Keychain.
- **Remove everything** — delete the app. All local data goes with it.

Removing an account from Riffle does not change anything on your server. That is yours.

## Changes to this policy

If this policy changes, the updated version appears on this page with a new date.

## Contact

If you have any questions about this privacy policy, feel free to reach out via [nikolajjsj.com](https://nikolajjsj.com).

import { GLOBAL } from "./variables";

/**
 * Resolves a page's social card image to an absolute URL.
 *
 * `og:image` must be absolute — crawlers do not resolve relative paths — and
 * every image we point at is landscape, so the `summary_large_image` card the
 * layouts declare is always backed by an image large enough to render it.
 *
 * @param ogImage a site-relative path from frontmatter (eg. "assets/foo.png")
 * @returns the absolute URL of the card image, or the site default if unset
 */
export const resolveOgImage = (ogImage?: string) =>
  new URL(ogImage || GLOBAL.defaultOgImage, GLOBAL.rootUrl).href;

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/pages/blog" }),
  schema: z.object({
    slug: z.string(),
    author: z.string(),
    title: z.string(),
    description: z.string(),
    datetime: z.coerce.date(),
    featured: z.boolean(),
    draft: z.boolean(),
    tags: z.array(z.string()),
    /** Landscape social card image; falls back to GLOBAL.defaultOgImage. */
    ogImage: z.string().optional(),
    liveUrl: z.string().optional(),
    time: z.number(),
  }),
});

const projects = defineCollection({
  // One file per project, all of them here. An app's privacy policy is *not*
  // one of these: it lives at /<app>/privacy-policy, outside this folder, and
  // is linked from the project's page.
  //
  // That split is deliberate and worth keeping. A privacy-policy URL is filed
  // with App Store Connect and with OAuth consent screens — links this
  // repository does not control and cannot update — so those addresses must
  // not move when the site is reorganised. Project pages are ours to move;
  // policy URLs are not.
  loader: glob({
    pattern: "projects/*.{md,mdx}",
    base: "./src/pages",
  }),
  schema: z.object({
    slug: z.string(),
    /** Overrides the default /projects/<slug> location. */
    url: z.string().optional(),
    author: z.string(),
    title: z.string(),
    description: z.string(),
    datetime: z.coerce.date(),
    featured: z.boolean(),
    draft: z.boolean(),
    tags: z.array(z.string()),
    /** Landscape social card image; falls back to GLOBAL.defaultOgImage. */
    ogImage: z.string().optional(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

export const collections = { blog, projects };

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
    ogImage: z.string(),
    liveUrl: z.string().optional(),
    time: z.number(),
  }),
});

const projects = defineCollection({
  // Projects normally live in src/pages/projects. An app that needs its own
  // top-level URL — because the App Store or an OAuth consent screen links
  // straight to it — instead gets a folder at the root with an index.md, and
  // sets `url` in its frontmatter so the listing points at the right place.
  loader: glob({
    pattern: ["projects/**/*.{md,mdx}", "*/index.{md,mdx}"],
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
    ogImage: z.string(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

export const collections = { blog, projects };

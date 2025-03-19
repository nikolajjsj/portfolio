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
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/pages/projects" }),
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
  }),
});

export const collections = { blog, projects };

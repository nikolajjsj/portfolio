import { getCollection } from "astro:content";
import { getShortDescription } from "./utils";

export const featuredArticles = (await getCollection("blog"))
  .filter((entry) => entry.data.featured && entry.data.draft !== true)
  .map((entry) => ({
    title: entry.data.title,
    description: getShortDescription(entry.data.description),
    tags: entry.data.tags,
    time: entry.data.time,
    featured: entry.data.featured,
    datetime: entry.data.datetime,
    slug: `/blog/${entry.data.slug}`,
  }))
  .sort((a, b) => b.datetime.getTime() - a.datetime.getTime());

export const featuredProjects = (await getCollection("projects"))
  .filter((entry) => entry.data.featured && entry.data.draft !== true)
  .map((entry) => ({
    title: entry.data.title,
    description: getShortDescription(entry.data.description),
    tags: entry.data.tags,
    githubUrl: entry.data.githubUrl,
    liveUrl: entry.data.liveUrl,
    featured: entry.data.featured,
    datetime: entry.data.datetime,
    slug: `/projects/${entry.data.slug}`,
  }))
  .sort((a, b) => b.datetime.getTime() - a.datetime.getTime());

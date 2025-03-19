import type { ArticleFrontmatter, ProjectFrontmatter } from "./types";
import { getShortDescription, processContentInDir } from "./utils";

export const featuredProjects = (
  await processContentInDir<ProjectFrontmatter, ProjectFrontmatter>(
    "projects",
    (data) => {
      const shortDescription = getShortDescription(
        data.frontmatter.description,
      );
      return {
        title: data.frontmatter.title,
        description: shortDescription,
        tags: data.frontmatter.tags,
        githubUrl: data.frontmatter.githubUrl,
        liveUrl: data.frontmatter.liveUrl,
        draft: data.frontmatter.draft,
        featured: data.frontmatter.featured,
        datetime: data.frontmatter.datetime,
        slug: `/projects/${data.frontmatter.slug}`,
      };
    },
  )
)
  .filter((project) => project.featured && project.draft !== true)
  .sort((a, b) => {
    const dateA = new Date(a.datetime);
    const dateB = new Date(b.datetime);
    return dateB.getTime() - dateA.getTime();
  });

export const featuredArticles = (
  await processContentInDir<ArticleFrontmatter, ArticleFrontmatter>(
    "blog",
    (data) => {
      const shortDescription = getShortDescription(
        data.frontmatter.description,
      );
      return {
        title: data.frontmatter.title,
        description: shortDescription,
        tags: data.frontmatter.tags,
        time: data.frontmatter.time,
        draft: data.frontmatter.draft,
        featured: data.frontmatter.featured,
        datetime: data.frontmatter.datetime,
        slug: `/blog/${data.frontmatter.slug}`,
      };
    },
  )
)
  .filter((project) => project.featured && project.draft !== true)
  .sort((a, b) => {
    const dateA = new Date(a.datetime);
    const dateB = new Date(b.datetime);
    return dateB.getTime() - dateA.getTime();
  });

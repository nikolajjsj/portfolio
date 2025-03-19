import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
  const blog = await getCollection("blog");

  return rss({
    title: "Nikolaj Jensen - Blog",
    description: "Personal blog of Nikolaj Jensen",
    site: "https://nikolajjsj.com",
    customData: `<language>en-us</language>`,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blog.map((post) => {
      console.log(post);
      return {
        title: post.data.title,
        pubDate: post.data.datetime,
        description: post.data.description,
        tags: post.data.tags,
        content: post.rendered.html,
        link: `/blog/${post.id}/`,
      };
    }),
  });
}

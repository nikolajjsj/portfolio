import React from "react";
import { AppCard } from "../components/AppCard";
import { AppSection } from "../components/AppSection";
import { styled } from "../stitches.config";

interface MediumFeed {
  author: string;
  description: string;
  image: string;
  link: string;
  title: string;
  url: string;
}

interface MediumPost {
  author: string;
  categories: string[];
  content: string;
  description: string;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}

interface MediumResponse {
  feed: MediumFeed;
  items: MediumPost[];
}

const USERNAME = "nikolajjsj";
const URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${USERNAME}`;

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch(URL);
  const response: MediumResponse = await res.json();
  const posts: MediumPost[] = response.items;

  return {
    props: { posts },
  };
}

interface Props {
  posts: MediumPost[];
}

export default function Posts({ posts }: Props) {
  return (
    <AppSection title="Posts">
      {posts &&
        posts.map((post: MediumPost) => (
          <s.Post key={post.guid} title={post.title}>
            <s.PostDate>{post.pubDate.split(" ")[0]}</s.PostDate>

            <s.PostTitle href={post.link} target="_blank" rel="noreferrer">
              {post.title}
            </s.PostTitle>
          </s.Post>
        ))}
    </AppSection>
  );
}

namespace s {
  export const Post = styled("div", {
    display: "flex",
    flexDirection: "column",
  });

  export const PostDate = styled("p", {
    color: "$grey2",
    marginBottom: "$1",
  });

  export const PostTitle = styled("a", {
    fontSize: "$2xl",
    fontWeight: "bold",
    marginBottom: "$12",
    textDecoration: "none",
    color: "inherit",
  });
}

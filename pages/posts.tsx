import React from "react";
import { AppSection } from "../components/AppSection";
import { fetchMediumPosts, MediumPost } from "../services/medium_service";
import { styled } from "../stitches.config";

export async function getStaticProps() {
  const posts = await fetchMediumPosts(false);

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

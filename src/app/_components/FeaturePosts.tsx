import React from "react";
import PostsGrid from "./PostsGrid";
import { getAllPosts } from "../api/posts";

const FeaturePosts = async () => {
  const posts = await getAllPosts();
  return (
    <section>
      <h2>Feature Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturePosts;

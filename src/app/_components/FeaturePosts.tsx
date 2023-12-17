import React from "react";
import PostsGrid from "./PostsGrid";
import { getFeaturedPosts } from "../../api/posts";

const FeaturePosts = async () => {
  const posts = await getFeaturedPosts();
  return (
    <section>
      <h2 className="text-2xl font-bold">Feature Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturePosts;

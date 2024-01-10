import { getNonFeaturedPosts } from "@/app/server/posts";
import React from "react";
import PostCard from "./PostCard";

const CarouselPosts = async () => {
  const posts = await getNonFeaturedPosts();

  return (
    <section>
      <h2>You May Like</h2>
      {posts.map((post) => (
        <PostCard key={post.path} post={post} />
      ))}
    </section>
  );
};

export default CarouselPosts;

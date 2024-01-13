import React from "react";
import PostsGrid from "../_components/PostsGrid";
import { getAllPosts } from "../server/posts";
import FilteralblePosts from "../_components/FilteralblePosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Posts",
  description: "技術関連ブログ記事",
};

const PostsPage = async () => {
  const posts = await getAllPosts();

  // Set은 중복일 경우 버려줌
  // category를 찾아서 categories 배열에 넣어줌
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilteralblePosts posts={posts} categories={categories} />;
};

export default PostsPage;

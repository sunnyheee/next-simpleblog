import React from "react";
import PostsGrid from "../_components/PostsGrid";
import { getAllPosts } from "../server/posts";
import FilteralblePosts from "../_components/FilteralblePosts";

const PostsPage = async () => {
  const posts = await getAllPosts();

  // Set은 중복일 경우 버려줌
  // category를 찾아서 categories 배열에 넣어줌
  const categories = [...new Set(posts.map((post) => post.category))];
  console.log(categories);

  return <FilteralblePosts posts={posts} categories={categories} />;
};

export default PostsPage;

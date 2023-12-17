import React from "react";
import { Post } from "../api/posts";

type Porps = { posts: Post[] };

const PostsGrid = ({ posts }: Porps) => {
  console.log(posts);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>{post.title}</li>
      ))}{" "}
    </ul>
  );
};

export default PostsGrid;

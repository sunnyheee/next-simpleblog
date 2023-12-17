import React from "react";
import { Post } from "../../api/posts";
import PostCard from "./PostCard";

type Porps = { posts: Post[] };

const PostsGrid = ({ posts }: Porps) => {
  console.log(posts);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsGrid;

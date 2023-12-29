import { getPostData } from "@/api/posts";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
};

export default PostPage;

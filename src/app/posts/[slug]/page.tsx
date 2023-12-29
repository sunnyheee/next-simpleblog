import { getPostData } from "@/api/posts";
import MarkdownViewer from "@/app/_components/MarkdownViewer";
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
      <MarkdownViewer content={post.content} />
    </>
  );
};

export default PostPage;

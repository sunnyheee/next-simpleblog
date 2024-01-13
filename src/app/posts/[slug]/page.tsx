import { getFeaturedPosts, getPostData } from "../../server/posts";
import React from "react";
import Image from "next/image";
import PostContent from "@/app/_components/PostContent";
import AdjacentPostCard from "@/app/_components/AdjacentPostCard";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

const PostPage = async ({ params: { slug } }: Props) => {
  const post = await getPostData(slug);
  const { title, path, prev, next } = post;

  return (
    <article className=" rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px] object-cover"
        src={`/images/posts/${path}.png`}
        width={760}
        height={420}
        alt={title}
      />
      <PostContent post={post} />
      <section className=" flex shadow-md">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
};

export default PostPage;

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => {
    slug: post.path;
  });
}

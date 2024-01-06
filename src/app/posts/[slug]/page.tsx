import { getPostData } from "@/api/posts";
import MarkdownViewer from "@/app/_components/MarkdownViewer";
import React from "react";
import Image from "next/image";
import { FaRegCalendar } from "react-icons/fa";

type Props = {
  params: {
    slug: string;
  };
};

const PostPage = async ({ params: { slug } }: Props) => {
  const { title, description, date, path, content } = await getPostData(slug);
  return (
    <article className=" rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px] object-cover"
        src={`/images/posts/${path}.png`}
        width={760}
        height={420}
        alt={title}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-sky-600">
          <FaRegCalendar />
          <p className=" font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className="w-44 border-2 border-sky-600 mt-4 mb-8"></div>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
};

export default PostPage;

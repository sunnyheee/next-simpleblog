import { Post } from "@/api/posts";
import Link from "next/link";
import Image from "next/image";

import React from "react";
type Props = { post: Post };

const PostCard = ({
  post: { title, description, date, category, path },
}: Props) => {
  return (
    <Link href={`/posts/${path}`}>
      <article className=" rounded-md overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          width={300}
          height={200}
          alt={title}
        />
        <div className="flex flex-col items-center">
          <time className="self-end">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="text-small rounded-lg bg-gray-200 px-2 my-2">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;

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
      <Image
        src={`/images/posts/${path}.png`}
        width={300}
        height={200}
        alt={title}
      />
      <div>
        <time>{date.toString()}</time>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{category}</span>
      </div>
    </Link>
  );
};

export default PostCard;

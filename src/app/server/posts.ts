import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};
// featured 가 true일 경우 filter해서 가져옴
export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

// featured 가 false일 경우 filter해서 가져옴
export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export const getAllPosts = cache(async () => {
  console.log("getAllPosts");
  const filePath = path.join(process.cwd(), "data", "posts.json");

  return (
    readFile(filePath, "utf-8")
      .then<Post[]>(JSON.parse)
      // 날짜순으로 정렬
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
  );
});
// export async function getAllPosts(): Promise<Post[]> {
//   const filePath = path.join(process.cwd(), "data", "posts.json");

//   return (
//     readFile(filePath, "utf-8")
//       .then<Post[]>(JSON.parse)
//       // 날짜순으로 정렬
//       .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
//   );
// }

export async function getPostData(fillName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fillName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fillName);

  if (!post) {
    throw new Error(`${fillName}에 해당되는 이름을 찾을수 없습니다.`);
  }

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filePath, "utf-8");
  return { ...post, content, next, prev };
}

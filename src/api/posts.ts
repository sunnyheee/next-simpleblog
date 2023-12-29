import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & { content: string };
// featured 가 true일 경우 filter해서 가져옴
export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

// featured 가 false일 경우 filter해서 가져옴
export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  console.log(filePath, "filePath");

  return (
    readFile(filePath, "utf-8")
      .then<Post[]>(JSON.parse)
      // 날짜순으로 정렬
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)))
  );
}

export async function getPostData(fillName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fillName}.md`);
  const medadata = await getAllPosts().then((post) =>
    post.find((post) => post.path === fillName)
  );
  if (!medadata) {
    throw new Error(`${fillName}에 해당되는 이름을 찾을수 없습니다.`);
  }
  const content = await readFile(filePath, "utf-8");
  return { ...medadata, content };
}

import { BlogFrontMatter } from "./../interfaces/Blog";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file name under /posts
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData: BlogFrontMatter[] = fileNames.map((fileName) => {
    // Remove '.md' from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents).data;

    // Combine the data with the id
    return {
      id,
      title: matterResult.title,
      date: matterResult.date,
      description: matterResult.description,
      heroImage: matterResult.heroImage,
      photographer: matterResult.photographer,
      unsplashAccount: matterResult.unsplashAccount,
      isPublished: matterResult.isPublished,
      tags: matterResult.tags,
    };
  });

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostById(id: string) {
  const source = fs.readFileSync(path.join(postDirectory, `${id}.md`), "utf8");

  const { data, content } = matter(source);

  return {
    frontMatter: data,
    markdownBody: content,
  };
}

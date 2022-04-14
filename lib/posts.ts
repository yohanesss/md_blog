import { IBlogFrontMatter, IBlogPost } from "./../interfaces/Blog";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file name under /posts
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData: IBlogPost[] = fileNames.map((fileName) => {
    // Remove '.md' from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const matterResultData = matterResult.data;

    // Combine the data with the id
    return {
      id,
      title: matterResultData.title,
      date: matterResultData.date,
      description: matterResultData.description,
      heroImage: matterResultData.heroImage,
      photographer: matterResultData.photographer,
      photographerAccount: matterResultData.photographerAccount,
      photoProvider: matterResultData.photoProvider,
      isPublished: matterResultData.isPublished,
      tags: matterResultData.tags,
      content: matterResult.content,
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

export function getAllTags() {
  const fileNames = fs.readdirSync(postDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.txt$/, ""),
      },
    };
  });
}

export async function getPostById(id: string) {
  const source = fs.readFileSync(path.join(postDirectory, `${id}.md`), "utf8");

  const { data, content } = matter(source);

  return {
    frontMatter: data as IBlogFrontMatter,
    markdownBody: content,
  };
}

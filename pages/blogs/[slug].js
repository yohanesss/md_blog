import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import { useRouter } from "next/router";

export default function PostPage({
  frontmatter: { title, date, reading_time, category },
  slug,
  content,
  posts,
}) {
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>
          {date} • {reading_time}
        </p>
        <div>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("CategoryOne"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = fs.readdirSync(path.join("CategoryOne"));
  const markdownWithMeta = fs.readFileSync(
    path.join("CategoryOne", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("CategoryOne", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      frontmatter,
      slug,
      content,
      posts,
    },
  };
}

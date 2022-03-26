import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  getAllFiles,
  getSortedPostsData,
} from "../../posts-test/posts-multi-level";
import BlogCard from "../../components/Blogs/BlogCard";

export default function Blog({ posts }) {
  const renderPosts = posts.map((post) => (
    <div key={post.id}>
      <p>{post.slug}</p>
      <BlogCard key={post.id} {...post} />
    </div>
  ));

  return <div>{renderPosts}</div>;
}

export async function getStaticProps() {
  const posts = await getSortedPostsData();
  console.log("[posts]", posts);

  return {
    props: {
      posts,
      // postsTwo: posts2,
    },
  };
}

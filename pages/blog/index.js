import React, { useState } from "react";
import { useRouter } from "next/router";
import { getAllFiles, getSortedPostsData } from "../../lib/posts";
import { Heading } from "../../components/Util.style";
import BlogCard from "../../components/BlogCard/BlogCard";
import { BlogIndexContainer } from "../../components/BlogPage/BlogIndex.style.tsx";

export default function Blog({ posts }) {
  const renderPosts = posts.map((post) => (
    <div key={post.id}>
      <p>{post.slug}</p>
      <BlogCard key={post.id} {...post} />
    </div>
  ));

  return (
    <BlogIndexContainer>
      <Heading>Blog posts on my experience as a software engineer ✍🏼</Heading>
      <p>
        I&apos;m trying to solidify my learnings and help others at the same
        time by writing these short blog posts. I generally write about problems
        I come across and how I solved them. I&apos;ll occassionally also write
        about my personal experiences of navigating my career as a software
        engineer. If you spot an error, or have any comments, suggestions or
        questions about what I&apos;ve written, contact me on Twitter
        <a
          href="https://twitter.com/yohanes_dev"
          target="_blank"
          rel="noreferrer"
        >
          @yohanes_dev
        </a>
        ,
        <a
          href="https://www.instagram.com/yohaness.setiawann/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        , or email
        <a
          href="mailto:yohanessetiawan.us@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          hello at yohanessetiawan.us@gmail.com
        </a>
        . I&apos;d love to hear from you. 🤓
      </p>
      {renderPosts}
    </BlogIndexContainer>
  );
}

export async function getStaticProps() {
  const posts = await getSortedPostsData();

  return {
    props: {
      posts,
      // postsTwo: posts2,
    },
  };
}

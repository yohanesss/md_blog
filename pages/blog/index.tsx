import React, { useEffect, useState } from "react";
import { getSortedPostsData } from "../../lib/posts";
import { Heading } from "../../components/Util.style";
import BlogCard from "../../components/BlogCard/BlogCard";
import {
  BlogIndexContainer,
  BlogIntroductionContainer,
  BlogLayoutSearchBar,
} from "../../components/BlogPage/BlogIndex.style";
import { IBlogPost } from "../../interfaces/Blog";
import BlogTags from "../../components/BlogPage/BlogTags";
import { useRouter } from "next/router";

type BlogProps = {
  posts: IBlogPost[];
};

export default function Blog({ posts }: BlogProps) {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [qs, setQs] = useState<string | null>(null);

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    setQs(params.get("tag"));
  }, [router.asPath]);

  let filteredPosts: IBlogPost[] = posts.filter((post) =>
    post.title.toLowerCase().trim().includes(searchKeyword.toLowerCase().trim())
  );

  if (qs) filteredPosts = posts.filter((post) => post.tags.includes(qs));

  const renderPosts = filteredPosts.map((post) => (
    <div key={post.id}>
      <BlogCard key={post.id} {...post} />
    </div>
  ));

  return (
    <BlogIndexContainer>
      <BlogIntroductionContainer>
        <Heading>Blog posts on my experience as a software engineer ✍🏼</Heading>
        <p>
          I&apos;m trying to solidify my learnings and help others at the same
          time by writing these short blog posts. I generally write about
          problems I come across and how I solved them. I&apos;ll occassionally
          also write about my personal experiences of navigating my career as a
          software engineer. If you spot an error, or have any comments,
          suggestions or questions about what I&apos;ve written, contact me on
          Twitter
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
            hello at yohanes.dev
          </a>
          . I&apos;d love to hear from you. 🤓
        </p>
      </BlogIntroductionContainer>
      {qs ? (
        <BlogTags tags={qs} key={qs} />
      ) : (
        <BlogLayoutSearchBar
          value={searchKeyword}
          onChange={(input) => setSearchKeyword(input.target.value)}
          placeholder="Search Blog Posts"
        />
      )}
      {renderPosts}
    </BlogIndexContainer>
  );
}

export async function getStaticProps() {
  const posts = await getSortedPostsData();

  return {
    props: {
      posts,
    },
  };
}

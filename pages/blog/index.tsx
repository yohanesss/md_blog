import React, { useState } from "react";
import { getSortedPostsData } from "../../lib/posts";
import { Heading } from "../../components/Util.style";
import BlogCard from "../../components/BlogCard/BlogCard";
import {
  BlogIndexContainer,
  BlogIntroductionContainer,
  BlogLayoutSearchBar,
} from "../../components/BlogPage/BlogIndex.style";
import { IBlogPost } from "../../interfaces/Blog";
import { GetServerSideProps } from "next";
import BlogTags from "../../components/BlogPage/BlogTags";

export default function Blog({
  posts,
  qs,
}: {
  posts: IBlogPost[];
  qs: { tags: string | null; searchQuery: string | null };
}) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const filteredPosts: IBlogPost[] = posts.filter((post) =>
    post.title.toLowerCase().trim().includes(searchKeyword.toLowerCase().trim())
  );

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
            yohanessetiawan.us@gmail.com
          </a>
          . I&apos;d love to hear from you. 🤓
        </p>
      </BlogIntroductionContainer>
      {qs.tags ? (
        <BlogTags {...qs} />
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let allPosts = await getSortedPostsData();
  let filteredPosts: IBlogPost[] = [];

  if (query.tag) {
    if (query.tag.includes(",")) {
      // @ts-ignore
      const searchTags = query.tag.split(",");
      searchTags.forEach((searchTag: string) => {
        let _filteredPosts = allPosts.filter((post) =>
          post.tags.includes(searchTag)
        );
        if (_filteredPosts.length > 0) {
          filteredPosts = [..._filteredPosts];
        }
      });
    } else {
      const searchTag = allPosts.filter((post) =>
        // @ts-ignore
        post.tags.includes(query.tag)
      );
      filteredPosts = [...searchTag];
    }
  } else {
    filteredPosts = allPosts;
  }

  return {
    props: {
      posts: filteredPosts,
      qs: {
        tags: (query.tag as string) || null,
        searchQuery: (query.q as string) || null,
      },
      // postsTwo: posts2,
    },
  };
};

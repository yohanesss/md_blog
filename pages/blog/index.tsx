import React from "react";
import { getSortedPostsData } from "../../lib/posts";
import { Heading } from "../../components/Util.style";
import BlogCard from "../../components/BlogCard/BlogCard";
import { BlogIndexContainer } from "../../components/BlogPage/BlogIndex.style";
import { IBlogFrontMatter } from "../../interfaces/Blog";
import { GetServerSideProps } from "next";
import BlogSearchBar from "../../components/BlogPage/BlogSearchBar";

export default function Blog({
  posts,
  qs,
}: {
  posts: IBlogFrontMatter[];
  qs: { tags: string | null; searchQuery: string | null };
}) {
  const renderPosts = posts.map((post) => (
    <div key={post.id}>
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
      <BlogSearchBar {...qs} />
      {renderPosts}
    </BlogIndexContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let allPosts = await getSortedPostsData();
  let filteredPosts: IBlogFrontMatter[] = [];

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
  console.log("[filteredPosts]", filteredPosts);

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

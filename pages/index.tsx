import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BlogCard from "../components/Blogs/BlogCard";
import { Heading, SectionContainer } from "../components/Util.style";
import styles from "../styles/Home.module.css";
import { getSortedPostsData } from "../posts-test/posts-multi-level";

const blog = {
  date: "2020-03-19",
  description:
    "Belajar dasar pemrograman javascript dengan pembawaan yang singkat dan santai.",
  heroImage:
    "https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1381&q=80",
  id: "123123",
  slug: "test-article",
  title: "Tutorial Javascript Dasar | JS101",
  tags: ["javascript", "react"],
};
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionContainer style={{ marginBottom: 48 }}>
        <Heading style={{ marginTop: 0, paddingBottom: 0 }}>
          Hi! I&apos;m Yohanes
        </Heading>
        <p>
          My name is Yohanes, Nice to meet You! I&apos;m a Software Engineer
          mostly write code in JavaScript (ES6/Node.Js) and React. I have great
          passion in Web Development.
        </p>
        <p>
          This is my personal blog, contains my own personal thoughts and
          tutorials not related to any organizations and instances..
        </p>
        <p>Please enjoy your stay 🛋️</p>
      </SectionContainer>
      <SectionContainer>
        <Heading>Recent Articles</Heading>
        <BlogCard {...blog} />
      </SectionContainer>
    </div>
  );
};

export async function getStaticProps() {
  const allPosts = await getSortedPostsData();

  return {
    props: {
      posts: allPosts.filter((post) => post.slug.include("/index")),
      // postsTwo: posts2,
    },
  };
}

export default Home;
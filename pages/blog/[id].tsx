import React from "react";
import { Params } from "next/dist/server/router";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import gfm from "remark-gfm";

import { getAllPostIds, getPostById } from "../../lib/posts";
import BlogPageLayout from "../../components/BlogPage/BlogPageLayout";
import { IBlogFrontMatter } from "../../interfaces/Blog";
import { Head } from "../../components/SEO/Head";

export type BlogPostProps = {
  slug: string;
  siteTitle: string;
  frontMatter: IBlogFrontMatter;
  markdownBody: any;
  wordCount: number;
  readingTime: string;
};

const BlogPost = ({ markdownBody, frontMatter }: BlogPostProps) => {
  return (
    <>
      <Head
        title={frontMatter.title + " | Yohanes Setiawan"}
        description={frontMatter.description}
      />
      <BlogPageLayout frontMatter={frontMatter} content={markdownBody}>
        <ReactMarkdown
          remarkPlugins={[gfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {children}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdownBody}
        </ReactMarkdown>
      </BlogPageLayout>
    </>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const { frontMatter, markdownBody } = await getPostById(params.id);
  return {
    props: {
      frontMatter,
      markdownBody,
    },
  };
}

export default BlogPost;

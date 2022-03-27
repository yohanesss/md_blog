import React from "react";
import { Params } from "next/dist/server/router";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getAllPostIds, getPostById } from "../../lib/posts";
import BlogPageLayout from "../../components/BlogPage/BlogPageLayout";
import { BlogFrontMatter } from "../../interfaces/Blog";
// import { BlogPostLink } from "../../components/BlogPage/BlogPage.style";

// type BlogPostProps = {
//   markdownBody: string;
// };

export type BlogPostProps = {
  slug: string;
  siteTitle: string;
  frontMatter: BlogFrontMatter;
  markdownBody: any;
  wordCount: number;
  readingTime: string;
};

const BlogPost = ({ markdownBody, frontMatter }: BlogPostProps) => {
  return (
    <BlogPageLayout frontMatter={frontMatter} content={markdownBody}>
      <ReactMarkdown
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
          // link({ children, ...props }) {
          //   return <BlogPostLink>{children}</BlogPostLink>;
          // },
        }}
      >
        {markdownBody}
      </ReactMarkdown>
    </BlogPageLayout>
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
  console.log("[frontMatter]", frontMatter);
  return {
    props: {
      frontMatter,
      markdownBody,
    },
  };
}

export default BlogPost;

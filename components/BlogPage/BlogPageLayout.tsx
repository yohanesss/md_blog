import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import readingTime from "reading-time";
import { DEV_DOMAIN } from "../../constants/devInfo";
import formats from "../../constants/format";
import { IBlogFrontMatter } from "../../interfaces/Blog";
import {
  BlogHeroImage,
  BlogHeroImageCaption,
  BlogPageContainer,
  BlogPageDateDesc,
  BlogPageTagsContainer,
  BlogPageTitle,
} from "./BlogPage.style";

type BlogPageLayoutProps = {
  children: React.ReactNode;
  frontMatter: IBlogFrontMatter;
  content: string;
};

const BlogPageLayout = ({
  children,
  frontMatter,
  content,
}: BlogPageLayoutProps) => {
  const router = useRouter();
  const renderTags = frontMatter.tags.map((tag, index) => (
    <Link key={tag} href={`/blog?tag=${tag}`}>
      <a style={{ marginLeft: `${index !== 0 ? "5px" : "0"}` }}>#{tag}</a>
    </Link>
  ));
  return (
    <BlogPageContainer>
      <BlogPageTitle>{frontMatter.title}</BlogPageTitle>
      <BlogPageDateDesc>
        {moment(frontMatter.date).format(formats.BLOG_TIMESTAMP)} | ☕️{" "}
        {readingTime(content).text}
      </BlogPageDateDesc>
      <BlogPageTagsContainer>{renderTags}</BlogPageTagsContainer>
      <BlogHeroImage
        style={{ backgroundImage: `url(${frontMatter.heroImage})` }}
      />
      <BlogHeroImageCaption>
        Photo by{" "}
        <a
          href={`https://${
            frontMatter.photoProvider === "unsplash"
              ? "unsplash.com/"
              : "pexels.com/@"
          }${frontMatter.photographerAccount}`}
        >
          {frontMatter.photographer}
        </a>
        , powered by{" "}
        <a
          href={`https://${
            frontMatter.photoProvider === "unsplash"
              ? "unsplash.com"
              : "pexels.com"
          }/`}
        >
          {frontMatter.photoProvider}
        </a>
        .
      </BlogHeroImageCaption>
      {children}
      <a
        href={`https://mobile.twitter.com/search?q=${
          DEV_DOMAIN + router.asPath
        }`}
      >
        Discuss on Twitter
      </a>
    </BlogPageContainer>
  );
};

export default BlogPageLayout;

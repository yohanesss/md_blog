import moment from "moment";
import Link from "next/link";
import React from "react";
import readingTime from "reading-time";
import formats from "../../constants/format";
import { BlogFrontMatter } from "../../interfaces/Blog";
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
  frontMatter: BlogFrontMatter;
  content: string;
};

const BlogPageLayout = ({
  children,
  frontMatter,
  content,
}: BlogPageLayoutProps) => {
  const renderTags = frontMatter.tags.map((tag, index) => (
    <Link key={tag} href={`/blog/?tag=${tag}`}>
      <a style={{ marginLeft: `${index !== 0 ? "5px" : "0"}` }}>#{tag}</a>
    </Link>
  ));
  return (
    <BlogPageContainer>
      <BlogPageTitle>{frontMatter.title}</BlogPageTitle>
      <BlogPageDateDesc>
        {moment(frontMatter.date).format(formats.BLOG_TIMESTAMP)} . ☕️☕️☕️{" "}
        {readingTime(content).text}
      </BlogPageDateDesc>
      <BlogPageTagsContainer>{renderTags}</BlogPageTagsContainer>
      <BlogHeroImage
        style={{ backgroundImage: `url(${frontMatter.heroImage})` }}
      />
      <BlogHeroImageCaption>
        Hero photo by <a href="https://unsplash.com/martzzl">Marcel Strauß</a>,
        powered by <a href="https://unsplash.com/">unsplash</a>.
      </BlogHeroImageCaption>
      {children}
    </BlogPageContainer>
  );
};

export default BlogPageLayout;

import moment from "moment";
import Link from "next/link";
import React from "react";
import formats from "../../constants/format";
import {
  BlogCardContainer,
  BlogCardDataContainer,
  BlogCardDataInnerContainer,
  BlogCardDate,
  BlogCardDescription,
  BlogCardImage,
  BlogTitle,
} from "./Blog.style";

type BlogCardProps = {
  id: string;
  slug: string;
  heroImage: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
};

const BlogCard = ({
  date,
  description,
  heroImage,
  id,
  slug,
  title,
  tags,
}: BlogCardProps) => {
  const datePublished = moment(date).format(formats.BLOG_TIMESTAMP);
  const blogTags = tags ? (
    <p>
      {tags.map((tag, index) => (
        <Link key={id + tag} href={`/blogs/?tags=${tag}`} passHref>
          <a>{(index !== 0 ? ", " : "") + "#" + tag}</a>
        </Link>
      ))}
    </p>
  ) : (
    []
  );

  return (
    <Link href={`/Blogs/${slug}`} key={id} passHref>
      <BlogCardContainer>
        <BlogCardDataContainer>
          <BlogCardDataInnerContainer>
            <BlogTitle>{title}</BlogTitle>
            <BlogCardDescription>{description}</BlogCardDescription>
            {blogTags}
          </BlogCardDataInnerContainer>
          <BlogCardDate>
            <svg
              stroke="#1C1C1E"
              fill="#1C1C1E"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#1C1C1E"
                strokeWidth="2"
                d="M2,5 L22,5 L22,22 L2,22 L2,5 Z M18,5 L18,1 M6,5 L6,1 M2,10 L22,10"
              ></path>
            </svg>
            {datePublished}
          </BlogCardDate>
        </BlogCardDataContainer>
        <BlogCardImage
          style={{ backgroundImage: `url(${heroImage})` }}
        ></BlogCardImage>
      </BlogCardContainer>
    </Link>
  );
};

export default BlogCard;

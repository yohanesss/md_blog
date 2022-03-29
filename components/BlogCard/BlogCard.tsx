import moment from "moment";
import Link from "next/link";
import React from "react";
import readingTime from "reading-time";
import formats from "../../constants/format";
import {
  BlogCardContainer,
  BlogCardDataContainer,
  BlogCardDataInnerContainer,
  BlogCardDate,
  BlogCardDescription,
  BlogCardImage,
  BlogCardTags,
  BlogTitle,
} from "./BlogCard.style";
import BlogCardDateIcon from "./BlogCardDateIcon";

type BlogCardProps = {
  id: string;
  heroImage: string;
  title: string;
  date: string;
  content: string;
  description: string;
  tags: string[];
};

const BlogCard = ({
  date,
  description,
  heroImage,
  id,
  title,
  tags,
  content,
}: BlogCardProps) => {
  const datePublished = moment(date).format(formats.BLOG_TIMESTAMP);
  const blogTags = tags ? (
    <div style={{ margin: "10px 0" }}>
      {tags.map((tag) => (
        <Link href={`/blog?tag=${tag}`} key={id + tag} passHref>
          <BlogCardTags style={{ marginTop: "10px" }}>{"#" + tag}</BlogCardTags>
        </Link>
      ))}
      <span style={{ marginTop: "10px" }}>☕️ {readingTime(content).text}</span>
    </div>
  ) : (
    []
  );

  return (
    <BlogCardContainer>
      <BlogCardDataContainer>
        <Link href={`/blog/${id}`} key={id} passHref>
          <BlogCardDataInnerContainer>
            <BlogTitle>{title}</BlogTitle>
            <BlogCardDescription>{description}</BlogCardDescription>
          </BlogCardDataInnerContainer>
        </Link>
        <BlogCardDate>
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* <BlogCardDateIcon /> */}
              {"🗓 " + datePublished}
            </div>
            {blogTags}
          </div>
        </BlogCardDate>
      </BlogCardDataContainer>
      <Link href={`/blog/${id}`} key={id} passHref>
        <BlogCardImage
          style={{ backgroundImage: `url(${heroImage})` }}
        ></BlogCardImage>
      </Link>
    </BlogCardContainer>
  );
};

export default BlogCard;

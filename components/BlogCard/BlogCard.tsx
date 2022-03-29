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
  BlogCardTags,
  BlogTitle,
} from "./BlogCard.style";
import BlogCardDateIcon from "./BlogCardDateIcon";

type BlogCardProps = {
  id: string;
  heroImage: string;
  title: string;
  date: string;
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
}: BlogCardProps) => {
  const datePublished = moment(date).format(formats.BLOG_TIMESTAMP);
  const blogTags = tags ? (
    <div style={{ margin: "10px 0" }}>
      {tags.map((tag) => (
        <BlogCardTags key={id + tag}>{"#" + tag}</BlogCardTags>
      ))}
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
              <BlogCardDateIcon />
              {datePublished}
            </div>
            {blogTags}
          </div>
        </BlogCardDate>
      </BlogCardDataContainer>
      <BlogCardImage
        style={{ backgroundImage: `url(${heroImage})` }}
      ></BlogCardImage>
    </BlogCardContainer>
  );
};

export default BlogCard;

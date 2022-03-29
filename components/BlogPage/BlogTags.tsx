import Link from "next/link";
import React from "react";
import { BlogSearchBarFilterItem } from "./BlogTags.style";

type BlogSearchBarProps = {
  tags: string | null;
};

const BlogTags = ({ tags }: BlogSearchBarProps) => {
  const currentTags = tags?.split(",") || [];
  const renderActiveTags =
    tags && tags.length > 0 ? (
      <div>
        <div>
          ✍🏼 Blog posts tagged :{" "}
          {currentTags.map((tag, index) => (
            <BlogSearchBarFilterItem key={tag}>
              {`#${tag}`}
            </BlogSearchBarFilterItem>
          ))}
        </div>
        <p>
          <Link href={"/blog"}>
            <a>{"<<"} View All Blog Posts</a>
          </Link>
        </p>
      </div>
    ) : null;
  return <>{renderActiveTags}</>;
};

export default BlogTags;

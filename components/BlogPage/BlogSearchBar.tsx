import Link from "next/link";
import React from "react";
import { BlogSearchBarFilterItem } from "./BlogSearchBar.style";

type BlogSearchBarProps = {
  tags: string | null;
};

const BlogSearchBar = ({ tags }: BlogSearchBarProps) => {
  const currentTags = tags?.split(",") || [];
  const renderActiveTags =
    tags && tags.length > 0 ? (
      <div>
        <p>
          ✍🏼 Blog posts tagged :{" "}
          {currentTags.map((tag, index) => (
            <BlogSearchBarFilterItem key={tag}>
              {`#${tag}`}
            </BlogSearchBarFilterItem>
          ))}
        </p>
        <p>
          <Link href={"/blog"}>
            <a>{"<<"} View All Blog Posts</a>
          </Link>
        </p>
      </div>
    ) : null;
  return <>{renderActiveTags}</>;
};

export default BlogSearchBar;

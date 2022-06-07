import React from "react";
import HeadNext from "next/head";

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({
  title = "Yohanes Setiawan",
  description = "Yohanes Setiawan is a web developer. He practices user centered design principles basing design decisions on user needs and business goals.",
}: HeadProps) => {
  return (
    <HeadNext>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Yohanes Setiawan - Web Developer" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://yohanes.dev/" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:site_name"
        content={"Yohanes Setiawan - Web Developer"}
      />
      {/* <meta property="og:image" content="./asset/screenshot.JPG" />
      <meta property="og:image:height" content="620" />
      <meta property="og:image:secure_url" content="./asset/screenshot.JPG" />
      <meta property="og:image:width" content="1100" />
      <meta name="twitter:card" content="summary_large_image" /> */}
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
    </HeadNext>
  );
};

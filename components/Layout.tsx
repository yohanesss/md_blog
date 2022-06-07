import React from "react";
import { LayoutWrapper } from "./Layout.style";
import Nav from "./Header/Nav";
import Footer from "./Footer/Footer";
import { Head } from "./SEO/Head";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head />
      <LayoutWrapper>
        <Nav />
        {children}
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export default Layout;

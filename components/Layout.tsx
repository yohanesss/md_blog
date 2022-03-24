import React from "react";
import { LayoutWrapper } from "./Layout.style";
import Nav from "./Header/Nav";
import Footer from "./Footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <LayoutWrapper>
        <Nav />
        {children}
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export default Layout;

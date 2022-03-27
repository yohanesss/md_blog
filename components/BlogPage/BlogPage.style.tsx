import styled from "styled-components";
import { theme } from "../../constants/theme";

export const BlogPageContainer = styled.div`
  p {
    font-size: 16px;
  }
  code {
    padding: 2px 5px;
    border-radius: 0.35rem;
    background: rgb(30, 30, 30);
    color: #d4d4d4;
    font-size: 14px;
    text-shadow: none;
    font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono",
      "Courier New", monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  img {
    width: 100%;
  }

  pre {
    padding: 10px;
    background: rgb(30, 30, 30);
    overflow-x: auto;
    cursor: text;
    color: rgb(238, 238, 238);
    border-radius: 0.85rem;
    box-shadow: rgb(0 0 0 / 14%) 0px 8px 10px 1px,
      rgb(0 0 0 / 12%) 0px 3px 14px 2px, rgb(0 0 0 / 20%) 0px 5px 5px -3px;
    div {
      padding: 0 !important;
    }
    code {
      padding: 0;
    }
  }

  a {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    color: #1c1c1e;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-weight: 700;
    border-bottom: 4px solid #adf4cf;
    font-family: ${theme.fonts.link};
  }

  @media (min-width: 40em) {
    p {
      font-size: 20px;
    }
    pre {
      padding: 1rem;
    }
    code {
      font-size: 16px !important;
    }
  }
`;

export const BlogHeroImage = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  background-image: url(https://images.unsplash.com/photo-1511465390398-532913e8328d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80);
  background-size: cover;
  background-position: center;
  height: 240px;
  width: 100%;
  min-height: 320px;
  box-shadow: rgb(0 0 0 / 14%) 0px 4px 5px 0px,
    rgb(0 0 0 / 12%) 0px 1px 10px 0px, rgb(0 0 0 / 20%) 0px 2px 4px -1px;
  border-radius: 8px;

  @media (min-width: 40em) {
    height: 320px;
  }

  @media (min-width: 52em) {
    height: 420px;
  }
`;

export const BlogHeroImageCaption = styled.div`
  box-sizing: border-box;
  margin: 10px 0;
  min-width: 0;
  font-family: ${theme.fonts.heading};
  text-align: center;
  font-style: italic;
`;

export const BlogPageTitle = styled.h2`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 24px;
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  line-height: 1.25;
  font-size: 32px;
  text-align: center;
  padding-bottom: 8px;
  padding-top: 16px;
`;

export const BlogPageDateDesc = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-family: ${theme.fonts.monospace};
  font-size: 16px;
  text-align: center;
  padding-bottom: 5px;
`;

export const BlogPageTagsContainer = styled.div`
  margin: auto;
  text-align: center;
  padding-bottom: 20px;
`;

export const BlogPostLink = styled.a`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  color: #1c1c1e;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-weight: 700;
  border-bottom: 4px solid #adf4cf;
  font-family: ${theme.fonts.link};
`;

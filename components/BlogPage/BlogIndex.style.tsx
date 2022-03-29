import styled from "styled-components";
import { theme } from "../../constants/theme";

export const BlogIndexContainer = styled.div``;

export const BlogIntroLink = styled.a`
  box-sizing: border-box;
  min-width: 0;
  margin-left: 5px;
  color: ${theme.variants.link.color};
  -webkit-text-decoration: ${theme.variants.link.textDecoration};
  text-decoration: ${theme.variants.link.color};
  font-weight: 700;
  border-bottom: ${theme.variants.link.borderBottom};
  font-family: ${theme.fonts.link};
`;

export const BlogIntroductionContainer = styled.div`
  a {
    margin-left: 5px;
  }
`;

export const BlogLayoutSearchBar = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: none;
  box-shadow: rgb(222, 222, 222) 0px 0px 10px 1px;
  border-radius: 5px;
  min-width: 300px;

  &:focus {
    outline: none;
  }
`;

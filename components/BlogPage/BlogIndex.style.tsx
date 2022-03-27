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

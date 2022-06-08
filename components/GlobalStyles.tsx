import { createGlobalStyle } from "styled-components";
import { theme } from "../constants/theme";

export const GlobalStyle = createGlobalStyle`
body {
  background: ${theme.colors.background};
  font-family: ${theme.fonts.body}
}
html, body {
  margin: 0px;
}
p {
  line-height: 1.5;
}

p, ul, li, h1, h2, h3, h4, h5, h6 {
  color: ${theme.colors.text};
}

blockquote {
  border-left: 3px solid #adf4cf;
  padding: 0 5px;
  margin-left: 15px;
  background-color: ivory;
  border-radius: 5px;
  box-shadow: 1px 1px 20px 0px gainsboro;
}

* {
  &:focus {
    outline: none;
    user-select: none;
  }
}
`;

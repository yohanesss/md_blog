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
code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}
p, ul, li, h1, h2, h3, h4, h5, h6 {
  color: ${theme.colors.text};
}
`;

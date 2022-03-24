import styled from "styled-components";
import { theme } from "../constants/theme";

export const LayoutWrapper = styled.div`
  box-sizing: border-box;
  min-width: 0;
  width: 100%;
  max-width: 100%;
  margin: auto;
  margin-top: 64px;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  @media (min-width: ${theme.breakpoints[0]}) {
    width: 100%;
    max-width: 600px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 8px;
  }
  @media (min-width: ${theme.breakpoints[1]}) {
    width: 720px;
    max-width: 720px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 32px;
  }
`;

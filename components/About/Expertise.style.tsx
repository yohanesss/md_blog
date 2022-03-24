import styled from "styled-components";
import { theme } from "../../constants/theme";

export const ExpertiseItemContainer = styled.div``;

export const ExpertiseHeading = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 16px;
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const ExpertiseDescription = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 16px;
  font-family: ${theme.fonts.body};
  padding-top: 8px;
  padding-bottom: 8px;
  line-height: 1.5;
`;

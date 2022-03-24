import styled from "styled-components";
import { theme } from "../../constants/theme";

export const WorkExperienceItemContainer = styled.div`
  box-sizing: border-box;
  margin: 0px 0px 16px;
  min-width: 0px;
  flex-direction: row;
  display: flex;
`;

export const WorkExperienceDuration = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  width: 25%;

  p {
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    font-family: ${theme.fonts.heading};
    font-size: 16px;
  }
`;

export const WorkExperienceInfoContainer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  flex-direction: column;
  width: 75%;
  display: flex;
`;

export const WorkExperienceCompany = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 16px;
  font-family: ${theme.fonts.heading};
`;

export const WorkExperienceTitle = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 16px;
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const WorkExperienceDescription = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-size: 16px;
  font-family: Karla, sans-serif;
  padding-top: 8px;
  padding-bottom: 8px;
`;

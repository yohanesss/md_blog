import styled from "styled-components";
import { theme } from "../../constants/theme";

type FooterContainerProps = {
  withMarginTop?: boolean;
};

export const FooterContainer = styled.footer<FooterContainerProps>`
  background-color: #f5f5f7;
  border-top: 1px solid #eee;
  width: 100%;
  margin-top: ${(props) => (props.withMarginTop ? "32px" : "0")};

  h2 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    font-size: 24px;
    font-family: ${theme.fonts.heading};
    font-weight: 700;
    line-height: 1.25;
    font-size: 16px;
  }
`;

export const FooterCopyright = styled(FooterContainer)`
  border-top: 1px solid #eee;
`;

type FooterInnerContainerProps = {
  withExtraPaddingY?: boolean;
};

export const FooterInnerContainer = styled.div<FooterInnerContainerProps>`
  box-sizing: border-box;
  min-width: 0;
  background-color: #f5f5f7;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  padding: ${(props) => (props.withExtraPaddingY ? "24px 8px 16px" : "8px")};
  margin: auto;

  @media (min-width: ${theme.breakpoints[0]}) {
    width: 100%;
    max-width: 600px;
  }
  @media (min-width: ${theme.breakpoints[1]}) {
    width: 720px;
    max-width: 720px;
  }
`;

export const FooterAboutSection = styled.div`
  width: calc(60% - 10px);
  padding-right: 10px;
`;

export const FooterConnectSection = styled.div`
  width: 40%;

  svg {
    padding-right: 5px;
    width: 20px;
    height: 20px;
  }

  div {
    display: flex;
    align-items: center;
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
`;

export const SupportMeButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  background-color: rgb(213, 216, 220);
  font-weight: bold;
  width: fit-content;
  border-radius: 5px;
  border: 2px solid rgb(213, 216, 220);
  cursor: pointer;
  transition: 0.15s ease-in-out;
  margin-top: 20px;
  text-decoration: none;

  img {
    width: 20px;
    height: 25px;
    margin-right: 5px;
  }

  &:hover {
    background-color: #fff;
  }
`;

type FooterSectionItemProps = {
  withoutPaddingTop?: boolean;
};

export const FooterSectionItem = styled.div<FooterSectionItemProps>`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  padding-top: ${(props) => (props.withoutPaddingTop ? "0" : "8px")};
  padding-bottom: 8px;
`;

export const PoweredByContainer = styled.div`
  display: flex;
  align-items: center;
  margin: -16px 0;
  svg {
    padding-left: 5px;
    width: 32px;
    height: 32px;
  }
`;

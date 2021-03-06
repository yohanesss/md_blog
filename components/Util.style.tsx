import styled from "styled-components";
import { theme } from "../constants/theme";

type HeadingProps = {
  borderBottom?: boolean;
};

export const Heading = styled.h2<HeadingProps>`
  box-sizing: border-box;
  margin: 0px 0px 16px;
  min-width: 0px;
  font-size: 24px;
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  line-height: 1.25;
  border-bottom: ${(props) =>
    props.borderBottom ? "1px solid rgb(51, 51, 51)" : "0"};
  padding-bottom: 8px;
`;

export const SectionContainer = styled.div`
  box-sizing: border-box;
  margin: 0px 0px 32px;
  min-width: 0px;
  width: inherit;

  p {
    box-sizing: border-box;
    margin: 0px 0px 16px;
    min-width: 0px;
    font-family: ${theme.fonts.body};
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Img = styled.img``;

export const HomeIntroContainer = styled(SectionContainer)`
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-left: 10px;
  }

  @media (max-width: 40em) {
    flex-direction: column-reverse;
    align-items: flex-start;
    text-align: center;
    align-items: center;

    img {
      margin-left: 0;
      margin-bottom: 20px;
      width: 150px;
      height: 150px;
    }
  }
`;

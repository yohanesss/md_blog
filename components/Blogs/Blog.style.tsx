import styled from "styled-components";

export const BlogCardContainer = styled.div`
  box-sizing: border-box;
  margin: 0px 0px 32px;
  min-width: 0px;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 8px;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: rgb(250, 250, 250);
  display: flex;
`;

export const BlogCardDataContainer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  flex-direction: column;
  padding: 4px 8px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
`;

export const BlogCardDataInnerContainer = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  flex-direction: column;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
`;

export const BlogCardDate = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-family: Karla, sans-serif;
  color: rgb(28, 28, 30);
  font-size: 14px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }

  @media (min-width: 52em) {
    font-size: 16px;
  }
  @media (min-width: 40em) {
    font-size: 14px;
  }
`;

export const BlogCardDescription = styled.div`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-family: Karla, sans-serif;
  color: rgb(28, 28, 30);
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 14px;
  @media (min-width: 52em) {
    font-size: 16px;
  }
  @media (min-width: 40em) {
    font-size: 16px;
  }
`;

export const BlogCardImage = styled.div`
  box-sizing: border-box;
  margin: 0px;
  background-image: url(https://images.unsplash.com/photo-1511465390398-532913e8328d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80);
  background-size: cover;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  min-height: 120px;
  min-width: 120px;

  @media (min-width: 40em) {
    min-height: 180px;
    min-width: 240px;
  }
`;

export const BlogTitle = styled.h3`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  font-family: Inter, sans-serif;
  color: rgb(28, 28, 30);
  font-weight: 700;
  font-size: 14px;
  @media (min-width: 52em) {
    font-size: 20px;
  }
  @media (min-width: 40em) {
    font-size: 16px;
  }
`;

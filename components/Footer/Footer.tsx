import React from "react";
import {
  FooterAboutSection,
  FooterConnectSection,
  FooterContainer,
  FooterCopyright,
  FooterInnerContainer,
  FooterSectionItem,
  PoweredByContainer,
} from "./Footer.styles";

const Footer = () => {
  return (
    <>
      <FooterContainer withMarginTop>
        <FooterInnerContainer withExtraPaddingY>
          <FooterAboutSection>
            <FooterSectionItem withoutPaddingTop>
              <h2>Yohanes Setiawan</h2>
              <div>
                Tech enthusiast, writting programming tutorial.{" "}
                <a
                  href="https://www.buymeacoffee.com/yohanessetw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy me coffee ☕
                </a>
              </div>
            </FooterSectionItem>
            <FooterSectionItem>
              <h2 style={{ paddingBottom: "8px" }}>This site powered by:</h2>
              <PoweredByContainer>
                <svg
                  viewBox="0 0 128 128"
                  fill="#1C1C1E"
                  style={{ width: "60px", height: "60px" }}
                >
                  <path d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20-26 37.5 13.4 18.4h-2.7L70.4 65 58.2 81.8h-2.6l13.5-18.4-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2 1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1 0-.7.6-1.2 1.6-1.2.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2-1.7 0-2.8.9-2.8 2.3 0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2 0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z"></path>
                </svg>

                <svg viewBox="0 0 128 128">
                  <g fill="#1C1C1E">
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg>

                <svg viewBox="0 0 128 128">
                  <g fill="#1C1C1E">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </g>
                </svg>
              </PoweredByContainer>
            </FooterSectionItem>
          </FooterAboutSection>
          <FooterConnectSection>
            <h2>Connect with Me</h2>
            <FooterSectionItem>
              <a href="https://twitter.com/_Yohanes_S_">Twitter</a>
            </FooterSectionItem>
            <FooterSectionItem>
              <a href="https://www.instagram.com/yohaness.setiawann/">
                Instagram
              </a>
            </FooterSectionItem>
            <FooterSectionItem>
              <a href="https://www.linkedin.com/in/yohanesssetiawann/">
                Linkedin
              </a>
            </FooterSectionItem>
            <FooterSectionItem>
              <a href="https://github.com/yohanes_dev">Github</a>
            </FooterSectionItem>
          </FooterConnectSection>
        </FooterInnerContainer>
      </FooterContainer>
      <FooterCopyright>
        <FooterInnerContainer>
          &copy; {new Date().getFullYear()} | Yohanes Setiawan
        </FooterInnerContainer>
      </FooterCopyright>
    </>
  );
};
// https://www.buymeacoffee.com/yohanessetw
export default Footer;

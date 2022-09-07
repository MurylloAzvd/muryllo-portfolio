import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100vh;
    height: fill-available;
    height: -webkit-fill-available;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #000;
    color: #fff;
  }

  #__next {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .slick-list {
    overflow: clip visible ;
  }
  
  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-dots li button:before {
    font-size: 20px;
    color: white;
  }

  .slick-dots li.slick-active button:before {
    color: #fff
  }

  .slick-dots {
    position: relative;
  }

  .shadow-link {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    background-color: #000;
    color: rgba(0, 255, 255, 0.7);
    cursor: pointer;
    border: 1px solid rgb(0, 255, 255, 0.7);
    border-radius: 4px;

    &:hover {
      box-shadow: 0px 1px 2px 0px rgba(0, 255, 255, 0.7),
        1px 2px 4px 0px rgba(0, 255, 255, 0.7),
        2px 4px 8px 0px rgba(0, 255, 255, 0.7),
        2px 4px 16px 0px rgba(0, 255, 255, 0.7);
      transform: translateX(-2.5px);
      transition-duration: 0.3s;
    }
  }

  .underline-effect {
    &::after {
      content: "";
      display: block;
      border-bottom: 2px solid #fff;
      height: 2px;
      margin-top: 4px;
      width: 100%;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
      border-radius: 4px;
    }

    &:hover::after {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";
import bold from "static/fonts/Roboto/Roboto-Bold.ttf";
import book from "static/fonts/Roboto/Roboto-Regular.ttf";
import light from "static/fonts/Roboto/Roboto-Light.ttf";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-white-1: #ffffff;
    --color-black-1: #242424;
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    background: #f7f7f7;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${bold}) format("truetype");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${book}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto';
    src: url(${light}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  html, body {
    margin: auto;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
  }
  a{
    text-decoration:none;
    color:unset;
  }
  .old-popup h1 {
    margin: 16px 0 23px;
    color: var(--color-gray-3);
    font-size: 24px;
    line-height: 26px;
    font-family: "Trebuchet MS", sans-serif;
  }
  .old-popup p {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    font-family: "Trebuchet MS", sans-serif;
    color: var(--color-gray-7);
  }
  .swal2-icon-show {
    border: none !important;
    margin: 0 !important;
  }
`;

export default GlobalStyle;
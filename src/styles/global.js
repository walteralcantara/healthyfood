import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    display: block;
  }

  body {
    font: 400 16px Montserrat, sans-serif;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
`;

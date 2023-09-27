import { createGlobalStyle } from 'styled-components';
import { myTheme } from './Theme.styled';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  body{
    background-color: #F0F0F6;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    color: ${myTheme.gray.light};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
    font-size: inherit;
  }

  ul[class] {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a:hover {
    text-decoration: none;
    color: inherit;
  }

  a,
  button {
    text-decoration: none;
    color: inherit;
  }

  address {
    font-style: inherit;
  }

  button {
    border: none;
    background-color: inherit;
  }

`;

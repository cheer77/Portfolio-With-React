import { createGlobalStyle, keyframes } from 'styled-components';
import { myTheme } from './Theme.styled';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(-45deg, #f0f0f6, #ffe0b2, #e0f7fa, #fce4ec);
    background-size: 400% 400%;
    animation: ${gradientAnimation} 15s ease infinite;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    text-transform: capitalize;
    color: ${myTheme.gray.light};
    
    &.hidden{
      overflow: hidden;
    }
  }
  
  div{
    box-sizing: border-box;
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

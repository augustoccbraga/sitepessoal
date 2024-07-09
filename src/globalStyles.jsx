import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    color: #EAE9FC;
    background: ${({ theme }) => theme.backgroundGradient};
    &::-webkit-scrollbar {
      display: none;
    }
  }
  h1, h2, h3, a, p {
    margin: 0;
    padding: 0;
    font-weight: 300;
  }
  h1 {
    font-size: 4rem;
    font-family: 'IBM Plex Serif', serif;
    @media (max-width:1400px) {
      font-size: 3.5rem;
    }
    @media (max-width:800px) {
      font-size: 3rem;
    }
  }
  h2 { 
    font-size: 3rem;
    font-family: 'IBM Plex Serif', serif;
    @media (max-width:1400px) {
      font-size: 2.5rem;
    }
    @media (max-width:800px) {
      font-size: 2rem;
    }
  }
  h3 { 
    font-size: 2.125rem;
    font-family: 'IBM Plex Sans', sans-serif;
    @media (max-width:1400px) {
      font-size: 1.725rem;
    }
    @media (max-width:800px) {
      font-size: 1.5rem;
    }
  }
  a { 
    font-size: 2rem;
    font-family: 'IBM Plex Serif', serif;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: #CDCDCD;
    }
    @media (max-width:1400px) {
      font-size: 1.75rem;
    }
    @media (max-width:800px) {
      font-size: 1.5rem;
    }
  }
  p { 
    font-size: 1.5rem;
    font-family: 'IBM Plex Sans', sans-serif;
    @media (max-width:1400px) {
      font-size: 1.4rem;
    }
    @media (max-width:800px) {
      font-size: 1.3rem;
    }
  }
`;

export default GlobalStyle;

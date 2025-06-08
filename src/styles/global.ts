import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
  }

  body{
    background-color: ${({ theme }) => theme.baseBackground};
    color: ${({ theme }) => theme.baseText};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font: 400 1rem Roboto, sans-serif;
  }
`;

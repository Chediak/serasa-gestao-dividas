import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }

  .overdue {
    color: red;
    font-weight: bold;
  }
`;

export default GlobalStyles;

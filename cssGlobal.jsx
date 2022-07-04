import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @media (max-width: 576px) {
    body {
      padding: 0;
      margin: 0;
    }
  }
`;

export default GlobalStyle;
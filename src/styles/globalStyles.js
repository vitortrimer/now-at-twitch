import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
  }

  body {
    width: 500px;
    height: 400px;
    background-color: ${Colors.mainColor};

    color: ${Colors.textColor};
    font-size: 14px;
  }

  a {
    color: ${Colors.twitchPurple};
    text-decoration: none;
  }

`;

export default GlobalStyle;

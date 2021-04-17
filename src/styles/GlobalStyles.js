import { createGlobalStyle } from "styled-components";

import { fontFamily } from "./Variables";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: ${fontFamily};
}
`;

export default GlobalStyle;

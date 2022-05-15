import { createGlobalStyle } from "styled-components";
import { RubikVariable } from "../fonts/Rubik";

export default createGlobalStyle`
@font-face {
  font-family: "Rubik";
  src: url(${RubikVariable}) format('truetype');
}
  body{
    margin: 0;
    padding: 0;
  }
  *{
    box-sizing: border-box;
    font-family: "Rubik", sans-serif
  }
`;

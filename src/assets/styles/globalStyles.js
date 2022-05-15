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
  ::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;

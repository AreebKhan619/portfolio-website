import { createGlobalStyle } from "styled-components";
import { RubikVariable } from "../fonts/Rubik";

export default createGlobalStyle`
@font-face {
  font-family: "Rubik";
  src: url(${RubikVariable}) format('truetype');
}

html{
  font-size: 10px;
}
  body{
    margin: 0;
    padding: 0;
  }
  *{
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
    /* user-select: none; */
  }
  ::-webkit-scrollbar {
  width: .5rem;
  height: .5rem;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 1rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

.circle-blob-left {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    background-color: #f9e1af61;
  }
}
`;

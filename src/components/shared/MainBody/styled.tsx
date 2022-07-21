import styled from "styled-components";
import { Colors } from "../../../assets/styles/colors";

export const MainBodyContainer = styled.div`
  padding: 0 15rem 8rem;
  margin-top: 8.5rem;
  background-color: ${Colors.blue};

  .dashed-underline {
    position: relative;
    display: inline-block;

    ::before {
      content: "";
      position: absolute;
      bottom: -.3rem;
      width: 100%;
      height: .2rem;
      /* Background / underlined */
      background: linear-gradient(to right, transparent 50%, #f6fafe 50%),
        #d5d4d4;
      background-size: 1.6rem .2rem, 100% .2rem;
    }
  }

  .bold {
    font-weight: bold;
  }
`;

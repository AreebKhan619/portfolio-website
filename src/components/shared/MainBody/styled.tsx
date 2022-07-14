import styled from "styled-components";
import { Colors } from "../../../assets/styles/colors";

export const MainBodyContainer = styled.div`
  padding: 0 150px 80px;
  margin-top: 85px;
  background-color: ${Colors.blue};

  .dashed-underline {
    position: relative;
    display: inline-block;

    ::before {
      content: "";
      position: absolute;
      bottom: -3px;
      width: 100%;
      height: 3px;
      /* Background / underlined */
      background: linear-gradient(to right, transparent 50%, #f6fafe 50%),
        #b8b8b8;
      background-size: 16px 2px, 100% 2px;
    }
  }

  .bold {
    font-weight: bold;
  }
`;

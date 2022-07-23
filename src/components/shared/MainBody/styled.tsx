import styled from "styled-components";
import { breakpoints } from "../../../assets/styles/breakpoints";
import { Colors } from "../../../assets/styles/colors";

export const MainBodyContainer = styled.main`
  padding: 2rem var(--padding-x) 8rem;
  margin-top: 6.5rem;
  background-color: ${Colors.blue};

  .dashed-underline {
    position: relative;
    display: inline-block;

    ::before {
      content: "";
      position: absolute;
      bottom: -0.3rem;
      width: 100%;
      height: 0.2rem;
      /* Background / underlined */
      background: linear-gradient(to right, transparent 50%, #f6fafe 50%),
        #d5d4d4;
      background-size: 1.6rem 0.2rem, 100% 0.2rem;
    }
  }

  .bold {
    font-weight: bold;
  }

  .inner-padding {
    padding: 0 15rem;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    .inner-padding {
      padding: 0;
    }
  }
`;

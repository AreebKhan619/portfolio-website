import styled from "styled-components";
import { CornerBlob } from "../../../assets/images";
import { breakpoints } from "../../../assets/styles/breakpoints";
import { Colors } from "../../../assets/styles/colors";

export const MainBodyContainer = styled.main`
  padding: 2rem var(--padding-x) 8rem;
  margin-top: 6.5rem;
  background-color: ${Colors.blue};
  position: relative;

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

  &::before{
    content: "";
    position: absolute;
  
    height: 5rem;
    width: 5rem;
    background: url(${CornerBlob}) center center;
    background-size: cover;
    transform: scale(2.5);
    opacity: 0.3
  }

  &::before{
    left: 0;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    .inner-padding {
      padding: 0;
    }
  }
`;

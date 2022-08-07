import styled from "styled-components";
import { breakpoints } from "../../../assets/styles/breakpoints";

export const PageTitle = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 0.3rem;
    border-radius: 0.3rem;
    background-color: #abd2e2;
  }

  &::before {
    left: 0;
    width: 40%;
  }

  &::after {
    left: calc(40% + 1rem);
    width: 3rem;
  }
`;

export const HrefLink = styled.a.attrs((props) => ({
  className: (props.className || "") + " link",
}))`
  font-size: 1.4rem;

  margin: 1rem 0;
  border-radius: 0.5rem;
  text-decoration: none;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 2;
  width: 60%;
  word-break: break-all;
  transition: 0.2s all ease-in;
  color: #a2660d;

  &:hover {
    text-decoration: underline;
    filter: brightness(0.9);
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

HrefLink.defaultProps = {
  target: "_blank",
  rel: "noreferrer",
};

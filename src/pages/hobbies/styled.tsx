import styled from "styled-components";

export const HobbiesOuterContainer = styled.div`
  margin-top: 10rem;
  padding: 0 15rem;

  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: -180px;
    top: 0;
    background: url(/cobwebs.png) no-repeat #ffffff00;
    height: 100%;
    min-height: 300px;
    width: 500px;
    background-size: contain;
    background-blend-mode: hue;
  }
`;

export const Timeline = styled.div``;

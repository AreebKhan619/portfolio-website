import styled from "styled-components";

export const Title = styled.h3`
  font-size: 30px;
  font-weight: bold;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 3px;
    border-radius: 3px;
    background-color: #abd2e2;
  }

  &::before {
    left: 0;
    width: 40%;
  }

  &::after{
    left: calc(40% + 10px);
    width: 30px;
  }
`;

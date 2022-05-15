import styled from "styled-components";

export const Title = styled.h3`
  font-size: 30px;
  font-weight: bold;
  position: relative;

  $height: 30px;

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
    width: 50%;
  }

  &::after{
    left: calc(50% + 10px);
    width: 8px;
  }
`;

import styled from "styled-components";

export const Title = styled.h3`
  font-size: 3rem;
  font-weight: bold;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: .3rem;
    border-radius: .3rem;
    background-color: #abd2e2;
  }

  &::before {
    left: 0;
    width: 40%;
  }

  &::after{
    left: calc(40% + 1rem);
    width: 3rem;
  }
`;

import styled from "styled-components";

interface CircleColorProps {
  circleColor?: string;
}

export const ExperienceOuterContainer = styled.div.attrs((props) => ({
  className: props.className + " circle-blob-left",
}))<CircleColorProps>`
  margin-top: 10rem;
  padding: 0 15rem;
  position: relative;

  &:before {
    background-color: ${(props) => props.circleColor};
    left: 10rem;
    top: -2rem;
  }
`;

export const Timeline = styled.div``;

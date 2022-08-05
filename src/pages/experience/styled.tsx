import styled from "styled-components";
import { WorkingFillerImg } from "../../assets/images";
import { breakpoints } from "../../assets/styles/breakpoints";
import { CircleColorProps } from "../../ts";

export const ExperienceOuterContainer = styled.div.attrs((props) => ({
  className: (props.className || "") + " circle-blob-left",
}))<CircleColorProps>`
  margin-top: 10rem;
  position: relative;

  .left-filler-img {
    background-image: url(${WorkingFillerImg});
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    padding: 0;
  }

  &:before {
    background-color: ${(props) => props.circleColor};
    left: 10rem;
    top: -2rem;
  }
`;

export const Timeline = styled.div``;

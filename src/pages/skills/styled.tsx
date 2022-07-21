import styled from "styled-components";
import { CircleColorProps } from "../../ts";

export const SkillsOuterContainer = styled.section.attrs((props) => ({
  className: props.className + " circle-blob-left",
}))<CircleColorProps>`
  padding: 0 15rem;
  margin-block: 10rem;

  &:before {
    left: 10rem;
    top: -2rem;
    background-color: ${(props) => props.circleColor}!important;
  }

  .personal-projects-container,
  .certifications-container {
    margin-block: 4rem;
  }

  ol.projects-list,
  ol.certifications-list {
    list-style: unset;
    li.project {
      margin-block-end: 2rem;
      .name {
        color: #009688;
        margin-bottom: 1rem;
        &.alternate {
          color: darkblue;
        }
      }
      .libraries-used {
        font-size: 1.5rem;
        margin-block: 1rem;
      }
    }
  }
`;

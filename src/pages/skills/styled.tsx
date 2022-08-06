import styled from "styled-components";
import { PersonalProjects } from "../../assets/images";
import { CircleColorProps } from "../../ts";

export const SkillsOuterContainer = styled.section.attrs((props) => ({
  className: props.className + " circle-blob-left",
}))<CircleColorProps>`
  margin-block: 10rem;
  position: relative;

  .left-filler-img {
    background-image: url(${PersonalProjects});
  }

  &:before {
    left: 10rem;
    top: -2rem;
    background-color: ${(props) => props.circleColor}!important;
  }

  .content-container {
    margin-block: 4rem;
  }

  ol.content-list {
    list-style: unset;
    li.list-item {
      margin-block-end: 2rem;
      .name {
        color: #009688;
        margin-bottom: 1rem;
        text-decoration: none;
        &.alternate {
          color: darkblue;
        }
      }
      .repo-icon {
        width: 4.5rem;
      }
      .libraries-used {
        font-size: 1.5rem;
        margin-block: 1rem;
      }
    }
  }
`;

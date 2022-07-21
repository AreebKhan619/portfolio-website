import styled from "styled-components";

export const SkillsOuterContainer = styled.section`
  padding: 0 15rem;
  margin-block: 10rem;

  .personal-projects-container,
  .certifications-container {
    margin-block: 4rem;
  }

  ol.projects-list, ol.certifications-list {
    list-style: unset;
    li.project {
      margin-block-end: 2rem;
      .name {
        color: #009688;
        margin-bottom: 1rem;
        &.alternate{
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

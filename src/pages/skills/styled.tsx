import styled from "styled-components";

export const SkillsOuterContainer = styled.section`
  padding: 0 150px;
  margin-block: 100px;

  .personal-projects-container,
  .certifications-container {
    margin-block: 40px;
  }

  ol.projects-list, ol.certifications-list {
    list-style: unset;
    li.project {
      margin-block-end: 20px;
      .name {
        color: #009688;
        margin-bottom: 10px;
        &.alternate{
          color: darkblue;
        }
      }
      .libraries-used {
        font-size: 15px;
        margin-block: 10px;
      }
    }
  }
`;

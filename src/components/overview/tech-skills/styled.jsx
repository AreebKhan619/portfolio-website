import styled from "styled-components";

export const TechSkillsContainer = styled.div`
  display: flex;
  max-width: 500px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const SkillCapsule = styled.div`
  border-radius: 20px;
  padding: 10px 15px;
  font-size: 15px;
  cursor: pointer;
  position: relative;
  font-weight: bold;

  &:nth-child(1) {
    background-color: #efb969;
    color: #656565;
  }
  &:nth-child(2) {
    background-color: #255567;
    color: #e6e6e6;
  }
  &:nth-child(3) {
    background-color: #3f51b5;
    color: #e6e6e6;
  }
  &:nth-child(4) {
    background-color: grey;
    color: #e6e6e6;
  }

  &:hover {
  }
`;

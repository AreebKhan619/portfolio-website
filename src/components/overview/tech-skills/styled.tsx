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
  background-color: white;
  border: 1px dashed;

  &:nth-child(4n+1) {
    color: #a2660d;
  }
  &:nth-child(4n+2) {
    color: #255567;
  }
  &:nth-child(4n+3) {
    color: #3f51b5;
  }
  &:nth-child(4n) {
    color: grey;
  }

  &:hover {
  }
`;

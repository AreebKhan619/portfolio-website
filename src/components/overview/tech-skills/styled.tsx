import styled from "styled-components";
import { breakpoints } from "../../../assets/styles/breakpoints";

export const TechSkillsContainer = styled.div`
  display: flex;
  max-width: 50rem;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const SkillCapsule = styled.div`
  border-radius: 2rem;
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  position: relative;
  font-weight: bold;
  background-color: white;
  border: 0.1rem dashed;

  &:nth-child(4n + 1) {
    color: #a2660d;
  }
  &:nth-child(4n + 2) {
    color: #255567;
  }
  &:nth-child(4n + 3) {
    color: #3f51b5;
  }
  &:nth-child(4n) {
    color: grey;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

import styled from "styled-components";

interface SkillContainerProps {
  bottom?: string;
  left?: string;
  top?: string;
  right?: string;
}

export const SkillContainer = styled.div<SkillContainerProps>`
  background-color: white;
  position: absolute;
  padding: 1rem 2.5rem;
  border-radius: 20rem;
  box-shadow: 0 0 0.5rem #9e9e9e66;
  bottom: ${(props) => props.bottom || "unset"};
  left: ${(props) => props.left || "unset"};
  top: ${(props) => props.top || "unset"};
  right: ${(props) => props.right || "unset"};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  z-index: 1;
`;

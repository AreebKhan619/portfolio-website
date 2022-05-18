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
  padding: 20px 40px;
  border-radius: 20px;
  box-shadow: 0 0 5px #9e9e9e66;
  bottom: ${(props) => props.bottom || "unset"};
  left: ${(props) => props.left || "unset"};
  top: ${(props) => props.top || "unset"};
  right: ${(props) => props.right || "unset"};
  font-size: 15px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

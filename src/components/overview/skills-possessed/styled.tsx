import styled, { css } from "styled-components";

interface SkillContainerProps {
  bottom?: string;
  left?: string;
  top?: string;
  right?: string;
}

const rightLeftVal = `min(var(--padding-x), 2rem)`;

const leftStyle = css`
  left: ${rightLeftVal};
  transform: translateX(-50%);
`;

const rightStyle = css`
  right: ${rightLeftVal};
  transform: translateX(50%);
`;

export const SkillContainer = styled.div<SkillContainerProps>`
  background-color: white;
  position: absolute;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
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

  :nth-child(1) {
    border: 1px;
    top: 10%;
    ${rightStyle};
    right: 18%;
    background-color: #e2d5f7;
  }

  :nth-child(2) {
    top: 30%;
    ${leftStyle};
    background-color: #f2e3d5;
  }

  :nth-child(3) {
    top: 50%;
    ${rightStyle};
    background-color: #e3ecf4;
  }

  :nth-child(4) {
    top: 70%;
    ${leftStyle};
    background-color: #e1f6f9;
  }

  :nth-child(5) {
    top: 90%;
    left: 50%;
    background-color: #b2ecb4;
  }

  .icon {
    width: 3rem;
    margin-right: 0.5rem;
  }
`;

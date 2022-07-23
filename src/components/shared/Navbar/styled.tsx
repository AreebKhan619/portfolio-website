import styled from "styled-components";
import { Colors } from "../../../assets/styles/colors";

export const NavbarOuterContainer = styled.div`
  font-size: 2.5rem;
  padding: 2rem var(--padding-x);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.2rem 0.1rem ${Colors.white100};
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(2rem);
  background-color: #f0f8ff94;
  z-index: 2;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const NavigationItems = styled.div`
  font-size: 1.5rem;
  display: inherit;
  align-items: inherit;
  column-gap: min(5rem, 2vw);
  cursor: pointer;
`;

export const Item = styled.div``;

export const PrimaryActionItem = styled(Item)`
  border: 0.2rem solid #a4cddd;
  padding: 1rem 2rem;
  border-radius: 2.5rem;
  &:hover {
    background-color: ${Colors.black};
    color: ${Colors.white};
  }
`;

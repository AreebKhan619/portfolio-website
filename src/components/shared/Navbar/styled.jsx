import styled from "styled-components";
import { Colors } from "../../../assets/styles/colors";

export const NavbarOuterContainer = styled.div`
  font-size: 25px;
  padding: 20px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 2px 1px ${Colors.white100};
  position: fixed;
  top: 0;
  width: 100%;
  backdrop-filter: blur(20px);
  background-color: #f0f8ff94;
  z-index: 2;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const NavigationItems = styled.div`
  font-size: 0.8em;
  display: inherit;
  align-items: inherit;
  column-gap: 50px;
  cursor: pointer;
`;

export const Item = styled.div``;

export const PrimaryActionItem = styled(Item)`
  /* background-color: ${Colors.black}; */
  /* color: ${Colors.white}; */
  border: 2px solid #a4cddd;
  padding: 10px 20px;
  border-radius: 25px;
`;

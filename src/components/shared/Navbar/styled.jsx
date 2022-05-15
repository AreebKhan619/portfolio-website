import styled from "styled-components";
import { Colors } from "../../../assets/styles/colors";

export const NavbarOuterContainer = styled.div`
  font-size: 25px;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 2px 1px ${Colors.white100};
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
  background-color: ${Colors.black};
  color: ${Colors.white};
  padding: 10px 20px;
  border-radius: 20px;
`;

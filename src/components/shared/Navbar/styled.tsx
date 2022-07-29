import styled from "styled-components";
import { breakpoints } from "../../../assets/styles/breakpoints";
import { Colors } from "../../../assets/styles/colors";

export const NavbarOuterContainer = styled.header`
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

  @media screen and (max-width: ${breakpoints.tablet}) {
    padding-block: 1rem;
  }
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const NavigationItems = styled.nav`
  font-size: 1.5rem;
  display: inherit;
  align-items: inherit;
  column-gap: min(5rem, 2vw);
  cursor: pointer;

  button.toggle {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    order: 1;
  }

  .small-nav-container {
    position: absolute;
    top: 6rem;
    left: 0;
    width: 100%;
    background-color: aliceblue;
    cursor: initial;
    box-shadow: 0px 1px 2px #b7b7b796;
    padding: 2rem var(--padding-x);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    .item {
      cursor: pointer;
      padding-block: 1rem;
      margin-block: 0.5rem;
    }
  }
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

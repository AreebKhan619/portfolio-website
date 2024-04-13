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

  z-index: 2;

  /* slightly transparent fallback */
  background-color: rgba(255, 255, 255);

  /* if backdrop support: very transparent and blurred */
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    backdrop-filter: blur(2rem);
    background-color: #f0f8ff94;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    padding-block: 1rem;
  }

  .connect-options {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(100%);
    padding-inline: inherit;

    .links-container {
      justify-content: flex-end;
      background-color: white;
      margin-block: 0;
      padding-block: 1rem;
    }
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
  }

  .item {
    &.sm {
      display: block;
      cursor: pointer;
      padding-block: 1rem;
      margin-block: 0.5rem;
    }
    &.lg {
      padding-block: 1rem;
    }

    &.active {
      font-weight: 800;
      text-shadow: 0 0 black;
    }
  }

  .item-lg {
    padding-block: 1rem;

    &.active {
      font-weight: 800;
      text-shadow: 0 0 black;
    }
  }
`;

export const PrimaryActionItem = styled.div`
  border: 0.2rem solid #a4cddd;
  padding: 1rem 2rem;
  border-radius: 2.5rem;
  &:hover {
    background-color: ${Colors.black};
    color: ${Colors.white};
  }
`;

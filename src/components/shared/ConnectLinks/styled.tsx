import styled from "styled-components";

export const LinksContainerStyled = styled.div`
  &.links-container {
    margin: 2rem 0;
    display: flex;
    column-gap: 1rem;

    #resume-link {
      cursor: pointer;
      background-color: black;
      display: inline-block;
      color: white;
      align-self: center;
      padding: 1rem 1.5rem;
      border-radius: 1rem;
      font-size: 1.5rem;
      text-align: center;
      a {
        color: inherit;
        text-decoration: none;
      }
    }

    .link {
      transition: 0.3s all ease-in-out;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
        transform: scale(1.05);
      }
    }
  }
`;

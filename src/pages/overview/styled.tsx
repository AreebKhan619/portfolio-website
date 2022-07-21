import styled from "styled-components";

export const OverviewContainer = styled.div`
  height: calc(
    100vh - 10rem - 2.5rem
  ); // full - navbar padding - font size of navbar
  display: flex;
  align-items: center;
`;

export const LeftPortion = styled.div`
  flex: 50%;
  color: grey;

  .wavy-line-container {
    margin: 2rem 0;
    text-align: center;

    img {
      height: 4.5rem;
    }
  }

  #second-half .links-container {
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

export const RightPortion = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const HiText = styled.span``;

export const IntroText = styled.h2`
  padding: 0;
  margin: 1rem 0;
  line-height: 1.1;
  font-size: 5rem;
  color: darkgrey;
`;

export const Name = styled.div`
  color: black;
`;

export const MainName = styled.span`
  text-decoration: underline;
  color: #417e41;
`;

export const StatContainerOuter = styled.div.attrs((props) => ({
  className: `${props.className} circle-blob-left`,
}))`
  display: flex;
  margin: 2rem 0;
  column-gap: 3rem;
  position: relative;
`;

export const Stat = styled.div`
  z-index: 1;
`;

export const StatHeader = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: black;
`;

export const StatSubtitle = styled.div`
  font-size: 1.5rem;
`;

export const WaveImgContainer = styled.img`
  max-height: 60rem;
  border-radius: 1rem;
  box-shadow: -2rem 2rem #e4dfe061;
  margin-top: 3rem;
`;

export const ImageAndSkills = styled.div`
  position: relative;
`;

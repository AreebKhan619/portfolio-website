import styled from "styled-components";
import { CrayonUnderline, BgImgPattern } from "../../assets/images";
import { breakpoints } from "../../assets/styles/breakpoints";

export const OverviewContainer = styled.div`
  /* height: calc(
    100vh - 10rem - 2.5rem
  ); // full - navbar padding - font size of navbar */
  display: flex;
  align-items: center;

  .img-and-skills {
    position: relative;
    .img-container {
      margin-top: 3rem;
      position: relative;

      .hero-img {
        width: 100%;
        max-height: 60rem;
        border-radius: 1rem;
        position: relative;
      }

      &:before {
        content: "";
        position: absolute;
        height: 95%;
        width: 100%;
        left: -2rem;
        top: 2rem;
        background: url(${BgImgPattern});
        background-size: 5px;
        border-radius: 10%;
        transform: rotate(20deg);
        background-color: #ffffff80;
        background-blend-mode: hue;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;

    .img-and-skills {
      .img-container > .hero-img {
        max-width: 200px;
      }

      .skill {
        transform: scale(0.7);
      }
    }
  }
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

  @media screen and (max-width: ${breakpoints.tablet}) {
    #second-half .links-container {
      justify-content: center;
    }
  }
`;

export const RightPortion = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-end;

  height: 100%;
  position: relative;
`;

export const HiText = styled.span``;

export const IntroText = styled.h2`
  padding: 0;
  margin: 1rem 0;
  line-height: 1.1;
  font-size: 5rem;
  color: darkgrey;

  @media screen and (max-width: ${breakpoints.tablet}) {
    font-size: 4rem;
  }
`;

export const Name = styled.div`
  color: black;
`;

export const MainName = styled.span`
  color: #417e41;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 30px;
    top: calc(100% - 8px);
    left: 0px;
    background: url(${CrayonUnderline}) top center / contain no-repeat;
  }
`;

export const StatContainerOuter = styled.div.attrs((props) => ({
  className: (props.className || "") + ` circle-blob-left`,
}))`
  display: flex;
  margin: 2rem 0;
  column-gap: 3rem;
  position: relative;

  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 2rem;
  }
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
  width: 100%;
  max-height: 60rem;
  border-radius: 1rem;
  position: relative;
`;

import styled from "styled-components";
import { Colors } from "../../../assets/styles/colors";

export const MainBodyContainer = styled.div`
  padding: 0 100px;
  height: calc(
    100vh - 100px - 25px
  ); // full - navbar padding - font size of navbar
  background-color: ${Colors.blue};
  display: flex;
  align-items: center;
`;

export const LeftPortion = styled.div`
  flex: 50%;
  font-size: 20px;
  color: grey;
`;

export const RightPortion = styled.div`
  flex: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const HiText = styled.span``;

export const IntroText = styled.h2`
  padding: 0;
  margin: 10px 0;
  line-height: 1.1;
  font-size: 50px;
  color: darkgrey;
`;

export const Name = styled.div`
  color: black;
`;

export const MainName = styled.span`
  text-decoration: underline;
  color: #417e41;
`;

export const StatContainerOuter = styled.div`
  display: flex;
  margin: 20px 0;
  column-gap: 30px;
`;

export const Stat = styled.div``;

export const StatHeader = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: black;
`;

export const StatSubtitle = styled.div`
  font-size: 15px;
`;

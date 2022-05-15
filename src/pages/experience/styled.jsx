import styled from "styled-components";

export const ExperienceOuterContainer = styled.div`
  margin-top: 100px;
  padding: 0 150px;
`;

export const Timeline = styled.div``;

export const TimeRange = styled.div`
  font-size: 15px;
  position: relative;
  top: 5px;
  text-align: right;
`;

export const ExperienceMain = styled.div`
  position: relative;
  padding-left: 30px;
  margin-left: 20px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 10px;
  }

  &::before {
    height: 10px;
    width: 10px;
    background-color: black;
    border-radius: 50%;
    top: calc(0.5em - 2.5px);
  }

  &::after {
    height: calc(100% - 30px);
    width: 1px;
    left: 14px;
    background: #efb969;
    top: 26px;
  }
`;

export const WorkplaceName = styled.div`
  color: #795548;
`;

export const AdditionalInfo = styled.div`
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  box-shadow: 0 0 2px 0px #c9c0c0;
  &:hover {
    background-color: #e3ecf4;
  }
`;

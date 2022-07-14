import styled from "styled-components";

export const TimelineContainer = styled.div``;

export const TimeRange = styled.div`
  font-size: 15px;
  position: relative;
  top: 5px;
  text-align: right;
  width: 150px;
  min-width: 150px;
`;

export const EventMain = styled.div`
  position: relative;
  padding-left: 30px;
  margin-left: 10px;
  flex: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 10px;
  }

  .event-logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 10px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
    }
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

  ol {
    list-style: upper-roman;
  }
  .point-details {
    margin-bottom: 25px;

    .extended {
      .subpoints {
        margin: 10px 0;
        list-style-type: disc;
        color: #646464;
        li {
          margin-block-end: 5px;
        }
      }
      .supporting-items {
        font-size: 14px;
        a.link {
          margin: 10px 0;
          border-radius: 5px;
          text-decoration: none;

          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 2;
          width: 50%;
          word-break: break-all;
          transition: 0.2s all ease-in;

          &:hover {
            text-decoration: underline;
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`;

export const Subtitle = styled.div`
  color: #795548;
`;

export const AdditionalInfo = styled.div`
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  box-shadow: 0 0 2px 0px #c9c0c0;

  font-size: 15px;
  padding: 15px;

  &:hover {
    background-color: #e3ecf4;
  }
`;

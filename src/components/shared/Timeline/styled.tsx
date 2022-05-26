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

  .point-details {
    margin-bottom: 15px;

    .extended {
      .subpoints {
        margin: 10px 0;
        list-style-type: disc;
        color: grey;
      }
      .supporting-items {
        font-size: 14px;
        a.link {
          color: #fb8b83;
          margin: 10px 0;
          background: #fcf3f2;
          display: inline-block;
          padding: 4px 11px;
          border-radius: 5px;
          border: 1px solid;
          text-decoration: none;

          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 2;
          width: 50%;
          word-break: break-all;

          &:hover {
            text-decoration: underline;
          }
        }
        .list {
          padding: 5px 10px;
          border-radius: 5px;
          background: white;
          border: 1px solid #84dfea;
        }
        .list-items {
          display: flex;
          column-gap: 20px;
          margin-top: 10px;
          .item {
            text-align: center;
            width: 80px;
            img.icon {
              width: 45px;
              height: 45px;
              object-fit: cover;
            }
            .title {
              font-size: 0.8em;
            }
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
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  box-shadow: 0 0 2px 0px #c9c0c0;
  &:hover {
    background-color: #e3ecf4;
  }
`;

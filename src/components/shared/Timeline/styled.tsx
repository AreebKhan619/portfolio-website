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

  ol{
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
        .list {
          border-radius: 5px;
          background: white;
          position: relative;
          overflow: hidden;

          .bg-img {
            position: absolute;
            width: 100%;
            height: 100%;
            inset: 0;
            border-radius: inherit;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffd700' fill-opacity='1' d='M0 128L40 106.7C80 85 160 43 240 58.7C320 75 400 149 480 170.7C560 192 640 160 720 128C800 96 880 64 960 69.3C1040 75 1120 117 1200 117.3C1280 117 1360 75 1400 53.3L1440 32L1440 320L1400 320C1360 320 1280 320 1200 320C1120 320 1040 320 960 320C880 320 800 320 720 320C640 320 560 320 480 320C400 320 320 320 240 320C160 320 80 320 40 320L0 320Z'%3E%3C/path%3E%3C/svg%3E");
            filter: grayscale(1);

            background-size: 100%;
            background-color: #ffffffeb;
            background-blend-mode: hue;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .content {
            z-index: 1;
            position: relative;
            padding: 5px 10px;
          }
        }
        .list-items {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
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

import styled from "styled-components";
import { breakpoints } from "../../../assets/styles/breakpoints";

export const TimelineContainer = styled.div``;

export const TimeRange = styled.div`
  font-size: 1.5rem;
  position: relative;
  top: 0.5rem;
  text-align: right;
  width: 15rem;
  min-width: 15rem;

  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 7rem;
    min-width: 7rem;
  }
`;

export const EventContainer = styled.div`
  display: flex;

  .event-main {
    position: relative;
    padding-left: 3rem;
    margin-left: 1rem;
    flex: 1;

    .event-point-container {
      display: flex;
      .title {
        font-weight: bold;
        font-size: 1.2em;
      }
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 1rem;
    }

    .event-logo {
      width: 5rem;
      height: 5rem;
      margin-right: 1rem;
      border-radius: 1rem;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
      }
    }

    &::before {
      height: 1rem;
      width: 1rem;
      background-color: black;
      border-radius: 50%;
      top: 0;
    }

    &::after {
      height: 100%;
      width: 0.1rem;
      left: 1.4rem;
      background: #efb969;
      top: 1rem;
    }

    ol {
      list-style: upper-roman;
    }
    .point-details {
      margin-bottom: 2.5rem;
      &:marker {
        color: grey;
      }

      .extended {
        margin-block: 2rem;
        .subpoints {
          margin: 2rem 0;
          list-style-type: disc;
          color: #646464;
          li {
            margin-block-end: 0.5rem;
          }
        }
        .supporting-items {
          font-size: 1.4rem;
          a.link {
            margin: 1rem 0;
            border-radius: 0.5rem;
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
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    .event-main {
      ul.subpoints,
      ol {
        padding-inline-start: 2rem;
      }
      .point-details .extended {
        .supporting-items a.link {
          width: 100%;
        }
        .dashed-underline {
          display: block;
        }
      }
    }
  }
`;

export const Subtitle = styled.div`
  color: #795548;
`;

export const AdditionalInfo = styled.div`
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  box-shadow: 0 0 0.2rem 0 #c9c0c0;

  font-size: 1.5rem;
  padding: 1.5rem;

  &:hover {
    background-color: #e3ecf4;
  }
`;

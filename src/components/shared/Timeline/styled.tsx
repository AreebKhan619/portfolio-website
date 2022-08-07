import styled, { css } from "styled-components";
import { breakpoints } from "../../../assets/styles/breakpoints";

interface EventContainerProps {
  isExpanded: boolean;
  bgColor?: string;
}

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

const collapsedEventCSS = css`
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: #f8f3e9;
  align-items: center;
  margin-block-end: 2rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 4px 1px #a19c154f;
  }

  .event-logo {
    height: 8rem;
    width: 8rem;
  }

  .title {
    font-size: 1.4rem;
  }
`;

export const EventContainer = styled.div<EventContainerProps>`
  display: flex;

  .event-main {
    position: relative;
    padding-left: 3rem;
    margin-left: 1rem;
    flex: 1;

    .event-point-container {
      display: flex;
      transition: 0.2s all linear;
      ${(props) => (props.isExpanded ? "" : collapsedEventCSS)};
      background-color: ${(props) =>
        props.isExpanded ? "transparent" : props.bgColor || "initial"};
      padding: ${(props) => (props.isExpanded ? "1rem" : "initial")};

      .title {
        font-weight: bold;
        font-size: 2.4rem;
      }

      .subtitle {
        color: #795548;
      }

      .collapse-btn {
        display: none;
        position: absolute;
        right: 0;
        font-size: 1.2rem;
        background: darkgrey;
        padding: 0.6rem 1.2rem;
        border-radius: 2rem;
        color: white;
        cursor: pointer;
        &:hover {
          background-color: grey;
        }
      }
    }

    &:hover .collapse-btn {
      display: block;
    }

    .subpoints {
      margin-block-end: 5rem;
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
      top: 1rem;
    }

    &::after {
      height: 100%;
      width: 0.1rem;
      left: 1.4rem;
      background: #efb969;
      top: 2rem;
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
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    .event-main {
      margin-left: 0;
      ul.subpoints,
      ol {
        padding-inline-start: 2rem;
      }
      .point-details .extended {
        .dashed-underline {
          display: block;
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.customMobile1}) {
    flex-direction: column;

    &.timeline-point {
      margin-block-end: 1rem;
      .time-range {
        width: fit-content;
        padding: 1rem 1.5rem;
        background-color: white;
        border-radius: 1rem;
        border: 0.1rem solid lightgrey;
        position: relative;
        top: -1rem;
        right: -3rem;
      }
      .event-main {
        &:before {
          top: -3.5rem;
          z-index: 1;
        }
        &:after {
          top: -3rem;
          height: calc(100% + 3.5rem);
        }

        .event-point-container {
          .title {
            line-height: 1;
            font-size: 2rem;
          }
          .subtitle {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
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

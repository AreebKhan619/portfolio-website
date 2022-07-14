import { FC } from "react";
import { TimelineEventObject } from "../../../ts/interfaces";
import LibrariesUsed from "../LibrariesUsed";
import {
  TimelineContainer,
  TimeRange,
  Subtitle,
  AdditionalInfo,
  EventContainer,
} from "./styled";

interface TimelineProps {
  events: TimelineEventObject[];
}

interface ExtendedDetails<T> {
  text: string;
  subPoints?: string[];
  link: string;
  list: T[];
}

interface IList {
  icon: any;
  link: string | null;
  title: string;
}

const Timeline: FC<TimelineProps> = ({ events }): JSX.Element => {
  return (
    <TimelineContainer>
      {events.map((e, idx) => (
        <EventPoint {...e} key={idx} />
      ))}
    </TimelineContainer>
  );
};

const EventPoint: FC<TimelineEventObject> = ({
  range,
  title,
  subtitle,
  eventImg,
  points,
  gallery,
}) => {
  const renderPoint = (
    point: string | ExtendedDetails<IList>
  ): string | JSX.Element => {
    if (typeof point == "string") return point;
    else if (typeof point == "object") {
      return (
        <div className="extended">
          <div className="dashed-underline">{point.text}</div>
          {point.subPoints && (
            <ul className="subpoints">
              {point.subPoints.map((_subPt, _idx) => (
                <li key={_idx}>{_subPt}</li>
              ))}
            </ul>
          )}
          <div className="supporting-items">
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={point.link}
              className="link"
            >
              See it live in action: {point.link}
            </a>
            <LibrariesUsed list={point.list} />
          </div>
        </div>
      );
    }
    return "";
  };

  return (
    <EventContainer>
      <TimeRange>{range}</TimeRange>
      <div className="event-main">
        <div className="event-point-container">
          <img
            className="event-logo"
            src={eventImg}
            alt={typeof subtitle === "string" ? subtitle : "Event"}
          />
          <div>
            <div className="title">{title}</div>
            <Subtitle>{subtitle}</Subtitle>
          </div>
        </div>

        <section style={{ marginBottom: 50 }}>
          <ol>
            {points?.map((point, idx) => (
              <li className="point-details" key={idx}>
                {renderPoint(point)}
              </li>
            ))}
          </ol>

          {gallery && <AdditionalInfo>Open Gallery</AdditionalInfo>}
        </section>
      </div>
    </EventContainer>
  );
};

export default Timeline;

import { FC } from "react";
import { TimelineEventObject } from "../../../ts/interfaces";
import LibrariesUsed from "../LibrariesUsed";
import {
  TimelineContainer,
  TimeRange,
  EventMain,
  Subtitle,
  AdditionalInfo,
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
      {events.map((e) => (
        <EventPoint {...e} />
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
          <div>{point.text}</div>
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
    <div
      style={{
        display: "flex",
      }}
    >
      <TimeRange>{range}</TimeRange>
      <EventMain>
        <div style={{ display: "flex" }}>
          <img
            className="event-logo"
            src={eventImg}
            alt={typeof subtitle === "string" ? subtitle : "Event"}
          />
          <div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.2em",
              }}
            >
              {title}
            </div>
            <Subtitle>{subtitle}</Subtitle>
          </div>
        </div>

        <section style={{ marginBottom: 50 }}>
          <ol>
            {points?.map((point) => (
              <li className="point-details">{renderPoint(point)}</li>
            ))}
          </ol>

          {gallery && <AdditionalInfo>Open Gallery</AdditionalInfo>}
        </section>
      </EventMain>
    </div>
  );
};

export default Timeline;

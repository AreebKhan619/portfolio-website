import { FC } from "react";
import { TimelineEventObject } from "../../../ts/interfaces";
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
}) => {
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
            src={eventImg}
            alt={typeof subtitle === "string" ? subtitle : "Event"}
            style={{ width: 50, height: 50, marginRight: 10, borderRadius: 10 }}
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
              <li style={{ marginBottom: 15 }}>{point}</li>
            ))}
          </ol>

          <AdditionalInfo>Open Gallery</AdditionalInfo>
        </section>
      </EventMain>
    </div>
  );
};

export default Timeline;

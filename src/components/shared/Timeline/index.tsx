import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import {
  getFadeInProps,
  getSlideInProps,
} from "../../../assets/constants/motionProps";
import { TimelineEventObject } from "../../../ts/interfaces";
import LibrariesUsed from "../LibrariesUsed";
import { HrefLink } from "../SharedStyledComponents/styled";
import {
  TimelineContainer,
  TimeRange,
  AdditionalInfo,
  EventContainer,
} from "./styled";

interface TimelineProps {
  events: TimelineEventObject[];
  isCollapsible?: boolean;
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

const Timeline: FC<TimelineProps> = ({
  events,
  isCollapsible = false,
}): JSX.Element => {
  return (
    <TimelineContainer className="timeline">
      {events.map((e, idx) => (
        <EventPoint isCollapsible={isCollapsible} {...e} key={idx} />
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
  isCollapsible = false,
  bgColor,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (!isCollapsible) setIsExpanded(false);
  }, [isCollapsible]);

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
            {point.link && (
              <HrefLink href={point.link}>
                See it live in action: {point.link}
              </HrefLink>
            )}

            {point?.list?.length && <LibrariesUsed list={point.list} />}
          </div>
        </div>
      );
    }
    return "";
  };

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <EventContainer
      className="timeline-point"
      as={motion.div}
      {...getFadeInProps()}
      isExpanded={isExpanded}
      onClick={() => !isExpanded && toggleCollapse()}
      bgColor={bgColor}
    >
      <TimeRange className="time-range">{range}</TimeRange>
      <div className="event-main">
        <div className="event-point-container">
          <img
            className="event-logo"
            src={eventImg}
            alt={typeof subtitle === "string" ? subtitle : "Event"}
          />
          <div>
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="collapse-btn"
                role={"button"}
                {...getFadeInProps()}
                onClick={toggleCollapse}
              >
                Collapse
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.section {...getSlideInProps()} className="subpoints">
              <ol>
                {points?.map((point, idx) => (
                  <li className="point-details" key={idx}>
                    {renderPoint(point)}
                  </li>
                ))}
              </ol>

              {gallery && <AdditionalInfo>Open Gallery</AdditionalInfo>}
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </EventContainer>
  );
};

export default Timeline;

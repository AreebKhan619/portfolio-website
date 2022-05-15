import PageTitle from "../../components/shared/PageTitle";
import {
  ExperienceOuterContainer,
  Timeline,
  TimeRange,
  ExperienceMain,
  WorkplaceName
} from "./styled";

const Experience = () => {
  return (
    <ExperienceOuterContainer>
      <PageTitle title={"Experience"} />
      <Timeline>
        <ExperiencePoint />
        <ExperiencePoint />
      </Timeline>
    </ExperienceOuterContainer>
  );
};

const ExperiencePoint = () => {
  return (
    <div
      style={{
        display: "flex",
        // minHeight: 300,
      }}
    >
      <TimeRange>Jan 2022 - Present</TimeRange>
      <ExperienceMain>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.2em",
          }}
        >
          SDE-2
        </div>
        <WorkplaceName>ChimpsAtWork Studios / CAW Studios (External Link Indicator)</WorkplaceName>
        {/* Responsibilities */}
        <ol style={{marginBottom: 50}}>
          {[1, 2, 3, 4, 5].map((el) => (
            <li style={{ marginBottom: 15 }}>Managed &amp; set-up monorepo architecture and co-lead the shared code development</li>
          ))}
        </ol>
      </ExperienceMain>
    </div>
  );
};

export default Experience;

import PageTitle from "../../components/shared/PageTitle";
import {
  ExperienceOuterContainer,
  Timeline,
  TimeRange,
  ExperienceMain,
  WorkplaceName,
  AdditionalInfo,
} from "./styled";

import { CAWStudios } from "../../assets/images";

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
        <div style={{ display: "flex" }}>
          <img
            src={CAWStudios}
            alt="Company Logo"
            style={{ width: 50, height: 50, marginRight: 10, borderRadius: 10 }}
          />
          <div>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.2em",
              }}
            >
              SDE-2
            </div>
            <WorkplaceName>
              ChimpsAtWork Studios / CAW Studios (External Link Indicator)
            </WorkplaceName>
          </div>
        </div>

        <section style={{ marginBottom: 50 }}>
          {/* Responsibilities */}
          <ol>
            {[1, 2, 3, 4, 5].map((el) => (
              <li style={{ marginBottom: 15 }}>
                Managed &amp; set-up monorepo architecture and co-lead the
                shared code development
              </li>
            ))}
          </ol>

          <AdditionalInfo>Open Gallery</AdditionalInfo>
        </section>
      </ExperienceMain>
    </div>
  );
};

export default Experience;

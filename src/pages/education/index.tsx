import { ExperienceOuterContainer } from "./styled";

import Timeline from "../../components/shared/Timeline";
import { PageTitle } from "../../components/shared/SharedStyledComponents/styled";
import { GenericObject } from "../../ts";
import { educationData } from "../../data";

const Education = () => {
  return (
    <ExperienceOuterContainer id="education" className="inner-padding">
      <PageTitle>Education</PageTitle>
      <TimelineWrapper education={educationData} />
      <div className="additional-content">
        Got 1103<sup>rd</sup> position in state-level entrance exams.
      </div>
    </ExperienceOuterContainer>
  );
};

const TimelineWrapper = ({ education }: { education: GenericObject[] }) => {
  const events = education.map((edu) => ({
    range: edu.duration,
    title: edu.role,
    subtitle: edu.institutionName,
    eventImg: edu.companyLogo,
    points: edu.rolesAndResponsibilities,
  }));

  return <Timeline events={events} />;
};

export default Education;

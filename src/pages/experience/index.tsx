import { ExperienceOuterContainer } from "./styled";

import { PageTitle } from "../../components/shared/SharedStyledComponents/styled";
import Timeline from "../../components/shared/Timeline";

import { GenericObject } from "../../ts";
import { experienceData } from "../../data";

const Experience = () => {
  return (
    <ExperienceOuterContainer className="inner-padding">
      <div className="left-filler-img" />
      <PageTitle>Experience</PageTitle>
      <TimelineWrapper experience={experienceData} />
    </ExperienceOuterContainer>
  );
};

const TimelineWrapper = ({ experience }: { experience: GenericObject[] }) => {
  const events = experience.map((exp) => ({
    range: exp.duration,
    title: exp.role,
    subtitle: exp.company,
    eventImg: exp.companyLogo,
    points: exp.rolesAndResponsibilities,
    gallery: exp.gallery,
    bgColor: exp.bgColor,
  }));

  return <Timeline events={events} />;
};

export default Experience;

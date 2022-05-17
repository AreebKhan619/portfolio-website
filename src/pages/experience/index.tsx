import { ExperienceOuterContainer } from "./styled";

import PageTitle from "../../components/shared/PageTitle";
import Timeline from "../../components/shared/Timeline";

import { CAWStudios } from "../../assets/images";

const Experience = () => {
  const experience = [
    {
      duration: "Jan 2022 - Present",
      role: "SDE-2",
      company: "ChimpsAtWork Studios / CAW Studios",
      companyURL: "(External Link Indicator)",
      companyLogo: CAWStudios,
      rolesAndResponsibilities: [
        "Managed &amp; set-up monorepo architecture and co-lead the shared code development",
      ],
    },
  ];

  return (
    <ExperienceOuterContainer>
      <PageTitle title={"Experience"} />
      <TimelineWrapper experience={experience} />
    </ExperienceOuterContainer>
  );
};

const TimelineWrapper = ({ experience }) => {
  const events = experience.map((exp) => ({
    range: exp.duration,
    title: exp.role,
    subtitle: exp.company,
    eventImg: exp.companyLogo,
    points: exp.rolesAndResponsibilities,
  }));

  return <Timeline events={events} />;
};

export default Experience;

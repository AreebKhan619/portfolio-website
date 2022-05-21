import { ExperienceOuterContainer } from "./styled";

import PageTitle from "../../components/shared/PageTitle";
import Timeline from "../../components/shared/Timeline";

import { Biscoe, GECA } from "../../assets/images";
import { GenericObject } from "../../ts";

const Experience = () => {
  const education = [
    {
      duration: "Jan 2022 - Present",
      role: "Bachelors in Computer Science (B.E - C.S.E)",
      institutionName: "Government College of Engineering, Aurangabad",
      institutionURL: "(External Link Indicator)",
      companyLogo: GECA,
      rolesAndResponsibilities: [
        "Managed & set-up monorepo architecture and co-lead the shared code development",
      ],
    },
    {
      duration: "June 2002 - June 2015",
      role: "HSC",
      institutionName: "Tyndale Biscoe School",
      institutionURL: "(External Link Indicator)",
      companyLogo: Biscoe,
      rolesAndResponsibilities: ["Did some things here as well"],
    },
    {
      duration: "June 2002 - June 2015",
      role: "SSC",
      institutionName: "Tyndale Biscoe School",
      institutionURL: "(External Link Indicator)",
      companyLogo: Biscoe,
      rolesAndResponsibilities: ["Did some things here as well"],
    },
  ];

  return (
    <ExperienceOuterContainer>
      <PageTitle title={"Education"} />
      <TimelineWrapper education={education} />
      <div>Additional thingies: Got 1103<sup>rd</sup> position throughout the valley in JKCET.</div>
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

export default Experience;

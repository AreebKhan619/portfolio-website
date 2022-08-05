import { ExperienceOuterContainer } from "./styled";

import PageTitle from "../../components/shared/PageTitle";
import Timeline from "../../components/shared/Timeline";

import { Biscoe, GECA } from "../../assets/images";
import { GenericObject } from "../../ts";

const Experience = () => {
  const education = [
    {
      duration: "July '17 - Oct '20",
      role: "Bachelors in Computer Science (B.E - C.S.E)",
      institutionName: "Government College of Engineering, Aurangabad",
      institutionURL: "(External Link Indicator)",
      companyLogo: GECA,
      rolesAndResponsibilities: [
        "CGPA: 7.6",
        "Runner up, Web Quest (Techfest event) 2017, 2018",
        "Winner, Spell Your Brain (College event) 2018, 2019",
      ],
    },
    {
      duration: "Nov '13 - Nov '15",
      role: "HSC (12th)",
      institutionName: "Tyndale Biscoe School",
      institutionURL: "(External Link Indicator)",
      companyLogo: Biscoe,
      rolesAndResponsibilities: [
        "Got 120th position state-wide; Resulting in getting a national scholarship for the aforementioned college.",
      ],
    },
    {
      duration: "Nov '02 - Nov '13",
      role: "SSC (10th)",
      institutionName: "Tyndale Biscoe School",
      institutionURL: "(External Link Indicator)",
      companyLogo: Biscoe,
      rolesAndResponsibilities: [
        "Scored 20th position state-wide",
        "Actively participated in extra-curricular activities, represented school in Art Competitions",
      ],
    },
  ];

  return (
    <ExperienceOuterContainer className="inner-padding">
      <PageTitle title={"Education"} />
      <TimelineWrapper education={education} />
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

export default Experience;

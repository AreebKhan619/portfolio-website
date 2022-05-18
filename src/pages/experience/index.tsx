import { ExperienceOuterContainer } from "./styled";

import PageTitle from "../../components/shared/PageTitle";
import Timeline from "../../components/shared/Timeline";

import { CAWStudios, DISQ, Emertech, Freelance } from "../../assets/images";
import { GenericObject } from "../../ts";

const Experience = () => {
  const experience = [
    {
      duration: "Jan 2022 - Present",
      role: "SDE-2",
      company: "ChimpsAtWork Studios / CAW Studios",
      companyURL: "(External Link Indicator)",
      companyLogo: CAWStudios,
      rolesAndResponsibilities: [
        "Managed & set-up monorepo architecture and co-lead the shared code development",
      ],
    },
    {
      duration: "June 2019 - Present",
      role: "Full Stack / Lead Front End Developer",
      company: "Emertech Innovations Pvt. Ltd.",
      companyURL: "(External Link Indicator)",
      companyLogo: Emertech,
      rolesAndResponsibilities: ["Did some things here as well"],
      gallery: [],
    },
    {
      duration: "June 2019 - Present",
      role: "Intern - Front End Developer",
      company: "Emertech Innovations Pvt. Ltd.",
      companyURL: "(External Link Indicator)",
      companyLogo: Emertech,
      rolesAndResponsibilities: ["Did some things here as well"],
    },
    {
      duration: "June 2019 - Apr 2020",
      role: "Innovator",
      company: "Digital Impact Square",
      companyURL: "(External Link Indicator)",
      companyLogo: DISQ,
      rolesAndResponsibilities: ["Did some things here as well"],
      gallery: [],
    },
    {
      duration: "June 2018 - October 2018",
      role: "Android App Developer",
      company: "(Freelance)",
      companyURL: null,
      companyLogo: Freelance,
      rolesAndResponsibilities: ["Did some things here as well"],
    },
  ];

  return (
    <ExperienceOuterContainer>
      <PageTitle title={"Experience"} />
      <TimelineWrapper experience={experience} />
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
  }));

  return <Timeline events={events} />;
};

export default Experience;

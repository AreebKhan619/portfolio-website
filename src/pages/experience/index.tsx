import { ExperienceOuterContainer } from "./styled";

import PageTitle from "../../components/shared/PageTitle";
import Timeline from "../../components/shared/Timeline";

import {
  CAWStudios,
  DISQ,
  Emertech,
  Freelance,
  ReactJS,
} from "../../assets/images";
import { GenericObject } from "../../ts";

const Experience = () => {
  const experience = [
    {
      duration: "Jan '22 - Present",
      role: "SDE-2",
      company: "ChimpsAtWork Studios / CAW Studios",
      companyURL: "(External Link Indicator)",
      companyLogo: CAWStudios,
      rolesAndResponsibilities: [
        {
          text: "BeTagged",
          subPoints: [
            "Managed & set-up monorepo architecture and co-lead the shared code development",
          ],
          link: "https://incom.betagged.co",
          list: [
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: ReactJS,
              link: null,
              title: "AntDesign",
            },
          ],
        },
      ],
    },
    {
      duration: "April '20 - Present",
      role: "Full Stack / Lead Front End Developer",
      company: "Emertech Innovations Pvt. Ltd.",
      companyURL: "(External Link Indicator)",
      companyLogo: Emertech,
      rolesAndResponsibilities: [
        {
          text: "ERP Management Software",
          subPoints: [
            "Led the front-end development for ERP Management Software that helps enterprises in inventory management, invoice generation and throughput estimation.",
          ],
          link: "https://invento.agrotrust.io",
          list: [
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: ReactJS,
              link: null,
              title: "AntDesign Something",
            },
          ],
        },
        {
          text: "Farm to Fork Traceability & Transparency Solution",
          subPoints: [
            "Co-led the development for Farm to Fork Traceability & Transparency Solution",
          ],
          link: "https://qriosity.agrotrust.io/trace/73616879616472692d6661726d737c7c3030303030327c7c3530396535617c7c313034303738",
          list: [
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: ReactJS,
              link: null,
              title: "AntDesign",
            },
          ],
        },
      ],
      gallery: [],
    },
    {
      duration: "June '19 - Apr 2020",
      role: "Intern - Front End Developer",
      company: "Emertech Innovations Pvt. Ltd.",
      companyURL: "(External Link Indicator)",
      companyLogo: Emertech,
      rolesAndResponsibilities: [
        {
          text: "Tripitaka",
          subPoints: [
            "Co-led the development for Farm to Fork Traceability & Transparency Solution",
          ],
          link: "https://qriosity.agrotrust.io/trace/73616879616472692d6661726d737c7c3030303030327c7c3530396535617c7c313034303738",
          list: [
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: ReactJS,
              link: null,
              title: "AntDesign",
            },
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: ReactJS,
              link: null,
              title: "AntDesign",
            },
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: ReactJS,
              link: null,
              title: "AntDesign",
            },
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: ReactJS,
              link: null,
              title: "AntDesign",
            },
          ],
        },
      ],
    },
    {
      duration: "June '19 - Apr 2020",
      role: "Innovator",
      company: "Digital Impact Square",
      companyURL: "(External Link Indicator)",
      companyLogo: DISQ,
      rolesAndResponsibilities: ["Did some things here as well"],
      gallery: [],
    },
    {
      duration: "June '18 - Oct 2018",
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

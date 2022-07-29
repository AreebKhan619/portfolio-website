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
      role: "Software Dev Engineer II",
      company: "ChimpsAtWork [CAW] Studios",
      companyURL: "(External Link Indicator)",
      companyLogo: CAWStudios,
      rolesAndResponsibilities: [
        {
          text: "BeTagged - A Social Media Marketing Platform",
          subPoints: [
            "Managed & set-up monorepo architecture and co-lead the shared code development",
            "Set up the shared logging infrastructure with Segment and error handling with Sentry",
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
        {
          text: "Reeco - A Restaurant Procurement Platform",
          subPoints: [
            "Worked on 3 apps for restaurant management & goods procurement [Back Office, Seller-facing, Buyer-facing]",
            "Implemented optimistic updates and response caching with react-query",
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
      bgColor: "#f8f3e9",
    },
    {
      duration: "April '20 - March '22",
      role: "Full Stack / Lead Front End Developer",
      company: "Emertech Innovations Pvt. Ltd.",
      companyURL: "(External Link Indicator)",
      companyLogo: Emertech,
      rolesAndResponsibilities: [
        {
          text: "Invento - ERP Management Software",
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
          text: "QRiosity - Farm to Fork Traceability & Transparency Solution",
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
        "Sahyadri Farms Website",
      ],
      gallery: [],
      bgColor: "#e2f6ff",
    },
    {
      duration: "June '19 - Apr '20",
      role: "Intern - Front End Developer",
      company: "Emertech Innovations Pvt. Ltd.",
      companyURL: "(External Link Indicator)",
      companyLogo: Emertech,
      rolesAndResponsibilities: [
        {
          text: "DhammaEdicts - Verse",
          subPoints: [
            "Co-led the development for Farm to Fork Traceability & Transparency Solution",
          ],
          link: "https://dhammaedicts-block.com",
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
      bgColor: "#ececee",
    },
    {
      duration: "June '19 - Apr '20",
      role: "Innovator",
      company: "Digital Impact Square",
      companyURL: "(External Link Indicator)",
      companyLogo: DISQ,
      rolesAndResponsibilities: ["Did some things here as well"],
      gallery: [],
      bgColor: "#ffffff",
    },
    {
      duration: "June '18 - Oct '18",
      role: "Android App Developer",
      company: "(Freelance)",
      companyURL: null,
      companyLogo: Freelance,
      rolesAndResponsibilities: ["Did some things here as well"],
      bgColor: "#fdf6f6",
    },
  ];

  return (
    <ExperienceOuterContainer className="inner-padding">
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
    bgColor: exp.bgColor,
  }));

  return <Timeline events={events} />;
};

export default Experience;

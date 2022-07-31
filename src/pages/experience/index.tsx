import { ExperienceOuterContainer } from "./styled";

import PageTitle from "../../components/shared/PageTitle";
import Timeline from "../../components/shared/Timeline";

import {
  CAWStudios,
  DISQ,
  Emertech,
  ExpressJS,
  Freelance,
  MongoDB,
  NodeJS,
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
            "Led the development of Web App for the platform.",
            "Managed & set-up monorepo architecture and co-lead the shared code development.",
            "Set up the shared logging infrastructure with Segment and error handling with Sentry.",
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
            "Contributed to creating highly reusable components between the three apps.",
          ],
          link: "https://buyer-df.reeco.io",
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
            "Created driver that interacts with the local machine to dynamically print labels",
          ],
          link: "https://qriosity.agrotrust.io/trace/73616879616472692d6661726d737c7c3030303030327c7c3530396535617c7c313034303738",
          list: [
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: NodeJS,
              link: null,
              title: "NodeJS",
            },
            {
              icon: MongoDB,
              link: null,
              title: "MongoDB",
            },
            {
              icon: ExpressJS,
              link: null,
              title: "ExpressJS",
            },
          ],
        },
        {
          text: "Sahyadri Farms Website",
          subPoints: [
            "Developed and co-designed the corporate website for Sahyadri Farms",
          ],
          link: "https://sahyadrifarms.com",
        },
        "Trained over 30+ interns in hands-on, interactive bootcamps for ReactJS, going over from the basics to the advanced concepts",
      ],
      // gallery: [],
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
          text: "DhammaEdicts - Verse storage on the blockchain",
          subPoints: [
            `Developed the Web App for storing sacred Buddist "Tripitaka" texts on the blockchain`,
            "Co-implemented the authentication and authorization mechanism",
          ],
          link: "https://dhammaedicts-block.com",
          list: [
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: NodeJS,
              link: null,
              title: "NodeJS",
            },
            {
              icon: MongoDB,
              link: null,
              title: "MongoDB",
            },
            {
              icon: ExpressJS,
              link: null,
              title: "ExpressJS",
            },
          ],
        },
      ],
      bgColor: "#e5e5e9d1",
    },
    {
      duration: "June '19 - Apr '20",
      role: "Innovator",
      company: "Digital Impact Square",
      companyURL: "(External Link Indicator)",
      companyLogo: DISQ,
      rolesAndResponsibilities: [
        "Entrepreneurship training",
        "Participated in team building exercises, presentations, and also their seminars, which illuminated me on how an entrepreneur with an idea can cause an impact on the society.",
        {
          text: "HortiSquare - Farmer Outreach Programme",
          subPoints: [
            "Developed and designed corporate website for the programme",
          ],
          link: "https://www.hortisquare.org/",
        },
      ],
      // gallery: [],
      bgColor: "#e2f6ff",
    },
    {
      duration: "June '18 - Oct '18",
      role: "Freelance Developer",
      company: "",
      companyURL: null,
      companyLogo: Freelance,
      rolesAndResponsibilities: [
        {
          text: "Client Requirement: Software solution for Acupressure Treatment",
          subPoints: [
            "Designed and co-developed Android Application used by patients and practitioners",
            "Patients could schedule appointments, and practitioners could manage reports",
            "Developed and designed corporate website for the client",
          ],
        },
      ],
      bgColor: "#f8f3e9",
    },
  ];

  return (
    <ExperienceOuterContainer className="inner-padding">
      <div className="left-filler-img" />
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

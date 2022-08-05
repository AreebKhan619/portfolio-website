import { ExperienceOuterContainer } from "./styled";

import PageTitle from "../../components/shared/PageTitle";
import Timeline from "../../components/shared/Timeline";

import {
  AntDesign,
  CAWStudios,
  ChakraUI,
  DISQ,
  Emertech,
  ExpressJS,
  Freelance,
  Lerna,
  MongoDB,
  Nivo,
  NodeJS,
  Puppeteer,
  ReactJS,
  Redux,
  Sass,
  Segment,
  Sentry,
  Storybook,
  StyledComponents,
  TanstackQuery,
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
            "Led the development of Web App for the platform from scratch.",
            "Managed & set-up monorepo architecture with Lerna; Co-led the shared code development.",
            "Set up the singular cross-platform logging infrastructure with Segment & Sentry; This infra serves as blueprint for logging for other projects in the organisation as well.",
          ],
          link: "https://incom.betagged.co",
          list: [
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: Redux,
              link: null,
              title: "Redux",
            },
            {
              icon: ChakraUI,
              link: null,
              title: "Chakra UI",
            },
            {
              icon: Lerna,
              link: null,
              title: "Lerna",
            },
            {
              icon: Segment,
              link: null,
              title: "Segment",
            },
            {
              icon: Sentry,
              link: null,
              title: "Sentry",
            },
            {
              icon: StyledComponents,
              link: null,
              title: "styled-components",
            },
            {
              icon: Sass,
              link: null,
              title: "SASS",
            },
          ],
        },
        {
          text: "Reeco - A Restaurant Procurement Platform",
          subPoints: [
            "Worked on 3 apps for restaurant management & goods procurement [Back Office, Seller-facing, Buyer-facing].",
            "Implemented optimistic updates and response caching with TanStack Query, resulting in lesser wait times and better UX.",
            "Contributed to component library for creating highly reusable and flexible components between the three apps with Storybook.",
          ],
          link: "https://buyer-df.reeco.io",
          list: [
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: TanstackQuery,
              link: null,
              title: "Tanstack Query",
            },
            {
              icon: StyledComponents,
              link: null,
              title: "styled-components",
            },
            {
              icon: Nivo,
              link: null,
              title: "nivo",
            },
            {
              icon: Storybook,
              link: null,
              title: "Storybook",
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
              icon: AntDesign,
              link: null,
              title: "AntDesign",
            },
            {
              icon: Redux,
              link: null,
              title: "Redux",
            },
            {
              icon: Sass,
              link: null,
              title: "SASS",
            },
          ],
        },
        {
          text: "QRiosity - Traceability & Transparency Solution",
          subPoints: [
            "Co-led the development for Blockchain-enabled Farm to Fork Traceability & Transparency Solution.",
            "Developed the backbone print driver with NodeJS and interactive dashboard to automate the label printing, providing identity to items and speeding up the process by more than 60%.",
            "Designed & developed 5+ trace screens to provide customised traceability to organisations.",
          ],
          link: "https://qriosity.agrotrust.io/trace/73616879616472692d6661726d737c7c3030303030327c7c3530396535617c7c313034303738",
          list: [
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: Redux,
              link: null,
              title: "Redux",
            },
            {
              icon: NodeJS,
              link: null,
              title: "NodeJS",
            },
            {
              icon: Puppeteer,
              link: null,
              title: "Puppeteer",
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
            {
              icon: Sass,
              link: null,
              title: "SASS",
            },
          ],
        },
        {
          text: "Sahyadri Farms Website",
          subPoints: [
            "Developed and co-designed the corporate website for Sahyadri Farms, India's leading Farmer-Producer-Organisation.",
            "This updated website increased traffic and engagement, resulting in ~10K impressions per month.",
          ],
          link: "https://sahyadrifarms.com",
        },
        "Developed a PWA and an Android App using React Native with i18n support to be used by lesser tech-savvy farmers of Maharashtra, India.",
        "Trained over 30+ interns in hands-on, interactive bootcamps for ReactJS, going over concepts from basics to advanced.",
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
            `Designed and developed the Web App for storing sacred Buddist "Tripitaka" texts on the blockchain.`,
            "Co-implemented the authentication and authorization mechanism with JWT.",
            "Project was inaugrated at Global Buddist Congregation 2019 by Dalai Lama.",
          ],
          link: "https://dhammaedicts-block.com",
          list: [
            {
              icon: ReactJS,
              link: null,
              title: "ReactJS",
            },
            {
              icon: Redux,
              link: null,
              title: "Redux",
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
        "Interacted with tech entrepreneurs in understanding the approaches for problem-solving, translating theoretical solutions for real-world problems into softwares and devicing them",
        "Participated in team building exercises, presentations, and seminars, which illuminated me on how an entrepreneur with an idea can cause an impact on the society.",
        {
          text: "HortiSquare - Farmer Outreach Programme",
          subPoints: [
            "Developed and designed corporate website for the programme",
          ],
          link: "https://www.hortisquare.org",
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
          text: "Software solution for Acupressure Treatment",
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

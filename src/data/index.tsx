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
  ComputerNetworking,
  Flask,
  FramerMotion,
  Git,
  HTMLandCSS,
  JavaScript,
  TDD,
  TypeScript,
  GECA,
  SemanticUI,
  TensorFlow,
  Keras,
  Biscoe,
} from "../assets/images";

export const experienceData = [
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
          "Led the development of Web App for the platform from scratch; written in TS.",
          "Managed & set-up monorepo architecture with Lerna; Co-led the shared code development.",
          "Reviewed code and mentored other devs in the team.",
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
          "Worked on 3 TS-written apps for restaurant management & goods procurement [Back Office, Seller-facing, Buyer-facing].",
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
        text: "QRiosity - Traceability & Transparency Solution",
        subPoints: [
          "Co-led the development for Blockchain-enabled Farm to Fork Traceability & Transparency Solution.",
          "Was geared towards consumable units in Supply Chain",
          "Developed the backbone print driver with NodeJS and interactive dashboard to automate label printing with unique QR codes, providing identity to items and speeding up the process by more than 60%. 5M+ unique traceable QR Codes generated since 2019.",
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

export const projectsList = [
  {
    name: "Portfolio",
    description: "The current website being viewed. Written in TypeScript.",
    skillsList: [
      {
        icon: ReactJS,
        link: null,
        title: "ReactJS",
      },
      {
        icon: StyledComponents,
        link: null,
        title: "styled-components",
      },
      {
        icon: FramerMotion,
        link: null,
        title: "Framer Motion",
      },
    ],
    link: "https://areeb.co.in",
    repoLink: "https://github.com/AreebKhan619/portfolio-website",
  },
  {
    name: "2048",
    description: `Classic game of 2048 in ReactJS. Was addicted to the game, thought to make a version of it myself.`,
    skillsList: [
      {
        icon: ReactJS,
        link: null,
        title: "ReactJS",
      },
      {
        icon: StyledComponents,
        link: null,
        title: "styled-components",
      },
    ],
    link: "https://2048-three.vercel.app",
    repoLink: "https://github.com/AreebKhan619/2048",
  },
  {
    name: "Sticky Notes",
    description: "Draggable sticky notes. My first ReactJS Project.",
    link: "https://stickynotesinreact.netlify.app/",
    repoLink: "https://github.com/AreebKhan619/react-sticky-notes",
  },
  {
    name: "Movies Explorer",
    description:
      "App created using MERN stack which acts like a movie explorer for browsing, managing and playing stored movies, with offline metadata caching (kind of like Plex).",
    skillsList: [
      {
        icon: ReactJS,
        link: null,
        title: "ReactJS",
      },
      {
        icon: ChakraUI,
        link: null,
        title: "Chakra UI",
      },
      {
        icon: NodeJS,
        link: null,
        title: "NodeJS",
      },
      {
        icon: ExpressJS,
        link: null,
        title: "ExpressJS",
      },
    ],
    link: "",
    repoLink: "https://github.com/AreebKhan619/MoviesExplorer",
  },

  {
    name: "Snake game",
    description: "Classic game of Snake in ReactJS",
    link: "",
    repoLink: "https://github.com/AreebKhan619/snake-game",
  },
];

export const certificationsList = [
  {
    name: "Front End Certification [React, Redux, SASS] - freeCodeCamp",
    description: "",
    link: "https://www.freecodecamp.org/certification/fccbd0ae55d-491b-441c-8296-1727843d700b/front-end-development-libraries",
  },
  {
    name: "React - TestDome (Top 10%)",
    description: "",
    link: "https://www.testdome.com/certificates/e9a80f7e75c44a3c967e1d0320c1c34e",
  },
  {
    name: "React - HackerRank",
    description: "",
    link: "https://www.hackerrank.com/certificates/be403f4d3fd3",
  },
  {
    name: "NodeJS, ReactJS, MongoDB - LinkedIn (Top 15%, 30%, 5% resp.)",
    description: "",
    link: "https://in.linkedin.com/in/mareebkhan",
  },
  {
    name: "Computer Networks - NPTEL (Top 5%)",
    description: "",
    link: "https://drive.google.com/file/d/1T5vYLOBtS6OysTNXzKQmYGwDUZ2D1d3_/view?usp=shari",
  },
];

export const skillsList = [
  {
    icon: TypeScript,
    title: "TypeScript",
  },
  {
    icon: JavaScript,
    title: "JavaScript",
  },
  {
    icon: ReactJS,
    title: "ReactJS",
  },
  {
    icon: Redux,
    title: "Redux",
  },
  {
    icon: Git,
    title: "Git",
  },
  {
    icon: ExpressJS,
    title: "Express",
  },
  {
    icon: MongoDB,
    title: "MongoDB",
  },
  {
    icon: NodeJS,
    title: "NodeJS",
  },
  {
    icon: ComputerNetworking,
    title: "Computer Networking",
  },
  {
    icon: HTMLandCSS,
    title: "HTML / CSS",
  },
  {
    icon: Flask,
    title: "Flask",
  },
  {
    icon: TDD,
    title: "TDD",
  },
];

export const educationData = [
  {
    duration: "July '17 - Oct '20",
    role: "Bachelors in Computer Science (B.E - C.S.E)",
    institutionName: "Government College of Engineering, Aurangabad",
    institutionURL: "(External Link Indicator)",
    companyLogo: GECA,
    rolesAndResponsibilities: [
      "GPA: 7.6",
      {
        text: "Final Year Project",
        subPoints: [
          "Plant-based disease detection and prevention system using Machine Learning",
        ],
        link: "https://github.com/AreebKhan619/PlantDiseaseDetection",
        list: [
          {
            icon: ReactJS,
            link: null,
            title: "ReactJS",
          },
          {
            icon: SemanticUI,
            link: null,
            title: "Semantic UI",
          },
          {
            icon: Flask,
            link: null,
            title: "Flask",
          },
          {
            icon: TensorFlow,
            link: null,
            title: "TensorFlow",
          },
          {
            icon: Keras,
            link: null,
            title: "Keras",
          },
        ],
      },
      "Runner up, Web Quest (Techfest event) 2017, 2018",
      "Winner, Spell Your Brain 2018, 2019",
    ],
  },
  {
    duration: "Nov '13 - Nov '15",
    role: "HSC (12th)",
    institutionName: "Tyndale Biscoe School",
    institutionURL: "(External Link Indicator)",
    companyLogo: Biscoe,
    rolesAndResponsibilities: [
      "GPA: 8.6",
      "Got 120th position state-wide; Was awarded a national scholarship in the aforementioned college for my performance.",
    ],
  },
  {
    duration: "Nov '02 - Nov '13",
    role: "SSC (10th)",
    institutionName: "Tyndale Biscoe School",
    institutionURL: "(External Link Indicator)",
    companyLogo: Biscoe,
    rolesAndResponsibilities: [
      "GPA: 9.4",
      "Scored 20th position state-wide",
      "Actively participated in extra-curricular activities, represented school in Art Competitions",
    ],
  },
];
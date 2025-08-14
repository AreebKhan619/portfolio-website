import { Experience } from '@/types/portfolio'

export const experiences: Experience[] = [
  {
    id: 'reeco-2023',
    duration: "Jan '23 - Present",
    role: "Software Development Consultant",
    company: "Reeco",
    companyURL: "https://reeco.io",
    description: [
      {
        text: "Reeco - Mobile App",
        subPoints: [
          "Handled the development of the mobile app from scratch; releasing stable versions for Android and iOS variants.",
          "Overlooked & provided assistance in the development of later versions, adding modules here and there.",
        ],
        link: "https://play.google.com/store/apps/details?id=io.reeco.ocr&hl=en&gl=US",
        technologies: [
          { name: "React Native" },
        ],
      },
      "Recreated the company's website, suggested & added CMS integration; overlooked further development for easier modification.",
      "Participated in regular PR reviews, ensuring consistent code quality throughout the governing repositories.",
    ],
    bgColor: "#e1f7ee",
  },
  {
    id: 'supertokens-2023',
    duration: "Jan '23 - Apr '23",
    role: "SDE Consultant",
    company: "SuperTokens",
    companyURL: "https://supertokens.io",
    description: [
      {
        text: "JWT Encoder / Decoder",
        subPoints: [
          "Developed the JWT Encoder / Decoder module with the ability to check the validity of signature keys.",
          "Supported Algorithms: HS256, HS384, HS512, ES256, RS256, PS256",
        ],
        link: "https://supertokens.com/jwt-encoder-decoder",
      },
      "Maintained and updated the user management dashboard, front-end SDKs the company website; identified & resolved UI bugs to improve site performance.",
      "Demonstrated strong technical skills by modifying legacy code to be compatible with the latest SDK version, and added theming support to the sign-up page.",
      "Worked closely with the UI/UX team to ensure seamless integration of design elements into the final product.",
      "Updated the NodeJS back-end SDK to include session-based authentication in the Sign Up flow, resulting in improved security and user experience.",
    ],
    bgColor: "#fae7fb",
  },
  {
    id: 'caw-studios-2022',
    duration: "Jan '22 - Jan '23",
    role: "Software Dev Engineer II",
    company: "ChimpsAtWork [CAW] Studios",
    companyURL: "https://cawstudios.com",
    description: [
      {
        text: "BeTagged - A Social Media Marketing Platform",
        subPoints: [
          "Led the development of Web App for the platform from scratch; written in TypeScript.",
          "Managed & set-up monorepo architecture with Lerna; Co-led the shared code development.",
          "Reviewed code and mentored other developers in the team.",
          "Set up the singular cross-platform logging infrastructure with Segment & Sentry; This infrastructure serves as blueprint for logging for other projects in the organisation as well.",
        ],
        link: "https://incom.betagged.co",
        technologies: [
          { name: "ReactJS" },
          { name: "Redux" },
          { name: "Chakra UI" },
          { name: "Lerna" },
          { name: "Segment" },
          { name: "Sentry" },
          { name: "styled-components" },
          { name: "SASS" },
        ],
      },
      {
        text: "Reeco - A Restaurant Procurement Platform",
        subPoints: [
          "Worked on 3 TypeScript-written apps for restaurant management & goods procurement [Back Office, Seller-facing, Buyer-facing].",
          "Implemented optimistic updates and response caching with TanStack Query, resulting in lesser wait times and better UX.",
          "Contributed to component library for creating highly reusable and flexible components between the three apps with Storybook.",
        ],
        link: "https://buyer-df.reeco.io",
        technologies: [
          { name: "ReactJS" },
          { name: "Tanstack Query" },
          { name: "styled-components" },
          { name: "nivo" },
          { name: "Storybook" },
        ],
      },
    ],
    bgColor: "#f8f3e9",
  },
  {
    id: 'emertech-2020',
    duration: "April '20 - March '22",
    role: "Full Stack / Lead Front End Developer",
    company: "Emertech Innovations Pvt. Ltd.",
    companyURL: "https://emertech.io",
    description: [
      {
        text: "QRiosity - Traceability & Transparency Solution",
        subPoints: [
          "Co-led the development for Blockchain-enabled Farm to Fork Traceability & Transparency Solution.",
          "Was geared towards consumable units in Supply Chain",
          "Developed the backbone print driver with NodeJS and interactive dashboard to automate label printing with unique QR codes, providing identity to items and speeding up the process by more than 60%. 5M+ unique traceable QR Codes generated since 2019.",
          "Designed & developed 5+ trace screens to provide customised traceability to organisations.",
        ],
        link: "https://qriosity.agrotrust.io/trace/73616879616472692d6661726d737c7c3030303030327c7c3530396535617c7c313034303738",
        technologies: [
          { name: "ReactJS" },
          { name: "Redux" },
          { name: "NodeJS" },
          { name: "Puppeteer" },
          { name: "MongoDB" },
          { name: "ExpressJS" },
          { name: "SASS" },
        ],
      },
      {
        text: "Invento - ERP Management Software",
        subPoints: [
          "Led the front-end development for ERP Management Software that helps enterprises in inventory management, invoice generation and throughput estimation.",
        ],
        link: "https://invento.agrotrust.io",
        technologies: [
          { name: "ReactJS" },
          { name: "AntDesign" },
          { name: "Redux" },
          { name: "SASS" },
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
    bgColor: "#e2f6ff",
  },
]
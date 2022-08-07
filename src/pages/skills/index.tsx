import {
  ChakraUI,
  ExpressJS,
  FramerMotion,
  GitHub,
  NodeJS,
  ReactJS,
  StyledComponents,
} from "../../assets/images";
import LibrariesUsed from "../../components/shared/LibrariesUsed";
import {
  HrefLink,
  PageTitle,
} from "../../components/shared/SharedStyledComponents/styled";
import { SkillsOuterContainer } from "./styled";

const projectsList = [
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

const certificationsList = [
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

const skillsList = [
  {
    name: "TypeScript",
  },
  {
    name: "JavaScript",
  },
  {
    name: "ReactJS",
  },
  {
    name: "Redux",
  },
  {
    name: "Git",
  },
  {
    name: "Express",
  },
  {
    name: "MongoDB",
  },
  {
    name: "NodeJS",
  },
  {
    name: "Computer Networking",
  },
  {
    name: "HTML / CSS",
  },
  {
    name: "Flask",
  },
  {
    name: "TDD",
  },
];

// write something about Projects, Skills and Certifications
// Libraries and UI kits familiar with

const SkillsAndPersonalProjects = () => {
  return (
    <SkillsOuterContainer className="inner-padding" circleColor={"#c8d8ff61"}>
      <div className="left-filler-img" />
      <PageTitle>Skills &amp; Personal Projects</PageTitle>
      <div className="content-container">
        {/* Personal Projects */}
        <div className="bold">Personal Projects</div>
        <ol className="content-list">
          {projectsList.map(
            ({ name, description, skillsList, link, repoLink }, idx) => {
              return (
                <li className="list-item" key={idx}>
                  <div className="name dashed-underline">{name}</div>
                  <div>{description}</div>
                  {link && (
                    <HrefLink href={link}>
                      See it live in action: {link}
                    </HrefLink>
                  )}
                  {repoLink && (
                    <HrefLink href={repoLink}>
                      <img
                        className="repo-icon"
                        src={GitHub}
                        alt={"repository"}
                      />
                    </HrefLink>
                  )}
                  {skillsList && (
                    <div className="libraries-used">
                      <LibrariesUsed list={skillsList} />
                    </div>
                  )}
                </li>
              );
            }
          )}
        </ol>
      </div>

      <div className="content-container">
        <div className="bold">Certifications</div>
        <ol className="content-list">
          {certificationsList.map(({ name, description, link }, idx) => {
            return (
              <li className="list-item" key={idx}>
                <a
                  href={link}
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="name alternate dashed-underline"
                >
                  {name}
                </a>
                <div>{description}</div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="content-container">
        <div className="bold">Skills &amp; Languages</div>
        <ol className="content-list inline">
          {skillsList.map(({ name }, idx) => {
            return (
              <li key={idx} className="list-item">
                <div className="name alternate">{name}</div>
              </li>
            );
          })}
        </ol>
      </div>
    </SkillsOuterContainer>
  );
};

export default SkillsAndPersonalProjects;

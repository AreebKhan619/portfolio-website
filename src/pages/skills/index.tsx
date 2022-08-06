import {
  ChakraUI,
  ExpressJS,
  FramerMotion,
  NodeJS,
  ReactJS,
  StyledComponents,
} from "../../assets/images";
import LibrariesUsed from "../../components/shared/LibrariesUsed";
import PageTitle from "../../components/shared/PageTitle";
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
  },
  {
    name: "2048",
    description:
      "Classic game of 2048 in ReactJS. Mobile and desktop-friendly web app created from scratch.",
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
  },
  {
    name: "Snake game",
    description: "Classic game of Snake in ReactJS",
  },
  {
    name: "Sticky Notes",
    description: "Draggable sticky notes made in ReactJS",
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
    name: "NodeJS, ReactJS, MongoDB - LinkedIn",
    description: "",
    link: "https://in.linkedin.com/in/mareebkhan",
  },
  {
    name: "Computer Networks - NPTEL (Top 5%)",
    description: "",
    link: "https://drive.google.com/file/d/1T5vYLOBtS6OysTNXzKQmYGwDUZ2D1d3_/view?usp=shari",
  },
];

// write something about Projects, Skills and Certifications
// Libraries and UI kits familiar with

const Skills = () => {
  return (
    <SkillsOuterContainer className="inner-padding" circleColor={"#c8d8ff61"}>
      <div className="left-filler-img" />
      <PageTitle title={"Skills & Personal Projects"} />
      <div className="content-container">
        <div className="bold">Personal Projects</div>
        <ol className="content-list">
          {projectsList.map(({ name, description, skillsList }, idx) => {
            return (
              <li className="list-item" key={idx}>
                <div className="name dashed-underline">{name}</div>
                <div>{description}</div>
                <div className="libraries-used">
                  {skillsList && <LibrariesUsed list={skillsList} />}
                </div>
              </li>
            );
          })}
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
        <div className="bold">Skills</div>
        <ol className="content-list">
          <li className="list-item">
            <div className="name alternate">TS</div>
          </li>
        </ol>
      </div>
    </SkillsOuterContainer>
  );
};

export default Skills;

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
      "Classic game of 2048 in ReactJS. Mobile and desktop-friendly web app created from scratch. Used styled components",
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
      "Classic game of 2048 in ReactJS. Mobile and desktop-friendly web app created from scratch. Used styled components",
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
    description:
      "Classic game of 2048 in ReactJS. Mobile and desktop-friendly web app created from scratch. Used styled components",
  },
  {
    name: "Sticky Notes",
    description:
      "Classic game of 2048 in ReactJS. Mobile and desktop-friendly web app created from scratch. Used styled components",
  },
];

const certificationsList = [
  {
    name: "Front End Certification [React, Redux, SASS]",
    description: "Certification provided by freeCodeCamp",
    link: "",
  },
  {
    name: "React",
    description: "Certification provided by HackerRank",
    link: "",
  },
  {
    name: "React",
    description: "Certification provided by TestDome",
    link: "",
  },
  {
    name: "NodeJS, ReactJS, MongoDB",
    description: "Certification provided by LinkedIn",
    link: "",
  },
  {
    name: "Computer Networks",
    description: "Certification provided by NPTEL",
    link: "",
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
                <div className="name alternate dashed-underline">{name}</div>
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

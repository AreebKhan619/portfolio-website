import { ReactJS } from "../../assets/images";
import LibrariesUsed from "../../components/shared/LibrariesUsed";
import PageTitle from "../../components/shared/PageTitle";
import { SkillsOuterContainer } from "./styled";

const projectsList = [
  {
    name: "Portfolio",
    description:
      "Classic game of 2048 in ReactJS. Mobile and desktop-friendly web app created from scratch. Used styled components",
    skillsList: [
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
        icon: ReactJS,
        link: null,
        title: "AntDesign",
      },
      {
        icon: ReactJS,
        link: null,
        title: "ReactJS",
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
        icon: ReactJS,
        link: null,
        title: "AntDesign",
      },
      {
        icon: ReactJS,
        link: null,
        title: "ReactJS",
      },
    ],
  },
  {
    name: "Snake game",
    description:
      "Classic game of 2048 in ReactJS. Mobile and desktop-friendly web app created from scratch. Used styled components",
    skillsList: [
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
    ],
  },
  {
    name: "Sticky Notes",
    description:
      "Classic game of 2048 in ReactJS. Mobile and desktop-friendly web app created from scratch. Used styled components",
    skillsList: [
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
    ],
  },
];

const certificationsList = [
  {
    name: "Redux SASS",
    description: "Certification provided by freeCodeCamp",
    link: "",
  },
  {
    name: "Redux SASS",
    description: "Certification provided by freeCodeCamp",
    link: "",
  },
  {
    name: "Redux SASS",
    description: "Certification provided by freeCodeCamp",
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
      <div className="personal-projects-container">
        <div className="bold">Personal Projects</div>
        <ol className="projects-list">
          {projectsList.map(({ name, description, skillsList }, idx) => {
            return (
              <li className="project" key={idx}>
                <div className="name dashed-underline">{name}</div>
                <div>{description}</div>
                <div className="libraries-used">
                  <LibrariesUsed list={skillsList} />
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="certifications-container">
        <div className="bold">Certifications</div>
        <ol className="certifications-list">
          {certificationsList.map(({ name, description, link }, idx) => {
            return (
              <li className="project" key={idx}>
                <div className="name alternate dashed-underline">{name}</div>
                <div>{description}</div>
              </li>
            );
          })}
        </ol>
      </div>
    </SkillsOuterContainer>
  );
};

export default Skills;

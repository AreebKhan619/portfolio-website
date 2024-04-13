import { SkillContainer } from "./styled";
import {
  ReactJS,
  Redux,
  NodeJS,
  ExpressJS,
  MongoDB,
} from "../../../assets/images";
import React, { FC } from "react";

interface SkillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
}

const SkillsPossessed = () => {
  const rightLeftVal = `min(var(--padding-x), 2rem)`;

  const leftStyle = {
    left: rightLeftVal,
    transform: `translateX(-50%)`,
  };

  const rightStyle = {
    right: rightLeftVal,
    transform: `translateX(50%)`,
  };

  const skills = [
    {
      name: "Redux",
      imgUri: Redux,
      style: { top: "10%", ...rightStyle, backgroundColor: "#e2d5f7" },
    },
    {
      name: "MongoDB",
      imgUri: MongoDB,
      style: { top: "30%", ...leftStyle, backgroundColor: "#f2e3d5" },
    },
    {
      name: "Express",
      imgUri: ExpressJS,
      style: { top: "50%", ...rightStyle, backgroundColor: "#e3ecf4" },
    },
    {
      name: "React JS",
      imgUri: ReactJS,
      style: { top: "70%", ...leftStyle, backgroundColor: "#e1f6f9" },
    },
    {
      name: "NodeJS",
      imgUri: NodeJS,
      style: { top: "87%", ...rightStyle, backgroundColor: "#b2ecb4" },
    },
  ];

  return (
    <>
      {skills.map((skill, idx) => (
        <Skill className="skill" key={idx} style={skill.style}>
          <>
            <img className="icon" src={skill.imgUri} alt={skill.name} />
            {skill.name}
          </>
        </Skill>
      ))}
    </>
  );
};

const Skill: FC<SkillProps> = ({ children, ...rest }) => {
  return <SkillContainer {...rest}>{children}</SkillContainer>;
};

export default SkillsPossessed;

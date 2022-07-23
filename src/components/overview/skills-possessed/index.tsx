import { SkillContainer } from "./styled";
import {
  ReactJS,
  Redux,
  NodeJS,
  ExpressJS,
  MongoDB,
} from "../../../assets/images";
import React, { FC } from "react";
import { useMaxWidthQuery } from "../../../hooks/useMediaQuery";
import { breakpoints } from "../../../assets/styles/breakpoints";

interface SkillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
}

const SkillsPossessed = () => {
  const isSmallerDisplay = useMaxWidthQuery(breakpoints.tablet);
  const multiplier = isSmallerDisplay ? 2 : 1;

  const right = `-${10 * multiplier}%`;
  const left = `-${20 * multiplier}%`;

  const skills = [
    {
      name: "Redux",
      imgUri: Redux,
      style: { top: "10%", right, backgroundColor: "#e2d5f7" },
    },
    {
      name: "MongoDB",
      imgUri: MongoDB,
      style: { top: "30%", left, backgroundColor: "#f2e3d5" },
    },
    {
      name: "Express",
      imgUri: ExpressJS,
      style: { top: "50%", right, backgroundColor: "#e3ecf4" },
    },
    {
      name: "React JS",
      imgUri: ReactJS,
      style: { top: "70%", left, backgroundColor: "#e1f6f9" },
    },

    {
      name: "NodeJS",
      imgUri: NodeJS,
      style: { top: "87%", right, backgroundColor: "#b2ecb4" },
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

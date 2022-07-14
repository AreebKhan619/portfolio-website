import { SkillContainer } from "./styled";
import {
  ReactJS,
  Redux,
  NodeJS,
  ExpressJS,
  MongoDB,
} from "../../../assets/images";
import { FC } from "react";

interface SkillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
}

const SkillsPossessed = () => {
  const skills = [
    {
      name: "Redux",
      imgUri: Redux,
      style: { top: "10%", right: "-10%", backgroundColor: "#e2d5f7" },
    },
    {
      name: "MongoDB",
      imgUri: MongoDB,
      style: { top: "30%", left: "-20%", backgroundColor: "#f2e3d5" },
    },
    {
      name: "Express",
      imgUri: ExpressJS,
      style: { top: "50%", right: "-10%", backgroundColor: "#e3ecf4" },
    },
    {
      name: "React JS",
      imgUri: ReactJS,
      style: { top: "70%", left: "-20%", backgroundColor: "#e1f6f9" },
    },

    {
      name: "NodeJS",
      imgUri: NodeJS,
      style: { top: "87%", right: "-10%", backgroundColor: "#b2ecb4" },
    },
  ];

  return (
    <>
      {skills.map((skill, idx) => (
        <Skill key={idx} style={skill.style}>
          <>
            <img
              src={skill.imgUri}
              style={{ width: "2em", marginRight: 5 }}
              alt={skill.name}
            />
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

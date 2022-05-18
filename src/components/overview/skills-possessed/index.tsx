import { SkillContainer } from "./styled";
import { ReactJS, Redux, NodeJS } from "../../../assets/images";
import { FC } from "react";

interface SkillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
}

const SkillsPossessed = () => {
  const skills = [
    {
      name: "React JS",
      imgUri: ReactJS,
      style: { bottom: "10%", left: "-20%", backgroundColor: "#e1f6f9" },
    },
    {
      name: "Redux",
      imgUri: Redux,
      style: { top: "10%", right: "-10%", backgroundColor: "#e2d5f7" },
    },
    {
      name: "NodeJS",
      imgUri: NodeJS,
      style: { bottom: "25%", right: "-10%", backgroundColor: "#b2ecb4" },
    },
  ];

  return (
    <>
      {skills.map((skill) => (
        <Skill style={skill.style}>
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

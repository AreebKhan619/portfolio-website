import { SkillContainer } from "./styled";
import React, { FC } from "react";

interface SkillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement;
}

const SkillsPossessed = ({ skills }: { skills: any[] }) => {
  return (
    <div>
      {skills.map((skill, idx) => (
        <Skill className="skill" key={idx}>
          <>
            <img className="icon" src={skill?.icon?.url} alt={skill.name} />
            {skill.name}
          </>
        </Skill>
      ))}
    </div>
  );
};

const Skill: FC<SkillProps> = ({ children, ...rest }) => {
  return <SkillContainer {...rest}>{children}</SkillContainer>;
};

export default SkillsPossessed;

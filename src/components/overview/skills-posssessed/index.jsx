import { SkillContainer } from "./styled";

const SkillsPossessed = () => {
  return (
    <>
      <Skill style={{ bottom: "10%", left: "-20%" }}>React JS</Skill>
      <Skill style={{ top: "10%", right: "-10%" }}>Redux</Skill>
      <Skill style={{ bottom: "25%", right: "-10%" }}>NodeJS</Skill>
    </>
  );
};

const Skill = ({ children, ...rest }) => {
  return <SkillContainer {...rest}>{children}</SkillContainer>;
};

export default SkillsPossessed;

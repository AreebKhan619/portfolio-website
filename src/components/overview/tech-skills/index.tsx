import { SkillCapsule, TechSkillsContainer } from "./styled";

const TechSkillsList = ({ skills }: { skills: string[] }) => {
  return (
    <TechSkillsContainer>
      {skills.map((el, idx) => (
        <SkillCapsule key={idx}>{el}</SkillCapsule>
      ))}
    </TechSkillsContainer>
  );
};

export default TechSkillsList;

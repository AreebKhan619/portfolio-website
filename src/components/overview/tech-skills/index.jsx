import { SkillCapsule, TechSkillsContainer } from "./styled";

const TechSkillsList = () => {
  const skills = [
    "UI/UX Designing",
    "Prototyping",
    "Web Development",
    "Back-end Development",
  ];

  return (
    <TechSkillsContainer>
      {skills.map((el) => (
        <SkillCapsule>{el}</SkillCapsule>
      ))}
    </TechSkillsContainer>
  );
};

export default TechSkillsList;

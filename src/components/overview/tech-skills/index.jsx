import { SkillCapsule, TechSkillsContainer } from "./styled";

const TechSkillsList = () => {
  const skills = [
    "UI/UX Designing",
    "Web Development",
    "Back-end Development",
    "Mobile App Development",
    "Prototyping",
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

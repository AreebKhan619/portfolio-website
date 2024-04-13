import { SkillCapsule, TechSkillsContainer } from "./styled";

const TechSkillsList = () => {
  const skills = [
    "Web Development",
    "Mobile App Development",
    "Back-end Development",
    "Prototyping",
    "UI/UX Designing",
    "Testing & TDD",
  ];

  return (
    <TechSkillsContainer>
      {skills.map((el, idx) => (
        <SkillCapsule key={idx}>{el}</SkillCapsule>
      ))}
    </TechSkillsContainer>
  );
};

export default TechSkillsList;

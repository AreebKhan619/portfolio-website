import { SkillCapsule, TechSkillsContainer } from "./styled";

const TechSkillsList = () => {
  const skills = [
    "UI/UX Designing",
    "Web Development",
    "Back-end Development",
    "Mobile App Development",
    "Prototyping",
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

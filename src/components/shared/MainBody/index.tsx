import { MainBodyContainer } from "./styled";

import Overview from "../../../pages/overview";
import Experience from "../../../pages/experience";
import Education from "../../../pages/education";
import SkillsAndPersonalProjects from "../../../pages/skills";

const MainBody = () => {
  return (
    <MainBodyContainer>
      {/* Routing here */}
      <Overview />
      <Experience />
      <SkillsAndPersonalProjects />
      <Education />
    </MainBodyContainer>
  );
};

export default MainBody;

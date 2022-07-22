import { MainBodyContainer } from "./styled";

import Overview from "../../../pages/overview";
import Experience from "../../../pages/experience";
import Education from "../../../pages/education";
import Skills from "../../../pages/skills";
import Hobbies from "../../../pages/hobbies";

const MainBody = () => {
  return (
    <MainBodyContainer>
      {/* Routing here */}
      <Overview />
      <Experience />
      <Skills />
      <Education />
      <Hobbies />
    </MainBodyContainer>
  );
};

export default MainBody;

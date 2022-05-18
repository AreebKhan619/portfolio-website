import { MainBodyContainer } from "./styled";

import Overview from "../../../pages/overview";
import Experience from "../../../pages/experience";
import Education from "../../../pages/education";

const MainBody = () => {
  return (
    <MainBodyContainer>
      {/* Routing here */}
      <Overview />
      <Experience />
      <Education />
    </MainBodyContainer>
  );
};

export default MainBody;

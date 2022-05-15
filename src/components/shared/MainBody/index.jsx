import { MainBodyContainer } from "./styled";

import Overview from "../../../pages/overview";
import Experience from "../../../pages/experience";

const MainBody = () => {
  return (
    <MainBodyContainer>
      {/* Routing here */}
      <Overview />
      <Experience />
    </MainBodyContainer>
  );
};

export default MainBody;

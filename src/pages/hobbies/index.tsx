import { HobbiesOuterContainer } from "./styled";
import PageTitle from "../../components/shared/PageTitle";

const Hobbies = () => {
  return (
    <HobbiesOuterContainer className="inner-padding">
      <PageTitle title={"Hobbies"} />
      <div>Sketching</div>
    </HobbiesOuterContainer>
  );
};

export default Hobbies;

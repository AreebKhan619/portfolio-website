import Navbar from "../components/shared/Navbar";
import MainBody from "../components/shared/MainBody";
import { OuterContainer } from "./styled";

function App() {
  return (
    <OuterContainer>
      <Navbar />
      <MainBody />
    </OuterContainer>
  );
}

export default App;
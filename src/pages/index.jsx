import Navbar from "../components/shared/Navbar";
import MainBody from "../components/shared/MainBody";
import { OuterContainer } from "./styled";

document.body.style.margin = 0;

function App() {
  return (
    <OuterContainer>
      <Navbar />
      <MainBody />
    </OuterContainer>
  );
}

export default App;

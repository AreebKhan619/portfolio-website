import Navbar from "../components/shared/Navbar";
import MainBody from "../components/shared/MainBody";
import Footer from "../components/shared/Footer";
import { OuterContainer } from "./styled";

function App() {
  return (
    <OuterContainer>
      <Navbar />
      <MainBody />
      <Footer />
    </OuterContainer>
  );
}

export default App;

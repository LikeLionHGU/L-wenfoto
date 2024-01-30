import styled from "styled-components";
import Header from "./components/Header";
import Banner from "./components/Banner";
import GalleryPart from "./components/GalleryPart";
import Footer from "./components/Footer";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

function App() {
  return (
    <Div>
      <Header />
      <Banner />
      <GalleryPart />
      <Footer />
    </Div>
  );
}

export default App;

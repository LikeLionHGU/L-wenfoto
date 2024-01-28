import styled from "styled-components";
import Header from "./components/Header";
import Banner from "./components/Banner";
import GalleryPart from "./components/GalleryPart";

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
    </Div>
  );
}

export default App;

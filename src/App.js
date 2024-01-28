import styled from "styled-components";
import Header from "./components/Header";
import Banner from "./components/Banner";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

function App() {
  return (
    <Div>
      <Header />
      <Banner />
    </Div>
  );
}

export default App;

// 성환
import styled from "styled-components";

const Main = styled.div`
  background-color: #ff9800;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0px;

  font-size: 15px;
`;
const Park = styled.div``;

const Sim = styled.div``;
const Lee = styled.div``;
const Choi = styled.div``;

function Footer() {
  return (
    <Main>
      <img src=".\src\logo\github.png" />
      <Park>박은주</Park>
      <Sim>심성환</Sim>
      <Lee>이한나</Lee>
      <Choi>최예라</Choi>
    </Main>
  );
}

export default Footer;

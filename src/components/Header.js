// 성환
import styled from "styled-components";

const Main = styled.div`
  @font-face {
    font-family: "BienchenSAS-Regular";
    src: url("L-wenfoto/src/font/bienchen-sas/Bienchen a.ttf")
      format("truetype");
    font-weight: normal;
  }
  font-family: "BienchenSAS-Regular";
  font-size: 50px;
  background-color: #ff9800;

  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0px;
  text-align: center;
`;

function Header() {
  return <Main>Löwenfoto</Main>;
}

export default Header;

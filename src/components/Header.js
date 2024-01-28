// 성환
import styled from "styled-components";
import { PRIMARY } from "../styles/palette";

const Main = styled.div`
  font-size: 80px;
  background-color: ${PRIMARY.main};
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-family: Bienchena;
  padding: 30px;

  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

function Header() {
  return <Main>Löwenfoto</Main>;
}

export default Header;

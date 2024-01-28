// 한나
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import profileImg from "../img/myprofile.jpeg";
import hannaImg from "../img/introprofile.jpeg";
import eunjuImg from "../img/박은주.jpg";
import sunghwanImg from "../img/심성환.jpg";
import yeraImg from "../img/최예라.jpg";
import chatteamImg from "../img/chatteam.jpg";
import cuteppImg from "../img/cutepp.jpeg";
import frontendImg from "../img/frontend.jpg";
import likelionImg from "../img/likelion.jpeg";
import shadowImg from "../img/shadow.jpeg";

const BannerDiv = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 60px;
`;
const Card = styled.div`
  width: 250px;
  height: 270px;
  margin-right: 30px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Wrap = styled.div`
  display: flex;
  overflow: hidden;
`;
const rollingAnimation = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(-100%); }
  50.01% { transform: translateX(100%); }
  100% { transform: translateX(0); }
`;
const rollingleft2 = keyframes`
  0% { transition: translateX(0); }
  100% { transform: translateX(-200%); }
`;
const RollingList = styled.div`
  animation: ${rollingAnimation} 60s linear infinite;
  &.clone {
    animation: ${rollingleft2} 60s linear infinite;
  }
`;

const Ul = styled.ul`
  display: flex;
  padding: 0px;
`;
const Li = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const dummyImg = [
  {
    img: { profileImg },
  },
  {
    img: { cuteppImg },
  },
  {
    img: { eunjuImg },
  },
  {
    img: { sunghwanImg },
  },
  {
    img: { likelionImg },
  },
  {
    img: { yeraImg },
  },
  {
    img: { chatteamImg },
  },
  {
    img: { hannaImg },
  },
  {
    img: { frontendImg },
  },
  {
    img: { shadowImg },
  },
];
function Banner() {
  useEffect(() => {
    let roller = document.querySelector(".rolling-list");
    roller.id = "roller1";

    let clone = roller.cloneNode(true);
    clone.id = "roller2";
    document.querySelector(".wrap").appendChild(clone);

    document.querySelector("#roller1").style.left = "0px";
    document.querySelector("#roller2").style.left =
      document.querySelector(".rolling-list ul").offsetWidth + "px";

    roller.classList.add("original");
    clone.classList.add("clone");
  }, []);

  return (
    <BannerDiv>
      <Wrap className="wrap">
        <RollingList className="rolling-list">
          <Ul>
            {dummyImg.map((item, index) => (
              <Li key={index}>
                <Card key={index}>
                  <Image
                    src={Object.values(item.img)[0]}
                    alt={`Image ${index + 1}`}
                  />
                </Card>
              </Li>
            ))}
          </Ul>
        </RollingList>
      </Wrap>
    </BannerDiv>
  );
}

export default Banner;

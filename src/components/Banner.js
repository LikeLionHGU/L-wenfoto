// 한나
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import hannaImg from "../img/이한나.png";
import sunghwanImg from "../img/심성환.jpg";
import eunjuImg from "../img/박은주.jpg";
import yeraImg from "../img/최예라.jpg";
import frontImg1 from "../img/front1.jpeg";
// import frontImg2 from "../img/front2.jpeg";
// import frontImg3 from "../img/front3.jpeg";
import frontImg4 from "../img/front4.jpeg";
import frontImg5 from "../img/front5.jpeg";
// import frontImg6 from "../img/front6.jpg";
// import frontImg7 from "../img/front7.jpeg";
import frontImg8 from "../img/front8.jpg";
// import frontImg9 from "../img/front9.jpeg";
import frontImg10 from "../img/front10.jpeg";
import frontImg11 from "../img/front11.jpeg";

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
    img: { hannaImg },
  },
  {
    img: { sunghwanImg },
  },
  {
    img: { eunjuImg },
  },
  {
    img: { yeraImg },
  },
  {
    img: { frontImg1 },
  },
  // {
  //   img: { frontImg2 },
  // },
  // {
  //   img: { frontImg3 },
  // },
  {
    img: { frontImg4 },
  },
  {
    img: { frontImg5 },
  },
  // {
  //   img: { frontImg6 },
  // },
  // {
  //   img: { frontImg7 },
  // },
  {
    img: { frontImg8 },
  },
  // {
  //   img: { frontImg9 },
  // },
  {
    img: { frontImg10 },
  },
  {
    img: { frontImg11 },
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

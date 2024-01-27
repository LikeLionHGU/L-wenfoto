// 한나
import styled from "styled-components";
import profileImg from "../img/myprofile.jpeg";
import hannaImg from "../img/introprofile.jpeg";
import eunjuImg from "../img/박은주.jpg";
import sunghwanImg from "../img/심성환.jpg";
import yeraImg from "../img/최예라.jpg";

const BannerDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
`;
const Card = styled.div`
  width: 218px;
  height: 272px;
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

const RollingList = styled.div``;

const Ul = styled.ul`
  display: flex;
`;

const dummyImg = [
  {
    img: { profileImg },
  },
  {
    img: { hannaImg },
  },
  {
    img: { eunjuImg },
  },
  {
    img: { sunghwanImg },
  },
  {
    img: { yeraImg },
  },
  {
    img: { yeraImg },
  },
  {
    img: { yeraImg },
  },
  {
    img: { yeraImg },
  },
  {
    img: { profileImg },
  },
  {
    img: { profileImg },
  },
];
function Banner() {
  return (
    <BannerDiv>
      <Wrap>
        <RollingList>
          <Ul>
            {dummyImg.map((item, index) => (
              <Card key={index}>
                <Image
                  src={Object.values(item.img)[0]}
                  alt={`Image ${index + 1}`}
                />
              </Card>
            ))}
          </Ul>
        </RollingList>
      </Wrap>
    </BannerDiv>
  );
}

export default Banner;

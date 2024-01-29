// 은주
import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

const Modal = styled.div`
  /* display: flex; */
  display: block; // ?
  position: relative;
  justify-content: center;
`;

const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  position: fixed; //모달 위치 fix
  bottom: 0; // 모달 위치 - 바닥으로 내림
  left: 0; // 모달 위치 - 왼쪽에 붙임
`;
const ModalBackgroundExit = styled.div`
  height: 5%; // 위에서 5% 떨어진 부분 클릭하면 나가짐
`;
const ModalView = styled.div.attrs((props) => ({ role: "dialog" }))`
  top: 5%; // 위에서 5% 떨어진 위치에
  position: fixed; // 모달 화면 고정시킴
  width: 100%; //너비 100%
  height: 100%; //
  border-radius: 20px;

  background-color: white;
  background-color: #fff9ef;
  overflow-y: auto;

  > hr {
    /* border-top: 1px solid black; */
    border-top: 1px solid #ff9800;
    margin-top: 0px;
    width: 95%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; // responsive 하면 start로,, */
  align-items: center;
  padding: 30px 30px;
  padding-bottom: 0px;
  /* border: 2px solid gray; */
  > span {
    display: flex;
    align-self: flex-start;
    color: gray;
    margin-top: 0px;
    margin-bottom: 10px;
  }

  > .close-btn {
    // 나가는 버튼
    color: black;
    font-size: 50px;
    height: 40px;
    width: 40px;
    position: absolute; //부모를 기준으로 맞춰서 위치 지정
    top: 5px;
    right: 0px;
    cursor: pointer;
    transition: 0.1s;
  }
  > .close-btn:hover {
    color: #ff9800;
  }
`;

const ModalTitleUser = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > h1 {
    justify-content: flex-start;
    width: 70%;
    overflow-wrap: break-word;
    margin: 0;
    margin-bottom: 10px;
  }
  > h3 {
    align-self: flex-end; // 아이템 스스로가 해당 flex의 끝에 가도록 align
    margin-bottom: 10px;
    margin-left: 10px;

    /* border: 1px solid red; */
    font-weight: 300;
    /* flex-direction: column; */ // responsive로...
  }
`;
const ModalImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px; // 나중에 width만 넣어서 각 사진 비율로 모달에 넣을 수 있도록 함.
  margin: auto;
  margin-bottom: 20px; // 이미지 끼리 간격
  width: 70%;
  // 이미지 넣을 곳 확인용 ... //
  /* background-color: black; */
  color: white;
  border-radius: 10px;
  font-size: 50px;
`;
const ModalImg = styled.img`
  height: 100%;
`;
const ModalText = styled.p`
  /* display: flex;
  align-items: center; */

  font-size: 20px;
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
  /* border: 2px solid red; */
`;
const ModalFooter = styled.div`
  //모달에 푸터 만들어서 공간 넣음(스크롤이 끝까지 안 돼서)
  display: block;
  height: 40px;
`;

function ReadDialog({
  title,
  owner_name,
  text,
  img,
  stateChanger,
  modalState,
}) {
  // const [modal, setModal] = useState(false);

  // const [posts, setPosts] = useState([]);

  // const getPosts = async () => {
  //   const response = await fetch(`https://ll-api.jungsub.com/gallery/list`);
  //   const json = await response.json();
  //   setPosts(json); // API,,,,
  // };
  // console.log(posts);
  // useEffect(() => {
  //   getPosts();
  // }, []);

  // const modalHandler = () => {
  //   setModal(!modal);
  // };

  // function ShowPost({ key, createdAt }) {
  //   // console.log("showing modal");
  //   // console.log(createdAt);
  //   // console.log(img);
  //   // img = "https://ll-api.jungsub.com" + img;
  //   // const createdDate = createdAt.slice(0, 10);
  //   // console.log(createdDate);
  //   console.log("It's false");
  //   return (
  //     <Modal>
  //       <ModalBackground>
  //         <ModalBackgroundExit
  //           onClick={() => stateChanger(false)}
  //         ></ModalBackgroundExit>
  //         {/* <ModalBackgroundExit></ModalBackgroundExit> */}
  //         <ModalView className="modal-view">
  //           <ModalHeader>
  //             <span>{/* <em>{createdDate}</em> */}</span>
  //             {/* <div className="close-btn" onClick={setIsOpened(false)}> */}
  //             <div className="close-btn" onClick={() => stateChanger(false)}>
  //               &times;
  //             </div>
  //             <ModalTitleUser>
  //               {/* <h1>TEST This is a Test</h1> */}
  //               <h1>{title}</h1>
  //               <h3>{owner_name}</h3>
  //               {/* <h3>User_name</h3> */}
  //             </ModalTitleUser>
  //           </ModalHeader>
  //           <hr />
  //           <ModalImgDiv>
  //             <ModalImg src={img}></ModalImg>
  //           </ModalImgDiv>
  //           {/* <ModalText>
  //             Lorem Ipsum bla blaads kdf dkaie gi lllopdlf dka ieddsdadsf eni
  //             dniu nitda wivth bla bla Lorem Ipsum bla blaads kdf dkaie gi
  //             lllopdlf dka ieddsdadsf eni dniu nitda wivth bla bla Lorem Ipsum
  //             bla blaads kdf dkaie gi lllopdlf dka ieddsdadsf eni dniu nitda
  //             wivth bla bla Lorem Ipsum bla blaads kdf dkaie gi lllopdlf dka
  //             ieddsdadsf eni dniu nitda wivth bla bla v Lorem Ipsum bla blaads
  //             kdf dkaie gi lllopdlf dka ieddsdadsf eni dniu nitda wivth bla bla
  //             viewv Lorem Ipsum bla blaads kdf dkaie gi lllopdlf dka ieddsdadsf
  //             eni dniu nitda wivth bla bla v Lorem Ipsum bla blaads kdf dkaie gi
  //             lllopdlf dka ieddsdadsf eni dniu nitda wivth bla bla Lorem Ipsum
  //             bla blaads kdf dkaie gi lllopdlf dka ieddsdadsf eni dniu nitda
  //             wivth bla bla v
  //           </ModalText> */}
  //           <ModalText>{text}</ModalText>
  //           <ModalFooter />
  //         </ModalView>
  //       </ModalBackground>
  //     </Modal>
  //   );
  // }
  console.log(title);
  return (
    <div>
      {modalState ? (
        <div className="modal">
          <Modal>
            <ModalBackground>
              <ModalBackgroundExit
                onClick={() => stateChanger(false)}
              ></ModalBackgroundExit>
              {/* <ModalBackgroundExit></ModalBackgroundExit> */}
              <ModalView className="modal-view">
                <ModalHeader>
                  <span>{/* <em>{createdDate}</em> */}</span>
                  {/* <div className="close-btn" onClick={setIsOpened(false)}> */}
                  <div
                    className="close-btn"
                    onClick={() => stateChanger(false)}
                  >
                    &times;
                  </div>
                  <ModalTitleUser>
                    {/* <h1>TEST This is a Test</h1> */}
                    <h1>{title}</h1>
                    <h3>{owner_name}</h3>
                    {/* <h3>User_name</h3> */}
                  </ModalTitleUser>
                </ModalHeader>
                <hr />
                <ModalImgDiv>
                  <ModalImg src={img}></ModalImg>
                </ModalImgDiv>
                {/* <ModalText>
              Lorem Ipsum bla blaads kdf dkaie gi lllopdlf dka ieddsdadsf eni
              dniu nitda wivth bla bla Lorem Ipsum bla blaads kdf dkaie gi
              lllopdlf dka ieddsdadsf eni dniu nitda wivth bla bla Lorem Ipsum
              bla blaads kdf dkaie gi lllopdlf dka ieddsdadsf eni dniu nitda
              wivth bla bla Lorem Ipsum bla blaads kdf dkaie gi lllopdlf dka
              ieddsdadsf eni dniu nitda wivth bla bla v Lorem Ipsum bla blaads
              kdf dkaie gi lllopdlf dka ieddsdadsf eni dniu nitda wivth bla bla
              viewv Lorem Ipsum bla blaads kdf dkaie gi lllopdlf dka ieddsdadsf
              eni dniu nitda wivth bla bla v Lorem Ipsum bla blaads kdf dkaie gi
              lllopdlf dka ieddsdadsf eni dniu nitda wivth bla bla Lorem Ipsum
              bla blaads kdf dkaie gi lllopdlf dka ieddsdadsf eni dniu nitda
              wivth bla bla v
            </ModalText> */}
                <ModalText>{text}</ModalText>
                <ModalFooter />
              </ModalView>
            </ModalBackground>
          </Modal>
        </div>
      ) : (
        <div>NO MODAL</div>
      )}
    </div>
  );
}

export default ReadDialog;

// 여기서 사과 사진을 클릭하면 사과 사진을 모달에 출력해야 하는데
// 가장 마지막에 들어있는 데이터들만 현재 나오는 상태라서

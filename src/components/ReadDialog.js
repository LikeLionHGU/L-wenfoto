// 은주
import { useEffect, useState } from "react";
import styled from "styled-components";
import dummy from "./data.json";

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
  bottom: 0;
  left: 0;
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
  /* background-color: #fff9ef; */
  background-color: white;
  overflow-y: auto;

  > hr {
    border-top: 1px solid black;
    margin-top: 0px;
    width: 95%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between; // responsive 하면 start로,,
  align-items: center;
  padding: 40px 40px;
  padding-bottom: 0px;
  /* border: 2px solid gray; */
  > h1 {
    display: flex;
    overflow-wrap: break-word;
    margin: 0;
    margin-bottom: 10px;
  }
  > h3 {
    display: flex;
    margin-bottom: 10px;
    margin-left: 10px;
    align-self: flex-end; // 아이템 스스로가 해당 flex의 끝에 가도록 align
    /* border: 1px solid red; */
    font-weight: 300;
    /* flex-direction: column; */ // responsive로...
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

function ReadDialog() {
  const [modal, setModal] = useState(false);
  //   const [posts, setPosts] = useState([]);

  //   const getPosts = async () => {
  //     const response = await fetch(`http://localhost:3000/data.json`);
  //     const json = await response.json();
  //     setPosts(json.dummy.posts); // API,,,,
  //   };
  //   useEffect(() => {
  //     getPosts();
  //   }, []);

  const modalHandler = () => {
    setModal(!modal);
  };

  function ShowPost({ key, title, username, text, img }) {
    console.log("showing modal");
    return (
      <Modal>
        <ModalBackground>
          <ModalBackgroundExit onClick={modalHandler}></ModalBackgroundExit>
          <ModalView>
            <ModalHeader>
              <div className="close-btn" onClick={modalHandler}>
                &times;
              </div>
              <h1>{title}</h1>
              <h3>{username}</h3>
            </ModalHeader>
            <hr />
            <ModalImgDiv>
              <ModalImg src={img}></ModalImg>
            </ModalImgDiv>

            <ModalText>{text}</ModalText>
            <ModalFooter />
          </ModalView>
        </ModalBackground>
      </Modal>
    );
  } // 포스트 보여줌

  return (
    <div>
      {modal ? (
        <div className="modal">
          console.log(dummy);
          {dummy.map((post) => (
            <ShowPost // props를 넘겨줘서 자식 컴포넌트에서도 사용할 수 있도록 함!
              key={post.id} // key를 가져야함...child
              username={post.username}
              title={post.title}
              img={post.img}
              text={post.text}
            />
          ))}
        </div>
      ) : (
        <div>
          <button onClick={modalHandler}>MODAL</button>
        </div>
      )}
    </div>
  );
}

export default ReadDialog;

// 성환
import * as React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useEffect, useState, useRef } from "react";

const Input = styled.input`
  font-size: 15px;
  border: 0;
  border-radius: 10px;
  outline: none;
  padding-left: 10px;
  background-color: #fff3e0;
  /* 밑줄
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1; */

  padding: 10px;
  width: 350px;
  border-radius: 10px;
`;
const Name = styled.div`
  padding-bottom: 20px;
`;
const Pw = styled.div`
  padding-bottom: 20px;
`;
const Title = styled.div`
  padding-bottom: 20px;
`;
const ImgName = styled.input`
  width: 307px;
  padding: 4px;
  font-size: 15px;
  background-color: #fff3e0;

  border: 1px solid #ebebeb;
  border-radius: 0.25em;
  color: #999;
`;
const ImgBtn = styled.label`
  font-size: 15px;
  padding: 3px;
  background: #ff9800;
  color: white;
  cursor: pointer;
  border-radius: 0.25em;
  border: 1px solid #f57c00;
  border-bottom: 3px solid #f57c00;
`;
const RealBtn = styled.input`
  // 화면에서 보이지 않도록 함
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
const InputImg = styled.div`
  object-fit: cover;
`;
const Preview = styled.div`
  padding-top: 10px;
  width: auto;
  height: 300px;
  /* border: 1px solid gray; */
`;
const Content = styled.div`
  padding-bottom: 10px;
`;
const Buttons = styled.div`
  padding-top: 5px;
  display: flex;
  justify-content: flex-end;
`;
const Send = styled.button`
  background: #ff9800;
  padding: 5px 15px;
  border: none;
  border-radius: 10px;
  border: 1px solid #f57c00;
  border-bottom: 3px solid #f57c00;
  color: white;
`;
const Cancel = styled.button`
  padding: 5px 15px;
  border: none;
  border-radius: 10px;
  margin-right: 20px;
  border: 1px solid #c0c0c0;
  border-bottom: 3px solid #c0c0c0;
`;

function AddDialog() {
  // 이미지
  const [file, setFile] = useState({});
  const imageUpload = (e) => {
    const imageTpye = e.target.files[0].type.includes("image");
    const videoTpye = e.target.files[0].type.includes("video");
    console.log(e.target.files[0].name);
    setFile({
      url: URL.createObjectURL(e.target.files[0]),
      name: e.target.files[0].name,
      image: imageTpye,
      video: videoTpye,
    });
  };
  // console.log(file.url);
  //모달
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    if (modalIsOpen) {
      file.url = undefined;
      file.name = undefined;
    }
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <button onClick={handleModal}>Modal Open</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        ariaHideApp={false}
        style={{
          content: {
            // 모달 부분
            width: "370px",
            height: "80%",
            zIndex: "150",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "20px",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            justifyContent: "center",
            padding: "3%",
            // display: "flex",
            overflow: "hidden",
          },
          overlay: {
            // 모달 바깥 부분
            backgroundColor: " rgba(0, 0, 0, 0.4)",
            width: "100%",
            height: "100vh",
            zIndex: "10",
            position: "fixed",
            top: "0",
            left: "0",
            overflow: "hidden",
          },
        }}
      >
        <Name>
          <Input name="name" placeholder="Name" required />
        </Name>
        <Pw>
          <Input name="password" placeholder="Password" required />
        </Pw>
        <Title>
          <Input name="title" placeholder="Title" />
        </Title>
        <Content>
          <textarea
            name="content"
            placeholder="Content"
            style={{
              fontSize: "15px",
              border: "0",
              borderRadius: "10px",
              outline: "none",
              paddingLeft: "10px",
              backgroundColor: "#FFF3E0",

              resize: "none",
              width: "352px",
              borderRadius: "10px",
              padding: "10px",
            }}
            rows={"10"}
          />
        </Content>
        <InputImg>
          <ImgName
            placeholder="파일 이름"
            value={file.name}
            disabled="disabled"
          />
          <ImgBtn htmlFor="ex_filename">업로드</ImgBtn>
          <RealBtn
            type="file"
            id="ex_filename"
            onChange={imageUpload}
            required
          />
          <Preview>
            {file.image && ( // 이미지가 존재하면 실행
              <img
                src={file.url}
                style={{ objectFit: "cover", maxWidth: "100%", height: "100%" }}
              />
            )}
            {file.video && <video src={file.url} controls width="100%" />}
          </Preview>
        </InputImg>

        <Buttons>
          <Cancel onClick={handleModal}>취소</Cancel>
          <Send type="submit">추가</Send>
        </Buttons>
      </Modal>
    </>
  );
}
export default AddDialog;

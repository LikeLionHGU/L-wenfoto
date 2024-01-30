// 성환
import * as React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useEffect, useState, useRef } from "react";

const Input = styled.input`
  /* border-left-width: 0;
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

const InputImg = styled.div`
  object-fit: cover;
`;
const Preview = styled.div`
  width: auto;
  height: 300px;
  /* border: 1px solid gray; */
`;
const Content = styled.div`
  padding-bottom: 20px;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
`;
const Send = styled.div``;
const Cancel = styled.div`
  padding-right: 20px;
`;

function AddDialog() {
  // 이미지
  const [file, setFile] = useState({});
  const imageUpload = (e) => {
    const imageTpye = e.target.files[0].type.includes("image");
    const videoTpye = e.target.files[0].type.includes("video");

    setFile({
      url: URL.createObjectURL(e.target.files[0]),
      image: imageTpye,
      video: videoTpye,
    });
  };

  //모달
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    if (modalIsOpen) {
      file.url = undefined;
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
              resize: "none",
              width: "352px",
              borderRadius: "10px",
              padding: "10px",
            }}
            rows={"10"}
          />
        </Content>
        <InputImg>
          <input type="file" onChange={imageUpload} required />
          <Preview>
            {file.image && (
              <img
                src={file.url}
                style={{ objectFit: "cover", maxWidth: "100%", height: "100%" }}
              />
            )}
            {file.video && <video src={file.url} controls width="100%" />}
          </Preview>
        </InputImg>

        <Buttons>
          <Cancel>
            <button onClick={handleModal}>취소</button>
          </Cancel>
          <Send>
            <button type="submit">추가</button>
          </Send>
        </Buttons>
      </Modal>
    </>
  );
}
export default AddDialog;

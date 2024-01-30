// 성환
import * as React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useEffect, useState, useRef } from "react";

const Name = styled.div``;
const Pw = styled.div``;
const Title = styled.div``;
const WriteInput = styled.input`
  label {
    display: inline-block;
    width: 90px;
    height: 90px;
    background: url("src/assets/icon-add-photo.svg") no-repeat;
    background-position: center;
    border: 1px solid gray;
    border-radius: 10px;
    cursor: pointer;
  }

  display: none;
`;
const Content = styled.div``;

function AddDialog() {
  // 이미지
  // const [postImg, setPostImg] = useState([]);
  // const [previewImg, setPreviewImg] = useState([]);

  // function uploadFile(e) {
  //   let fileArr = e.target.files;
  //   setPostImg(Array.from(fileArr));

  //   let fileRead = new FileReader();
  //   fileRead.onload = function () {
  //     setPreviewImg(fileRead.result);
  //   };

  //   fileRead.readAsDataURL(fileArr[0]);
  // }
  // function handleFileUpload(e) {
  //   let fileArr = e.target.files;
  //   setPostImg(Array.from(fileArr));
  // }
  const [postImg, setPostImg] = useState([]);
  const [previewImg, setPreviewImg] = useState([]);

  function uploadFile(e) {
    let fileArr = e.target.files;
    setPostImg(Array.from(fileArr));

    let fileRead = new FileReader();

    fileRead.onload = function () {
      setPreviewImg(fileRead.result);
    };
    fileRead.readAsDataURL(fileArr[0]);
  }

  //모달
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <button onClick={handleModal}>Modal Open</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        style={{
          content: {
            // 모달 부분
            width: "60%",
            height: "60%",
            zIndex: "150",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "20px",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            justifyContent: "center",
            overflow: "hidden",

            // display: "flex",
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
          <input name="name" placeholder="Name" />
        </Name>
        <Pw>
          <input name="password" placeholder="Password" />
        </Pw>
        <Title>
          <input name="title" placeholder="Title" />
        </Title>
        <WriteInput
          accept=".png, .jpeg, .jpg"
          type="file"
          onChange={uploadFile}
        />
        {previewImg && (
          <img
            src={"src/assets/icon-add-photo.svg"}
            alt="Preview"
            style={{
              width: "100px",

              height: "90px",
              backgroundPosition: "center",
              border: "1px solid ${gray4}",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />
        )}
        <Content>
          <textarea
            name="content"
            placeholder="Content"
            style={{ resize: "none" }}
          />
        </Content>

        {/* <button onClick={handleModal} >close</button> */}
      </Modal>
    </>
  );
}
export default AddDialog;

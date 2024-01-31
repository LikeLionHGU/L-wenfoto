// 성환
import * as React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

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
const InputText = styled.div`
  padding-bottom: 20px;
`;
const ImgName = styled.input`
  width: 260px;
  padding: 5px 10px;
  font-size: 15px;
  background-color: #fff3e0;

  border: 1px solid #ebebeb;
  border-radius: 0.25em;
  color: #999;
`;
const ImgBtn = styled.label`
  font-size: 15px;
  padding: 3px 10px;
  background: #ff9800;
  color: white;
  cursor: pointer;
  border-radius: 0.25em;
  border: 1px solid #f57c00;
  border-bottom: 3px solid #f57c00;
  &:active {
    background: #f57c00;
    border: 1px solid #e65100;
    border-bottom: 3px solid #e65100;
  }
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
  /* object-fit: cover; */
`;
const Preview = styled.div`
  background-color: #ebebeb;
  height: 280px;
  margin-top: 20px;
  margin-bottom: 10px;
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
  &:active {
    background: #f57c00;
    border: 1px solid #e65100;
    border-bottom: 3px solid #e65100;
  }
`;
const Cancel = styled.button`
  padding: 5px 15px;
  border: none;
  border-radius: 10px;
  margin-right: 20px;
  border: 1px solid #c0c0c0;
  border-bottom: 3px solid #c0c0c0;
  &:active {
    background: #e2e2e2;
    border: 1px solid #a9a9a9;
    border-bottom: 3px solid #a9a9a9;
  }
`;

function AddDialog() {
  // 이미지
  const [owner_name, setName] = useState();
  const [owner_pass, setPassword] = useState();
  const [title, setTitle] = useState("");
  const [text, setContent] = useState();
  const [file, setFile] = useState({});
  const [fileUrl, setFileUrl] = useState({});

  const handleName = (e) => {
    setName(e.currentTarget.value); // 빈공간으로 인한 오류
  };
  const handlePassword = (e) => {
    setPassword(e.currentTarget.value);
  };
  const handleTitle = (e) => {
    console.log(e.currentTarget.value);
    setTitle(e.currentTarget.value);
  };
  const handleContent = (e) => {
    setContent(e.currentTarget.value);
  };

  const imageUpload = (e) => {
    if (e.target.files.length !== 0) {
      setFile(e.target.files[0]);
      setFileUrl(e.target.files[0]);
      const imageTpye = e.target.files[0].type.includes("image");
      const videoTpye = e.target.files[0].type.includes("video");

      setFileUrl({
        url: URL.createObjectURL(e.target.files[0]),
        name: e.target.files[0].name,
        image: imageTpye,
        video: videoTpye, // 여기에 문제가 있는듯
      });
    }
  };
  //모달
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    if (modalIsOpen) {
      fileUrl.url = undefined;
      fileUrl.name = undefined;
    }
    setModalIsOpen(!modalIsOpen);
  };

  // api
  const handleSubmit = async (data) => {
    // Form Data
    const formData = new FormData();
    formData.append("owner_name", owner_name);
    formData.append("owner_pass", owner_pass);
    formData.append("title", title);
    formData.append("text", text);
    formData.append("file", file); // file은 이미지 파일 객체입니다.
    // setTitle(data);

    await axios
      .post("https://ll-api.jungsub.com/gallery/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("서버 응답:", response.data);
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });

    data.preventDefault();
    handleModal();
    // return formData; // 추가된 데이터 또는 서버 응답을 반환
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
            height: "730px",
            zIndex: "150",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "20px",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            justifyContent: "center",
            padding: "50px",
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
        <form>
          <InputText>
            <Input
              name="owner_name"
              value={owner_name}
              onChange={handleName}
              placeholder="Name"
              // onKeyDown={handleName}
              required
            />
          </InputText>
          <InputText>
            <Input
              name="owner_pass"
              value={owner_pass}
              placeholder="Password"
              type="password"
              onChange={handlePassword}
              required
            />
          </InputText>
          <InputText>
            <Input
              name="title"
              value={title}
              placeholder="Title"
              onChange={handleTitle}
              required
            />
          </InputText>
          <Content>
            <textarea
              name="text"
              placeholder="Content"
              value={text}
              onChange={handleContent}
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
              value={fileUrl.name}
              disabled="disabled"
            />
            <ImgBtn htmlFor="ex_filename">파일 선택</ImgBtn>
            <RealBtn
              type="file"
              id="ex_filename"
              onChange={imageUpload}
              required
            />
            <Preview>
              {fileUrl.image && ( // 이미지가 존재하면 실행
                <img
                  src={fileUrl.url}
                  style={{ width: "100%", height: "100%" }}
                />
              )}
              {file.video && <video src={file.url} width="100%" />}
            </Preview>
          </InputImg>

          <Buttons>
            <Cancel onClick={handleModal}>취소</Cancel>
            <Send onClick={handleSubmit} type="submit">
              추가
            </Send>
          </Buttons>
        </form>
      </Modal>
    </>
  );
}
export default AddDialog;

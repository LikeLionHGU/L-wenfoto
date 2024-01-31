// 성환
import * as React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useState } from "react";
import axios from "axios";

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 10px;
  cursor: default;
  font-family: TheJamsilLight;
`;

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
  font-family: TheJamsilThin;
`;
const InputText = styled.div`
  padding-bottom: 20px;
  font-family: TheJamsilThin;
`;
const ImgName = styled.input`
  width: 259px;
  padding: 5px 10px;
  font-size: 15px;
  background-color: #fff3e0;

  border: 1px solid #ebebeb;
  border-radius: 0.25em;
  color: #999;
  font-family: TheJamsilThin;
`;
const ImgBtn = styled.label`
  font-size: 15px;
  padding: 3px 10px;
  background: #ff9800;
  color: white;
  cursor: pointer;
  border-radius: 0.25em;
  &:hover {
    background: #f57c00;
  }
  font-family: TheJamsilThin;
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
  font-family: TheJamsilThin;
`;
const InputImg = styled.div`
  /* object-fit: cover; */
`;
const Preview = styled.div`
  color: #d3d3d3;
  background-color: #ebebeb77;
  height: 280px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 23px;
  border-color: #ffb74d;
  border-style: dashed;

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
  font-size: 17px;
  background: #ff9800;
  padding: 5px 18px;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    background: #f57c00;
  }
  font-family: TheJamsilRegular;
`;
const Cancel = styled.button`
  font-size: 17px;
  padding: 5px 18px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    background: #e2e2e2;
  }
  font-family: TheJamsilRegular;
`;

function AddDialog({ open, onClick }) {
  // 이미지
  const [owner_name, setName] = useState();
  const [owner_pass, setPassword] = useState();
  const [title, setTitle] = useState();
  const [text, setContent] = useState();
  const [file, setFile] = useState({});
  const [fileUrl, setFileUrl] = useState({});

  const handleName = (e) => {
    setName(e.currentTarget.value); // 빈공간으로 인한 오류. target을 사용하지 말자.
  };
  const handlePassword = (e) => {
    setPassword(e.currentTarget.value);
  };
  const handleTitle = (e) => {
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

  // api
  const handleSubmit = async (data) => {
    // Form Data
    const formData = new FormData();
    formData.append("owner_name", owner_name);
    formData.append("owner_pass", owner_pass);
    formData.append("title", title);
    formData.append("text", text);
    formData.append("file", file); // file은 이미지 파일 객체입니다.

    data.preventDefault();
    console.log(file);
    if (!owner_name) {
      alert("이름을 입력해주세요!");
    } else if (!owner_pass) {
      alert("비밀번호를 입력해주세요!");
    } else if (!title) {
      alert("제목을 입력해주세요!");
    } else if (!file.name) {
      alert("파일을 업로드해주세요!");
    }

    await axios
      .post("https://ll-api.jungsub.com/gallery/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("서버 응답:", response.data);
        onClick(); // 여기 있어야 이름 없을 때, 안넘어감
      })
      .catch((error) => {
        console.error("에러 발생:", error);
      });
  };
  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={onClick}
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
            borderRadius: "8px",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            justifyContent: "center",
            padding: "30px",
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
        <Title>새 게시물 추가하기</Title>
        <form>
          <InputText>
            <Input
              name="owner_name"
              value={owner_name}
              onChange={handleName}
              placeholder="Name"
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
                padding: "10px",
                fontFamily: "TheJamsilThin",
              }}
              rows={"5"}
            />
          </Content>
          <InputImg>
            <ImgName
              placeholder="File Name"
              value={fileUrl.name}
              disabled="disabled"
            />
            <ImgBtn htmlFor="ex_filename">Select File</ImgBtn>
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
                  alt="previewimage"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                />
              )}
              {file.video && <video src={file.url} width="100%" />}
            </Preview>
          </InputImg>

          <Buttons>
            <Cancel onClick={onClick}>Cancel</Cancel>
            <Send type="submit" onClick={handleSubmit}>
              Add
            </Send>
          </Buttons>
        </form>
      </Modal>
    </>
  );
}
export default AddDialog;

import styled from "styled-components";

const Button = styled.button``;

const Hello = styled.div`
  font-size: 100px;
  color: red;

  &:hover {
    color: black;
  }
  &:active {
    color: blue;
  }
`;

export default function AddDialog() {
  return (
    <>
      <div>
        <Hello>Hi요.</Hello>
        <Button>버튼</Button>
      </div>
    </>
  );
}

//----------------------------------------------------------------
// // 성환
// import * as React from "react";
// import styled from "styled-components";
// import Modal from "react-modal";
// import { useEffect, useState, useRef } from "react";

// const Above = styled.div`
//   /* display: flex;
//   justify-content: space-between; */
// `;
// const Name = styled.div``;
// const Pw = styled.div``;
// const Title = styled.div``;

// const InputImg = styled.div`
//   width: 50%;
//   height: 50%;
// `;
// const Preview = styled.div`
//   border: 1px solid gray;
//   width: 50%;
//   height: 50%;
// `;
// // const WriteInput = styled.input`
// //   label {
// //     display: inline-block;
// //     width: 90px;
// //     height: 90px;
// //     background: url("src/assets/icon-add-photo.svg") no-repeat;
// //     background-position: center;
// //     border: 1px solid gray;
// //     border-radius: 10px;
// //     cursor: pointer;
// //   }

// //   display: none;
// // `;
// const Content = styled.div``;

// function AddDialog() {
//   // 이미지
//   const [file, setFile] = useState({});

//   const imageUpload = (e) => {
//     const imageTpye = e.target.files[0].type.includes("image");
//     const videoTpye = e.target.files[0].type.includes("video");

//     setFile({
//       url: URL.createObjectURL(e.target.files[0]),
//       image: imageTpye,
//       video: videoTpye,
//     });
//   };

//   // const [postImg, setPostImg] = useState([]);
//   // const [previewImg, setPreviewImg] = useState([]);

//   // function uploadFile(e) {
//   //   let fileArr = e.target.files;
//   //   setPostImg(Array.from(fileArr));

//   //   let fileRead = new FileReader();

//   //   fileRead.onload = function () {
//   //     setPreviewImg(fileRead.result);
//   //   };
//   //   fileRead.readAsDataURL(fileArr[0]);
//   // }

//   //모달
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const handleModal = () => {
//     setModalIsOpen(!modalIsOpen);
//   };

//   return (
//     <>
//       <button onClick={handleModal}>Modal Open</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={handleModal}
//         style={{
//           content: {
//             // 모달 부분
//             width: "60%",
//             height: "80%",
//             zIndex: "150",
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             borderRadius: "20px",
//             boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
//             backgroundColor: "white",
//             justifyContent: "center",
//             overflow: "hidden",
//             padding: "50px",
//             // display: "flex",
//           },
//           overlay: {
//             // 모달 바깥 부분
//             backgroundColor: " rgba(0, 0, 0, 0.4)",
//             width: "100%",
//             height: "100vh",
//             zIndex: "10",
//             position: "fixed",
//             top: "0",
//             left: "0",
//             overflow: "hidden",
//           },
//         }}
//       >
//         <Above>
//           <Name>
//             <input name="name" placeholder="Name" style={{ padding: "10px" }} />
//           </Name>
//           <Pw>
//             <input
//               name="password"
//               placeholder="Password"
//               style={{ padding: "10px" }}
//             />
//           </Pw>
//           <Title>
//             <input
//               name="title"
//               placeholder="Title"
//               style={{ padding: "10px" }}
//             />
//           </Title>
//           <Content>
//             <textarea
//               name="content"
//               placeholder="Content"
//               style={{ resize: "none", width: "100%" }}
//               rows={"5"}
//             />
//           </Content>
//           <InputImg>
//             <input type="file" onChange={imageUpload} />
//             <Preview>
//               {file.image && <img src={file.url} width="100%" height="100%" />}
//               {file.video && <video src={file.url} controls width="100%" />}
//             </Preview>
//           </InputImg>

//           {/*
//         이미지
//          <WriteInput
//           accept=".png, .jpeg, .jpg"
//           type="file"
//           onChange={uploadFile}
//         />
//         {previewImg && (
//           <img
//             src={"src/assets/icon-add-photo.svg"}
//             alt="Preview"
//             style={{
//               width: "100px",

//               height: "90px",
//               backgroundPosition: "center",
//               border: "1px solid ${gray4}",
//               borderRadius: "10px",
//               cursor: "pointer",
//             }}
//           />
//         )} */}
//         </Above>

//         {/* <button onClick={handleModal} >close</button> */}
//       </Modal>
//     </>
//   );
// }
// export default AddDialog;

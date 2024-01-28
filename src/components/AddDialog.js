// 성환
import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const All = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const Name = styled.div``;
const Pw = styled.div``;
const Title = styled.div``;
const Content = styled.div``;
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function AddDialog() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "300px" },
      }}
      height={"70%"}
      width={"80%"}
      noValidate
      autoComplete="off"
    >
      <All>
        <Name>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            required
          />
        </Name>
        <Pw>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            required
          />
        </Pw>
        <Title>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            required
          />
        </Title>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
        <Content>
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={5}
            style={{ width: "1015px" }}
          />
        </Content>
      </All>
      <Stack
        direction="row"
        spacing={2}
        style={{
          right: "0",
          // display: "flex", justifyContent: "flex-end"
        }}
      >
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Cancel
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Post
        </Button>
      </Stack>
    </Box>
  );
}

export default AddDialog;

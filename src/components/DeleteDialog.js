// 한나
import { Fragment } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axois from "axios";

export default function DeleteDialog({ open, onClick, id }) {
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClick}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            axois
              .post(`https://ll-api.jungsub.com/gallery/delete/${id}`, formJson)
              .then((data) => {
                console.log("응답", data.data);
                if (data.data.error === "not found or invalid password") {
                  alert("비밀번호가 틀렸습니다!");
                }
              });
            console.log(formJson);

            onClick();
          },
        }}
      >
        <DialogTitle style={{ fontFamily: "TheJamsilRegular" }}>
          삭제하기
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ fontFamily: "TheJamsilLight" }}>
            갤러리를 등록한 본인의 정보를 입력해주세요. 정보를 입력 후 삭제를
            누를 시 해당 갤러리는 삭제됩니다.
          </DialogContentText>
          <TextField
            required
            margin="dense"
            id="name"
            name="owner_name"
            label="업로드한 사람 이름"
            type="text"
            fullWidth
            variant="outlined"
            color="warning"
            style={{ fontFamily: "TheJamsilThin" }}
          />
          <TextField
            required
            margin="dense"
            id="password"
            name="owner_pass"
            label="업로드한 사람 비밀번호"
            type="text"
            fullWidth
            variant="outlined"
            color="warning"
            style={{ fontFamily: "TheJamsilThin" }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClick}
            color="warning"
            style={{ fontFamily: "TheJamsilRegular" }}
          >
            취소
          </Button>
          <Button
            type="submit"
            color="warning"
            style={{ fontFamily: "TheJamsilRegular" }}
          >
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

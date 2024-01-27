// 한나
import { useState, Fragment } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DeleteDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        삭제
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            handleClose();
          },
        }}
      >
        <DialogTitle>삭제하기</DialogTitle>
        <DialogContent>
          <DialogContentText>
            갤러리를 등록한 본인의 정보를 입력해주세요. 정보를 입력 후 삭제를
            누를 시 해당 갤러리는 삭제됩니다.
          </DialogContentText>
          <TextField
            required
            margin="dense"
            id="name"
            name="ownername"
            label="업로드한 사람 이름"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            margin="dense"
            id="password"
            name="ownerpassword"
            label="업로드한 사람 비밀번호"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button type="submit">삭제</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}

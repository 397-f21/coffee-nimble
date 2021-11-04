import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { setData } from "../Utilities/firebase";

const blankForm = () => {
  return {
    name: "",
    score: 0,
    id: -1,
  };
};

export default function EditDialog({ open, members, setOpen }) {
  const [newMember, setNewMember] = useState(blankForm());
  const [hasError, setHasError] = useState(false);

  const validate = () => {
    if (!newMember.name) {
      setHasError(true);
      return false;
    } else {
      setHasError(false);
      return true;
    }
  };

  const handleClose = () => {
    setOpen(false);
    setNewMember(blankForm());
    setHasError(false);
  };

  const handleMemberChange = (event) => {
    const newMember = event.target.value;
    setNewMember((prevState) => ({
      ...prevState,
      ["name"]: newMember,
      ["id"]: members ? Array.from(members).length + 1 : 1,
    }));
  };

  const addMemberDb = async () => {
    if (validate()) {
      try {
        if (!members) {
          await setData(`/members`, [newMember]);
        } else {
          await setData(`/members`, [...members, newMember]);
        }
      } catch (error) {
        console.log(newMember);
        alert(error);
      }
      handleClose();
    }
  };

  return (
    <Dialog data-testid="dialogTestId" open={open} onClose={handleClose}>
      <DialogTitle>Enter New Member</DialogTitle>
      <DialogContent>
        <div id="newTaskForm">
          <TextField
            autoFocus
            value={newMember.name}
            onChange={handleMemberChange}
            label="Name"
            type="text"
            variant="standard"
            error={hasError}
            helperText={hasError ? "Please enter name." : ""}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={addMemberDb}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

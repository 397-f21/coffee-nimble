import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { setData } from "../Utilities/firebase";

// need change based on the database design
const blank = () => {
  return {
    id: -1,
  };
};


export default function EditDialog({ open, id, setOpen }) {
  const [newProject, setNewProject] = useState(blank());
  const [hasError, setHasError] = useState(false);

  const validate = () => {
    if (!id) {
      setHasError(true);
      return false;
    } else {
      setHasError(false);
      return true;
    }
  };

  const handleClose = () => {
    setOpen(false);
    setNewProject(blank());
    setHasError(false);
  };

  const handleProjectChange = (event) => {
    const newProject = event.target.value;
    setNewProject((prevState) => ({
      ...prevState,
      ["id"]: new project,
    }));
  };

  const addProjectDb = async () => {
    if (validate()) {
      try {
        if (!id) {
          await setData(`/${id}`, [newProject]);
        } 
      } catch (error) {
        console.log(newProject);
        alert(error);
      }
      handleClose();
    }
  };

  return (
    <Dialog data-testid="dialogTestId" open={open} onClose={handleClose}>
      <DialogTitle>Enter Project ID</DialogTitle>
      <DialogContent>
        <div id="newTaskForm">
          <TextField
            autoFocus
            value={newProject.id}
            onChange={handleProjectChange}
            label="Name"
            type="text"
            variant="standard"
            error={hasError}
            helperText={hasError ? "Please enter your project." : ""}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={addProjectDb}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

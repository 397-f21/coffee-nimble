import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { setData } from "../Utilities/firebase";
import AddDialog from "./AddDialog";

export default function AddButton({ tasks }) {
  const [open, setOpen] = React.useState(false);

  const handleAddOpen = () => {
    setOpen(true);
  };

  // const addTask = () => {
  //   setTasks((prevState) => [...prevState, newTask].sort((x, y) => x.priority - y.priority));
  //   handleClose();
  // };

  return (
    <div id="addButton">
      <Button variant="outlined" color="secondary" onClick={handleAddOpen}>
        Add new task
      </Button>
      <AddDialog open={open} tasks={tasks} setOpen={setOpen}></AddDialog>
    </div>
  );
}

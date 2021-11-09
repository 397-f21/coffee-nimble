import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddProjectDialog from "./AddProjectDialog";
import TextField from "@mui/material/TextField";


export default function JoinProjectButton({ setCurProj }) {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleAddOpen = () => {
    setCurProj(0);
  };

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setId(newDescription)
  };

  // const addTask = () => {
  //   setTasks((prevState) => [...prevState, newTask].sort((x, y) => x.priority - y.priority));
  //   handleClose();
  // };

  return (
    <div id="addButton">
        <TextField
            autoFocus
            value={id}
            onChange={handleDescriptionChange}
            label="Name"
            type="text"
            variant="standard"
            error={hasError}
            helperText={hasError ? "Please enter name." : ""}
          />
      <Button variant="outlined" color="secondary" onClick={handleAddOpen}>
        Join project
      </Button>
    </div>
  );
}

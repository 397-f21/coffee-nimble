import React from "react";
import Button from "@mui/material/Button";
import AddProjectDialog from "./AddProjectDialog";


export default function AddProject({ setProjectId }) {
  const [open, setOpen] = React.useState(false);

  const handleAddOpen = () => {
    setOpen(true);
  };

  // const addTask = () => {
  //   setTasks((prevState) => [...prevState, newTask].sort((x, y) => x.priority - y.priority));
  //   handleClose();
  // };

  //<AddProjectDialog open={open} setProjectId={setProjectId} setOpen={setOpen}></AddProjectDialog>

  return (
    <div id="addButton">
      <Button variant="outlined" color="secondary" onClick={handleAddOpen}>
        Add new project
      </Button>
    </div>
  );
}

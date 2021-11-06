import React from "react";
import Button from "@mui/material/Button";


export default function AddProject({ id }) {
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
        Add new project
      </Button>
      <AddProjectDialog open={open} id={id} setOpen={setOpen}></AddProjectDialog>
    </div>
  );
}

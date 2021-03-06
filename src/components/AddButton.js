import React from "react";
import Button from "@mui/material/Button";
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
    <div id="addButton" data-cy="addTask">
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleAddOpen}
      >
        Add new task
      </Button>
      <AddDialog open={open} tasks={tasks} setOpen={setOpen}></AddDialog>
    </div>
  );
}

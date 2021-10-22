import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const taskList = [
  {
    description: "create task component",
    difficulty: 3,
    assignees: ["Jake", "Misha"],
    priority: 5,
    completed: false,
  },
  {
    description: "Assign tasks button",
    difficulty: 3,
    assignees: ["Iris", "Carina"],
    priority: 5,
    completed: false,
  },
  {
    description: "Task List",
    difficulty: 3,
    assignees: ["Daniel", "Yijing"],
    priority: 3,
    completed: false,
  },
  {
    description: "login",
    difficulty: 3,
    assignees: ["Jake", "Carina"],
    priority: 2,
    completed: false,
  },
  {
    description: "mood tracking",
    difficulty: 3,
    assignees: ["Misha", "Daniel", "Iris"],
    priority: 1,
    completed: false,
  },
];

export default function AddButton() {
  const [newTask, setNewTask] = useState({
    description: "",
    difficulty: 0,
    assignees: [],
    priority: 0,
    completed: false,
  });
  const [tasks, setTasks] = useState(taskList);
  const [open, setOpen] = React.useState(false);

  const handleAddOpen = ( ) => {
    setOpen(true);
    console.log(tasks);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setNewTask((prevState) => ({
      ...prevState,
      ["description"]: newDescription,
    }));
  };
/*
  const handleDiffcultyChange = (event) => {
    const newDiffcuties = event.target.value;
    setNewDiffcuties((prevState) => ({
      ...prevState,
      ["difficulty"]: newDifficulty,
    }));
  };
*/
  const addTask = () => {
    setTasks((prevState) => [...prevState, newTask]);
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleAddOpen}>
        Add new task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter New Task Information</DialogTitle>
        <DialogContent>
          <div className="addEditModal">
            <TextField
              autoFocus
              //id="name"
              onChange={handleDescriptionChange}
              label="description"
              type="text"
              variant="standard"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addTask}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

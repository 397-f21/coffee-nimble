import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { setData } from "../Utilities/firebase";

const blankForm = () => {
  return {
    description: "",
    difficulty: 1,
    assignees: [],
    priority: 1,
    completed: false,
  }
}

export default function AddButton({tasks}) {

  const [open, setOpen] = React.useState(false);
  const [newTask, setNewTask] = useState(blankForm());

  const handleAddOpen = ( ) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewTask(blankForm());
  };

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setNewTask((prevState) => ({
      ...prevState,
      ["description"]: newDescription,
    }));
  };

  const handleDifficultyChange = (event) => {
    const newDifficulty = event.target.value;
    setNewTask((prevState) => ({
      ...prevState,
      ["difficulty"]: newDifficulty,
    }));
  };

  const handlePriorityChange = (event) => {
    const newPriority = event.target.value;
    setNewTask((prevState) => ({
      ...prevState,
      ["priority"]: newPriority,
    }));
  };

  const addTaskDb = async () => {
    console.log(newTask)
    try {
      if (!tasks) {
        await setData(`/tasks`, [newTask]);
      }
      else {
        await setData(`/tasks`, [...tasks, newTask].sort((x, y) => x.priority - y.priority));
      }
    } catch (error) {
      alert(error);
    }
    handleClose()
  };


  // const addTask = () => {
  //   setTasks((prevState) => [...prevState, newTask].sort((x, y) => x.priority - y.priority));
  //   handleClose();
  // };

  return (
    <div id="addButton">
      <Button 
        variant="outlined" 
        color="secondary"
        onClick={handleAddOpen}>
        Add new task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter New Task Information</DialogTitle>
        <DialogContent>
          <div id="newTaskForm">
            <TextField
              autoFocus
              value={newTask.description}
              onChange={handleDescriptionChange}
              label="Short description of task"
              type="text"
              variant="standard"
              />
            <div id="selects">
              <FormControl fullWidth>
                <InputLabel>Complexity</InputLabel>
                <Select
                  value={newTask.difficulty}
                  label="Complexity"
                  onChange={handleDifficultyChange}
                  >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
                <FormHelperText>1=simple, 3=complex</FormHelperText>
              </FormControl>
              <FormControl fullWidth>

                <InputLabel>Priority</InputLabel>
                <Select
                  value={newTask.priority}
                  label="Priority"
                  onChange={handlePriorityChange}
                  >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
                <FormHelperText>1=urgent, 5=trivial</FormHelperText>
              </FormControl>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addTaskDb}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

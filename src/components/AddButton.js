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


const blankForm = () => {
  return {
    description: "",
    difficulty: 1,
    assignees: [],
    priority: 1,
    completed: false,
  }
}

export default function AddButton({setTasks}) {
  
  //const [tasks, setTasks] = useState(taskList);
  const [open, setOpen] = React.useState(false);
  const [newTask, setNewTask] = useState(blankForm());

  const handleAddOpen = ( ) => {
    setOpen(true);
    //console.log(tasks);
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

  const addTask = () => {
    setTasks((prevState) => [...prevState, newTask].sort((x, y) => x.priority - y.priority));
    handleClose();
  };

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
                <InputLabel>Difficulty</InputLabel>
                <Select
                  value={newTask.difficulty}
                  label="Difficulty"
                  helperText="1 = easy, 3 = hard"
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
                  helperText="1 = high, 5 = low"
                  onChange={handlePriorityChange}
                  >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
                <FormHelperText>1=trivial, 5=urgent</FormHelperText>
              </FormControl>
            </div>
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

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

const blankForm = () => {
  return {
    description: "",
    difficulty: 1,
    assignees: [],
    priority: 1,
    completed: false,
  };
};

export default function AddDialog({ open, tasks, setOpen }) {
  const [newTask, setNewTask] = useState(blankForm());
  const [hasError, setHasError] = useState(false);

  const validate = () => {
    if (!newTask.description) {
      setHasError(true);
      return false;
    } else {
      setHasError(false);
      return true;
    }
  };

  const handleClose = () => {
    setOpen(false);
    setNewTask(blankForm());
    setHasError(false);
  };

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setNewTask((prevState) => ({
      ...prevState,
      description: newDescription,
    }));
  };

  const handleDifficultyChange = (event) => {
    const newDifficulty = event.target.value;
    setNewTask((prevState) => ({
      ...prevState,
      difficulty: newDifficulty,
    }));
  };

  const handlePriorityChange = (event) => {
    const newPriority = event.target.value;
    setNewTask((prevState) => ({
      ...prevState,
      priority: newPriority,
    }));
  };

  const addTaskDb = async () => {
    if (validate()) {
      try {
        if (!tasks) {
          await setData(`/tasks`, [newTask]);
        } else {
          await setData(
            `/tasks`,
            [...tasks, newTask].sort((x, y) => x.priority - y.priority)
          );
        }
      } catch (error) {
        alert(error);
      }
      handleClose();
    }
  };

  return (
    <Dialog data-testid="dialogTestId" open={open} onClose={handleClose}>
      <DialogTitle data-cy="addTaskTitle">
        Enter New Task Information
      </DialogTitle>
      <DialogContent>
        <div id="newTaskForm">
          <TextField
            autoFocus
            inputProps={{ "data-testid": "description" }}
            value={newTask.description}
            onChange={handleDescriptionChange}
            label="Short description of task"
            type="text"
            variant="standard"
            error={hasError}
            helperText={hasError ? "Please enter description." : ""}
            data-cy="taskDescription"
          />
          <div id="selects">
            <FormControl fullWidth>
              <InputLabel>Complexity</InputLabel>
              <Select
                inputProps={{ "data-testid": "difficulty" }}
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
                inputProps={{ "data-testid": "priority" }}
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
        <Button data-testid="addButton" onClick={addTaskDb} data-cy="addButton">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

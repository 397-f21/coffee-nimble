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
import assignTasks from '../Utilities/assign';


// const taskList = [
//   {
//     description: "create task component",
//     difficulty: 3,
//     assignees: ["Jake", "Misha"],
//     priority: 5,
//     completed: false,
//   },
//   {
//     description: "Assign tasks button",
//     difficulty: 3,
//     assignees: ["Iris", "Carina"],
//     priority: 5,
//     completed: false,
//   },
//   {
//     description: "Task List",
//     difficulty: 3,
//     assignees: ["Daniel", "Yijing"],
//     priority: 3,
//     completed: false,
//   },
//   {
//     description: "login",
//     difficulty: 3,
//     assignees: ["Jake", "Carina"],
//     priority: 2,
//     completed: false,
//   },
//   {
//     description: "mood tracking",
//     difficulty: 3,
//     assignees: ["Misha", "Daniel", "Iris"],
//     priority: 1,
//     completed: false,
//   },
// ];


export default function AssignButton({members,tasks}) {
  
  console.log(tasks);
  console.log(members);
  return (
    <div id="assignButton">
      <Button variant="outlined" onClick={() => assignTasks(members,tasks)}>
        Assign new task
      </Button>
    </div>
  );
}

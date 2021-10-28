import React from "react";
import Button from "@mui/material/Button";
import assignTasks from '../Utilities/assign';

export default function AssignButton({ members,tasks, setTasks, setMems }) {
  
  const handleClick = () => {
    console.log(members)
    let taskAndMems = assignTasks(members,tasks)
    setTasks(taskAndMems.tasks.sort((x, y) => x.priority - y.priority))
    setMems(taskAndMems.mems)
  }

  const isUnassigned = (task) => task.assignees.length === 0;
  // returns false if tasks array is empty or if all tasks are assigned.
  // returns true if there are tasks in the array that are unassigned.
  const unassignedTasks = tasks.some(isUnassigned)  

  return (
    <div id="assignButton">
      <Button 
        variant={unassignedTasks ? "contained" : "outlined"}
        color="secondary"
        onClick={() => handleClick()}>
        Assign new tasks
      </Button>
    </div>
  );
}

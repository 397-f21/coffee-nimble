import React from "react";
import Button from "@mui/material/Button";
import assignTasks from '../Utilities/assign';

export default function AssignButton({members,tasks, setTasks, setMems, variant}) {
  
  const handleClick = () => {
    console.log(members)
    let taskAndMems = assignTasks(members,tasks)
    setTasks(taskAndMems.tasks)
    setMems(taskAndMems.mems)
  }

  return (
    <div id="assignButton">
      <Button 
        variant={variant} 
        color="secondary"
        onClick={() => handleClick()}>
        Assign new tasks
      </Button>
    </div>
  );
}

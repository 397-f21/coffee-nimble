import React from "react";
import Button from "@mui/material/Button";
import assignTasks from "../Utilities/assign";
import { setData } from "../Utilities/firebase";

export default function AssignButton({ members, tasks, loading }) {
  // const handleClick = () => {
  //   let taskAndMems = assignTasks(members,tasks);
  //   setTasks(taskAndMems.tasks.sort((x, y) => x.priority - y.priority));
  //   setMems(taskAndMems.mems);
  // }

  const handleClickDb = async () => {
    let taskAndMems = assignTasks(members, tasks);
    try {
      await setData(
        `/tasks`,
        taskAndMems.tasks.sort((x, y) => x.priority - y.priority)
      );
      await setData(`/members`, taskAndMems.mems);
    } catch (error) {
      alert(error);
    }
  };

  const isUnassigned = (task) => task.assignees === undefined;
  // returns false if tasks array is empty or if all tasks are assigned.
  // returns true if there are tasks in the array that are unassigned.
  const unassignedTasks =
    !loading && tasks !== null && tasks.some(isUnassigned);
  const nonemptyTeam = members !== undefined && members != null
  
  return (
    <div id="assignButton">
      <Button
        variant={unassignedTasks && nonemptyTeam ? "contained" : "outlined"}
        color="secondary"
        onClick={() => handleClickDb()}
      >
        Assign new tasks
      </Button>
    </div>
  );
}

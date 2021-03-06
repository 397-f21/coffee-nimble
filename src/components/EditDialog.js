import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { setData } from "../Utilities/firebase";
import $ from "jquery";
window.$ = $;

const blankForm = () => {
  return {
    name: "",
    score: 0,
    id: -1,
  };
};

export default function EditDialog({ open, members, tasks, setOpen }) {
  const [newMember, setNewMember] = useState(blankForm());
  const [hasError, setHasError] = useState(false);

  const validate = () => {
    if (!newMember.name) {
      setHasError(true);
      return false;
    } else {
      setHasError(false);
      return true;
    }
  };

  const handleClose = () => {
    setOpen(false);
    setNewMember(blankForm());
    setHasError(false);
  };
  const getNextNum = (members) => {
    let lastMember = members.slice(-1)[0];
    console.log(lastMember['id']);
    let lastIdx = lastMember['id'];
    return parseInt(lastIdx.slice(6))



  };
  const handleMemberChange = (event) => {
    const newMember = event.target.value;
    setNewMember((prevState) => ({
      ...prevState,
      name: newMember,
      id: members ? `member${getNextNum(Array.from(members)) + 1}` : `member${1}`,
    }));
  };

  const afterDeletionTasks = (tasks, name) => {
    let newTasks = [];
    if (tasks !== null) {
      for (let task of tasks) {
        let newTask = {
          description: task.description,
          difficulty: task.difficulty,
          priority: task.priority,
          completed: task.completed,
          assignees: [],
        };
        if (task.assignees) {
          for (let person of task.assignees) {
            if (person.name !== name) {
              let newAssignee = {
                name: person.name,
                score: person.score,
                id: person.id,
              };
              newTask.assignees.push(newAssignee);
            }
          }
        }
        newTasks.push(newTask);
      }
      console.log(newTasks);
    }
    return newTasks;
  };

  const deleteMemberDb = async () => {
    if (members.length > 0) {
      try {
        let potentialDelete = members.filter(
          (mem) => mem.name === newMember.name
        );
        if (potentialDelete.length > 0) {
          await setData(`/members`, [
            ...members.filter((mem) => mem.name !== newMember.name),
          ]);
          await setData(`/tasks`, afterDeletionTasks(tasks, newMember.name));
        } else {
          alert(`Member with name ${newMember.name} not found`);
        }
      } catch (error) {
        alert(error);
      }
      // handleClose();
    }
    $("#nameField").val("");
  };
  const addMemberDb = async () => {
    if (validate()) {
      try {
        if (!members) {
          await setData(`/members`, [newMember]);
        } else {
          await setData(`/members`, [...members, newMember]);
        }
      } catch (error) {
        console.log(newMember);
        alert(error);
      }
      // handleClose();
    }
    $("#nameField").val("");
  };

  return (
    <Dialog data-testid="dialogTestId" open={open} onClose={handleClose}>
      <DialogTitle>Edit Members</DialogTitle>
      <DialogContent>
        <div id="curMembers" data-cy="result">
          {members ? (
            members.map((listitem) => (
              <li key={listitem.name} className={listitem.id}>
                {listitem.name}
              </li>
            ))
          ) : (
            <div></div>
          )}
        </div>
        <div id="newTaskForm" data-cy="addname">
          <TextField
            id="nameField"
            autoFocus
            //value={newMember.name}
            onChange={handleMemberChange}
            label="Member name"
            type="text"
            variant="standard"
            error={hasError}
            helperText={hasError ? "Please enter name." : ""}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <div id="addButton" data-cy="confirm">
          <Button color="success" onClick={addMemberDb}>Add</Button>
        </div>
        <div id='deleteButon' data-cy='deleteMemberButton'>
          <Button color="error" onClick={deleteMemberDb}>Delete</Button>
        </div>
        <div id='doneButton' data-cy='doneEditingButton'>
          <Button onClick={handleClose}>Done</Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}

import React from "react";
import Button from "@mui/material/Button";
import EditDialog from "./EditDialog";

export default function EditMembersButton({ members, tasks }) {
  const [open, setOpen] = React.useState(false);

  const handleAddOpen = () => {
    setOpen(true);
  };
  
  const isUnadded = (members) => members === undefined;

  const unaddedmems =
     members !== null && isUnadded(members);

  return (
    <div id="EditMembersButton" data-cy="addnewmember">
      <Button variant={unaddedmems ? "contained" : "outlined"}
      color="primary" 
      size="small"
      data-testid="add"
      onClick={handleAddOpen}>
        edit team members
      </Button>
      <EditDialog open={open} members={members} tasks = {tasks} setOpen={setOpen}></EditDialog>
    </div>
  );
}

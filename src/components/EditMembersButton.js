import React from "react";
import Button from "@mui/material/Button";
import EditDialog from "./EditDialog";

export default function EditMembersButton({ members, tasks }) {
  const [open, setOpen] = React.useState(false);

  const handleAddOpen = () => {
    setOpen(true);
  };


  return (
    <div id="EditMembersButton">
      <Button variant="contained" color="secondary" onClick={handleAddOpen}>
        Edit members
      </Button>
      <EditDialog open={open} members={members} tasks = {tasks} setOpen={setOpen}></EditDialog>
    </div>
  );
}

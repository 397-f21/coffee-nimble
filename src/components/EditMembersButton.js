import React from "react";
import Button from "@mui/material/Button";
import EditDialog from "./EditDialog";

export default function EditMembersButton({ members }) {
  const [open, setOpen] = React.useState(false);

  const handleAddOpen = () => {
    setOpen(true);
  };


  return (
    <div id="EditMembersButton">
      <Button variant="contained" color="secondary" onClick={handleAddOpen}>
        Add members
      </Button>
      <EditDialog open={open} members={members} setOpen={setOpen}></EditDialog>
    </div>
  );
}

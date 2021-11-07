import React from "react";
import Button from "@mui/material/Button";
import EditDialog from "./EditDialog";

export default function EditMembersButton({ members}) {
  const [open, setOpen] = React.useState(false);

  const handleAddOpen = () => {
    setOpen(true);
  };
  
  const isUnadded = (members) => members === undefined;

  const unaddedmems =
     members !== null && isUnadded(members);

  return (
    <div id="EditMembersButton">
      <Button variant={unaddedmems ? "contained" : "outlined"}
      color="secondary" 
      data-testid="add"
      onClick={handleAddOpen}>
        Add members
      </Button>
      <EditDialog open={open} members={members} setOpen={setOpen}></EditDialog>
    </div>
  );
}

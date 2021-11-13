import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

export default function JoinProjectButton({ setCurProj }) {
  const [id, setId] = useState("");

  const handleAddOpen = () => {
    setCurProj(0);
  };

  const handleDescriptionChange = (event) => {
    const newDescription = event.target.value;
    setId(newDescription);
  };

  return (
    <div className="join-project" >
      <TextField
        autoFocus
        label="Project ID"
        type="text"
        variant="standard"
      />
      <div className="join-existing" data-cy="joinButton">
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleAddOpen}
        >
          Join existing project
        </Button>
      </div>
      <Typography variant="h6" className="message">
        or
      </Typography>
      <TextField
        autoFocus
        value={id}
        onChange={handleDescriptionChange}
        label="Project ID"
        type="text"
        variant="standard"
      />
      <Button variant="outlined" color="success" onClick={handleAddOpen}>
        create new project
      </Button>
    </div>
  );
}

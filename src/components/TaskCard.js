import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import ControlledCheckbox from "./ControlledCheckBox";
import "../styles.css";

const task = () => {
  return {
    description: "create task component",
    difficulty: 3,
    assignees: ["Jake", "Misha"],
    priority: 5,
    completed: false,
  };
};

export default function TaskCard() {
  return (
    <div>
      <Card className="card" sx={{ minWidth: 275 }}>
        <CardContent className="cardContent">
          <Typography variant="h5" component="div">
            {task().description}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {task().assignees.map((listitem) => (
              <li class="assignees">{listitem}</li>
            ))}
          </Typography>
          {/* <Checkbox checked={task().completed} onChange={handleChange} /> */}
          <ControlledCheckbox></ControlledCheckbox>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

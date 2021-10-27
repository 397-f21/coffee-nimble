import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ControlledCheckbox from "./ControlledCheckBox";
import "../App.css";
// import $ from "jquery";
// window.$ = $;

export default function TaskCard({ task }) {

  return (
    <div>
      <Card className="card" sx={{ width: 330 }}>
        <CardContent className="cardContent">
          <Typography className="cardDescription" variant="h6">
            {task.description}
          </Typography>
          <Typography variant="subtitle1" component="div" sx={{ width: 75 }}>
            {task.assignees.map((listitem) => (
              <li className={listitem.name} key={listitem.name}>{listitem.name}</li>
            ))}
          </Typography>       
          {/* <Checkbox checked={task().completed} /> */}
          <ControlledCheckbox isChecked={task.completed}></ControlledCheckbox>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

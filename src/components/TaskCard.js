import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ControlledCheckbox from "./ControlledCheckBox";
import "../App.css";
// import $ from "jquery";
// window.$ = $;

export default function TaskCard({ task, index }) {
  return (
    <div>
      <Card className="card" sx={{ width: 330 }}>
        <CardContent className="cardContent">
          <Typography
            data-testid="description"
            className="cardDescription"
            variant="h6"
          >
            {task.description}
          </Typography>
          <div data-testid="priority" className="priority">
            <Typography variant="overline" sx={{ fontSize: 6 }}>
              PRIORITY
            </Typography>
            <Typography variant="button">{task.priority}</Typography>
          </div>
          <div className="assignees">
            <Typography variant="subtitle1" component="div" sx={{ width: 75 }}>
              {"assignees" in task ? (
                task.assignees.map((listitem) => (
                  <li key={listitem} className={listitem}>
                    {listitem}
                  </li>
                ))
              ) : (
                <div></div>
              )}
            </Typography>
          </div>
          {/* <Checkbox checked={task().completed} /> */}
          <ControlledCheckbox isChecked={task.completed} index={index}></ControlledCheckbox>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

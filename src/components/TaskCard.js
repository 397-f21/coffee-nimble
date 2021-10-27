import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ControlledCheckbox from "./ControlledCheckBox";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import "../App.css";
// import $ from "jquery";
// window.$ = $;

export default function TaskCard({ task }) {

  return (
    <div>
      <Card className="card" sx={{ minWidth: 330 }}>
        <CardContent className="cardContent">
          <Typography className="cardDescription" variant="h6">
            {task.description}
          </Typography>
          <Stack direction="column" spacing={1}>
            {task.assignees.map((name) => ( 
              <Chip 
                key={name}
                label={name}
                id={name}
                sx={{ height: '80%' }}
                />
            ))}
          </Stack>          
          {/* <Checkbox checked={task().completed} /> */}
          <ControlledCheckbox isChecked={task.completed}></ControlledCheckbox>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

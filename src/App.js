import './App.css';
import AddButton from './components/AddButton';
import TaskCard from "./components/TaskCard";
import AssignButton from './components/assignButton';
import Typography from "@mui/material/Typography";
import React from 'react';
import { useData } from './Utilities/firebase.js';

function App() {
  const [dbTasks, tasksLoading, tasksError] = useData('/tasks');
  const [dbMembers, membersLoading, membersError] = useData('/members'); 

  return (
    <div className="App">
      <header className="App-header">
        <Typography className="title" variant="h2">
          nimble
        </Typography>
        <Typography className="title" variant="h5">
          tasks for team coffee
        </Typography>
      </header>
      <div>
        <div className="button-group">
          <AddButton
            tasks={dbTasks} />
          <AssignButton 
            members={dbMembers} 
            tasks={dbTasks} 
            loading={tasksLoading}/>
        </div>
        <div className="task-list">
          {tasksError ?
            <Typography className="title" variant="h5">{tasksError}</Typography>
            : tasksLoading ?
            <Typography className="title" variant="h6">tasks loading...</Typography>
            : dbTasks === null ?
            <Typography className="title" variant="h5">add tasks!</Typography>
            : dbTasks.map((task, index) => ( 
              <TaskCard
              task={task}
              index={index}
              key={task.description}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;

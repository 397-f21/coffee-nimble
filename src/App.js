import './App.css';
import AddButton from './components/AddButton';
import TaskCard from "./components/TaskCard";
import AssignButton from './components/assignButton';
import Typography from "@mui/material/Typography";
import React, { useState} from 'react';
import { useData } from './Utilities/firebase.js';

let taskList = [
  // {
  //     "description": "create task component",
  //     "difficulty": 1,
  //     "assignees": [
  //     ],
  //     "priority": 5,
  //     "completed": false
  // },
  // {
  //     "description": "Assign tasks button",
  //     "difficulty": 2,
  //     "assignees": [
  //     ],
  //     "priority": 5,
  //     "completed": false
  // },
  // {
  //     "description": "task List",
  //     "difficulty": 3,
  //     "assignees": [
  //     ],
  //     "priority": 3,
  //     "completed": false
  // },
  // {
  //     "description": "login",
  //     "difficulty": 3,
  //     "assignees": [

  //     ],
  //     "priority": 2,
  //     "completed": false
  // },
  // {
  //     "description": "mood tracking",
  //     "difficulty": 1,
  //     "assignees": [

  //     ],
  //     "priority": 1,
  //     "completed": false
  // },
]

let mems = [
  {
      "name": "Jake",
      "score": 0
  }, 
  {
      "name": "Misha",
      "score": 0
  }, 

  {
      "name": "Carina",
      "score": 0
  },
  {
      "name": "Iris",
      "score": 0
  }, 
  {
      "name": "Daniel",
      "score": 0
  }, 
  {
      "name": "Yijing",
      "score": 0
  }
]

function App() {
  const [scores, loading0, error0] = useData('/scores');
  const [dbTasks, loading1, error1] = useData('/tasks');
  const [dbMembers, loading2, error2] = useData('/teammates'); 
  const [tasks, setTasks] = useState(taskList);
  const [members, setMems] = useState(mems);
  console.log(scores)
  console.log(dbTasks)
  console.log(dbMembers)

  if (error1) return <h1>{error1}</h1>;
  if (loading1) return <h1>Loading tasks...</h1>;

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
            tasks={dbTasks}
            setTasks={setTasks}/>
          <AssignButton 
            members={members} 
            tasks={tasks} 
            setTasks={setTasks} 
            setMems={setMems} />
        </div>
        <div className="task-list">
          {tasks.map((task) => ( 
            <TaskCard
              task={task}
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

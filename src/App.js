import logo from './logo.svg';
import './App.css';
import AddButton from './components/AddButton';
import TaskCard from "./components/TaskCard";
import AssignButton from './components/assignButton';
import React, { useState} from 'react';


let taskList = [
  {
      "description": "create task component",
      "difficulty": 1,
      "assignees": [
      ],
      "priority": 5,
      "completed": false
  },
  {
      "description": "Assign tasks button",
      "difficulty": 2,
      "assignees": [
      ],
      "priority": 5,
      "completed": false
  },
  {
      "description": "Task List",
      "difficulty": 3,
      "assignees": [

      ],
      "priority": 3,
      "completed": false
  },
  {
      "description": "login",
      "difficulty": 3,
      "assignees": [

      ],
      "priority": 2,
      "completed": false
  },
  {
      "description": "mood tracking",
      "difficulty": 1,
      "assignees": [

      ],
      "priority": 1,
      "completed": false
  },
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
  const [tasks, setTasks] = useState(taskList);
  const [members, setMems] = useState(mems);
  console.log(members)
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="body">
        <AssignButton members={members} tasks={tasks} setTasks={setTasks} setMems={setMems}/>
        <AddButton
          setTasks={setTasks}
        />
      </div>
      {console.log(tasks)}
      {Object.values(tasks).map((task) => ( 
      <TaskCard
        task={task}
      />
      ))
      }
    </div>
  );
}

export default App;

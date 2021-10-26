import logo from './logo.svg';
import './App.css';
import AddButton from './components/AddButton';
import TaskCard from "./components/TaskCard";
import React, { useState} from 'react';

const taskList = [
  {
    description: "create task component",
    difficulty: 3,
    assignees: ["Jake", "Misha"],
    priority: 5,
    completed: false,
  },
  {
    description: "Assign tasks button",
    difficulty: 3,
    assignees: ["Iris", "Carina"],
    priority: 5,
    completed: false,
  },
  {
    description: "Task List",
    difficulty: 3,
    assignees: ["Daniel", "Yijing"],
    priority: 3,
    completed: false,
  },
  {
    description: "login",
    difficulty: 3,
    assignees: ["Jake", "Carina"],
    priority: 2,
    completed: false,
  },
  {
    description: "mood tracking",
    difficulty: 3,
    assignees: ["Misha", "Daniel", "Iris"],
    priority: 1,
    completed: false,
  },
];



function App() {
  const [tasks, setTasks] = useState(taskList);


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="body">
        <AddButton
          setTasks={setTasks}
        />
      </div>
      {Object.values(tasks).map((task) => ( 
      <TaskCard>
        task={task}
      </TaskCard>
      ))
      }
    </div>
  );
}

export default App;

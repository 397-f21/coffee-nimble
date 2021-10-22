import React, { useState } from "react";
import Button from "@mui/material/Button";

const taskList = [
    {
        "description": "create task component",
        "difficulty": 3,
        "assignees": [
            "Jake",
            "Misha"
        ],
        "priority": 5,
        "completed": false
    },
    {
        "description": "Assign tasks button",
        "difficulty": 3,
        "assignees": [
            "Iris",
            "Carina"
        ],
        "priority": 5,
        "completed": false
    },
    {
        "description": "Task List",
        "difficulty": 3,
        "assignees": [
            "Daniel",
            "Yijing"
        ],
        "priority": 3,
        "completed": false
    },
    {
        "description": "login",
        "difficulty": 3,
        "assignees": [
            "Jake",
            "Carina"
        ],
        "priority": 2,
        "completed": false
    },
    {
        "description": "mood tracking",
        "difficulty": 3,
        "assignees": [
            "Misha",
            "Daniel",
            "Iris"
        ],
        "priority": 1,
        "completed": false
    }
]


export default function AddButton() {
    const [tasks, setTasks] = useState(taskList);
    const [addOpen, setAddOpen] = React.useState(false);

    const handleAddOpen = (event) => {
        setAddOpen(true);
        console.log(tasks);
    };

    const handleAddClose = () => {
        setAddOpen(false);
    };

    return(
        <Button variant="outlined" onClick={handleAddOpen}>
        Add new task
      </Button>
    )
    
}
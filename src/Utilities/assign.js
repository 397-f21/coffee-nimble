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

let tasks = [
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
    },
]

export function assignTasks(members, tasks){
    let newTasks = tasks.filter(task => task.assignees.length === 0).sort((a, b) => a.difficulty > b.difficulty)

    newTasks.map(task => {
        members.sort((a, b) => a.score > b.score)

        members.map((mem, index) => {
            if(index < task.difficulty){
                task.assignees.push(mem)
                mem.score += task.difficulty
            }
        })
        
    })
    return [tasks.filter(task => task.assignees.length > 0), ...newTasks]
}

assignTasks(mems, tasks)
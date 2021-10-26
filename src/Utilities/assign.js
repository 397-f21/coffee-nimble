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
        "assignees": [],
        "priority": 5,
        "completed": false
    },
    {
        "description": "Assign tasks button",
        "difficulty": 3,
        "assignees": [],
        "priority": 5,
        "completed": false
    },
    {
        "description": "Task List",
        "difficulty": 3,
        "assignees": [],
        "priority": 3,
        "completed": false
    },
    {
        "description": "login",
        "difficulty": 3,
        "assignees": [],
        "priority": 2,
        "completed": false
    },
    {
        "description": "mood tracking",
        "difficulty": 3,
        "assignees": [],
        "priority": 1,
        "completed": false
    },
]

const assignTasks = (members, tasks) => {
    let newTasks = tasks.filter(task => task.assignees.length === 0).sort((a, b) => a.difficulty > b.difficulty);
    newTasks.forEach(task => {
        members.sort((a, b) => a.score > b.score)

        members.forEach((mem, index) => {
            if(index < task.difficulty){
                task.assignees.push(mem)
                members[index].score += task.difficulty
            }
        })
        
    })
    console.log(JSON.stringify({tasks: [tasks.filter(task => task.assignees.length > 0), ...newTasks], mems: members}));
    return {tasks: [tasks.filter(task => task.assignees.length > 0), ...newTasks], mems: members}
}

export default assignTasks;
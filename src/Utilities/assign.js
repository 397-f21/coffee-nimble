import Heap  from 'heap-js';

let mems = [
    {
        'name': 'Jake',
        'score': 0
    },
    {
        'name': 'Misha',
        'score': 0
    },
    {
        'name': 'Carina',
        'score': 0
    },
    {
        'name': 'Iris',
        'score': 0
    },
    {
        'name': 'Daniel',
        'score': 0
    },
    {
        'name': 'Yijing',
        'score': 0
    }
]
let tasks = [
    {
        'description': 'create task component',
        'difficulty': 3,
        'assignees': [],
        'priority': 5,
        'completed': false
    },
    {
        'description': 'Assign tasks button',
        'difficulty': 3,
        'assignees': [],
        'priority': 5,
        'completed': false
    },
    {
        'description': 'Task List',
        'difficulty': 3,
        'assignees': [],
        'priority': 3,
        'completed': false
    },
    {
        'description': 'login',
        'difficulty': 3,
        'assignees': [],
        'priority': 2,
        'completed': false
    },
    {
        'description': 'mood tracking',
        'difficulty': 3,
        'assignees': [],
        'priority': 1,
        'completed': false
    },
]
const customPriorityComparator = (a, b) => a.score - b.score;
const assignTasks = (members, tasks) => {
    const priorityQueue = new Heap(customPriorityComparator);
    priorityQueue.init(members);
    let filteredTasks = tasks.filter(task => task.assignees.length === 0).sort((a, b) => a.difficulty > b.difficulty);
    let newTasks = JSON.parse(JSON.stringify(filteredTasks));
    let tmpMembers = [];
    newTasks.forEach(task => {
       for (let i = 0; i < task.difficulty; i++){
        let curMember = priorityQueue.pop();
        curMember.score += task.difficulty;
        tmpMembers.push(curMember);
        task.assignees.push(curMember);
       }
       for (let member of tmpMembers){
        priorityQueue.push(member);
       }
    });
    let updatedMembers = [];
    let idx = 0;
    while (priorityQueue.length !== 0){
        updatedMembers.push(priorityQueue.pop());
    };
    // console.log(JSON.stringify({tasks: [tasks.filter(task => task.assignees.length > 0), ...newTasks], mems: updatedMembers}));
    return {tasks: [...tasks.filter(task => task.assignees.length > 0), ...newTasks], mems: updatedMembers}
}
export default assignTasks;
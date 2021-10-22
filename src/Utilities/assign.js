export function assignTasks(members, tasks){
    tasks.filter(task => task.assignees.length === 0).sort((a, b) => a.difficulty > b.difficulty)
    tasks.map(task => {
        members.sort((a, b) => a.score > b.score)

        task.assignees.push(members.slice(task.difficulty-1))
    })
}
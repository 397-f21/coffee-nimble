import Heap from "heap-js";

const customPriorityComparator = (a, b) => a.score - b.score;

const assignTasks = (members, tasks) => {
  const priorityQueue = new Heap(customPriorityComparator);
  priorityQueue.init(members);
  let filteredTasks = tasks
    .filter((task) => task.assignees === undefined)
    .sort((a, b) => a.difficulty > b.difficulty);
  let newTasks = JSON.parse(JSON.stringify(filteredTasks));
  let tmpMembers = [];
  newTasks.forEach((task) => {
    task.assignees = [];
    for (let i = 0; i < task.difficulty; i++) {
      let curMember = priorityQueue.pop();
      curMember.score += task.difficulty;
      tmpMembers.push(curMember);
      // task.assignees.push(curMember);
      task.assignees.push(curMember); // since we don't need to store the assignees' scores at the time of assignment, right?
    }
    for (let member of tmpMembers) {
      priorityQueue.push(member);
    }
  });
  let updatedMembers = [];
  while (priorityQueue.length !== 0) {
    updatedMembers.push(priorityQueue.pop());
  }
  // console.log(JSON.stringify({tasks: [tasks.filter(task => task.assignees.length > 0), ...newTasks], mems: updatedMembers}));
  return {
    tasks: [
      ...tasks.filter((task) => task.assignees !== undefined),
      ...newTasks,
    ],
    mems: updatedMembers,
  };
};
export default assignTasks;

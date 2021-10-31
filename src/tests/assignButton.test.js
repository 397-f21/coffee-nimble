import React,{useState} from 'react';
import { render, cleanup, fireEvent,getBy } from '@testing-library/react';
import AssignButton from '../components/assignButton'
import App from '../App'

afterEach(cleanup);

it("App loads with initial state of empty task list", () => {
  const { container } = render(<App />);
  const tasksValue = getByTestId(container, "tasks");
  expect(tasksValue).toBe([]);
});

it('Updates score for members and assignees for tasks', () => {
  let mems = [
    {
        "name": "Jake",
        "score": 0
    }
  ]

let taskList = [
{
  "description": "create task component",
  "difficulty": 1,
  "assignees": [
  ],
  "priority": 5,
  "completed": false
}]

  const { getByTestId } = render(<AssignButton             
    members={members} 
    tasks={tasks} 
    setTasks={setTasks} 
    setMems={setMems} />); 
  
  fireEvent.click(getByTestId('assignButton'))
  let updatedMembers = [
    {
        "name": "Jake",
        "score": 1
    }
  ];
  let updatedtaskList = [
    {
      "description": "create task component",
      "difficulty": 1,
      "assignees": [{"name": "Jake","score": 1}],
      "priority": 5,
      "completed": false
    }]
  expect(getByTestId('members')).toHaveTextContent(updatedMembers);
  expect(getByTestId('tasks')).toHaveTextContent(updatedtaskList);
});

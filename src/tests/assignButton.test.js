import React,{useState} from 'react';
import { render, cleanup, fireEvent,getByTestId } from '@testing-library/react';
import AssignButton from '../components/assignButton'
import App from '../App'

afterEach(cleanup);

it("Assign button doesn't work when the list of tasks is empty", () => {
  let mems = [
    {
        "name": "Jake",
        "score": 0
    }
  ]
  let updatedMems = [
    {
        "name": "Jake",
        "score": 0
    }
  ]

  let taskList = [];
  const { container } = render(<AssignButton 
            members={mems} 
            tasks={taskList} 
            loading={false}/>);

  const button = container.firstChild
  expect(button.textContent).toBe('Assign new tasks');

  fireEvent.click(button);

  let updatedtaskList = []
  expect(taskList).toEqual(updatedtaskList);
  expect(mems).toEqual(updatedMems);
});

it("Assign button variant is 'outlined' if tasks is not an array containing unassigned tasks", () => {
  const taskList = undefined;
  const { container } = render(<AssignButton 
            members={mems} 
            tasks={taskList} 
            loading={false}/>);

  const button = container.firstChild
  expect(button.classList.contains('MuiButton-outlined')).toBe(true)
});

it("Assign button variant is 'contained' if tasks is an array containing unassigned tasks", () => {
  const taskList = [
      {
        "description": "create task component",
        "difficulty": 3,
        "priority": 5,
        "completed": false
      }
    ];
  const { container } = render(<AssignButton 
            members={mems} 
            tasks={taskList} 
            loading={false}/>);

  const button = container.firstChild
  expect(button.classList.contains('MuiButton-contained')).toBe(true)
});

import React,{useState} from 'react';
import { render, cleanup, fireEvent,getByTestId } from '@testing-library/react';
import AssignButton from '../components/assignButton'
import App from '../App'

it("Tasks array is rendered in order of priority when data is provided out-of-order", () => {
    const taskList = [
        {
            "description": "low priority task",
            "difficulty": 3,
            "priority": 5,
            "completed": false
        },
        {
            "description": "high priority task",
            "difficulty": 3,
            "priority": 1,
            "completed": false
        }
        ];
    const { container } = render(<TaskList tasks={tasks}/>);
    
    const lst = container.firstChild
    expect(lst.firstChild.contains('high priority task')).toBe(true)
    expect(lst.firstChild.firstChild.firstChild.textContent).toBe('high priority task')
});
    
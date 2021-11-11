import React from 'react';
import { render} from '@testing-library/react';
import TaskList from '../components/TaskList';

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
    const { container } = render(<TaskList tasks={taskList}/>);
    
    const firstTask = container.firstChild
    // console.log(firstTask);
    expect(firstTask.lastChild.firstChild.firstChild.textContent).toBe('high priority taskPRIORITY1');
});
    
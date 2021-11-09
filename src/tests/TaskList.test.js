import React from 'react';
import { render} from '@testing-library/react';

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
    
    const firstTask = container.firstChild
    expect(firstTask.firstChild.firstChild.firstChild.textContent).toBe('high priority task');
});
    
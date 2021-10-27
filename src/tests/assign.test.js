import React from 'react';
import assignTasks from '../Utilities/assign';

test('Tasklist does not change when there are no unassigned tasks', () => {
    let mems = [
        {
            "name": "Jake",
            "score": 0
        }
      ]
    
    let tasks = [
  {
      "description": "create task component",
      "difficulty": 1,
      "assignees": [
          'jake',
          'Misha'
      ],
      "priority": 5,
      "completed": false
  },
  {
      "description": "Assign tasks button",
      "difficulty": 2,
      "assignees": [
          'Carina'
      ],
      "priority": 5,
      "completed": false
  },
  {
      "description": "Task List",
      "difficulty": 3,
      "assignees": [
          'Yijing'
      ],
      "priority": 3,
      "completed": false
  },
]

let functionResult = {tasks: tasks, mems: mems}
expect(assignTasks(mems, tasks)).toEqual(functionResult)

});

test('Tasklist shows assigned members correctly after initial assignment', () => {

})
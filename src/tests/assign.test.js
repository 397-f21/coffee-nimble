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

// correctly: it assigns correct number of points 
// to the members and assign correct number of people to each task based on its difficulty
test('Initial assignement of tasks works correctly', () => {
    let tasks = [
        {
            "description": "create task component",
            "difficulty": 1,
            "assignees": [
            ],
            "priority": 5,
            "completed": false
        },
        {
            "description": "Assign tasks button",
            "difficulty": 2,
            "assignees": [
            ],
            "priority": 5,
            "completed": false
        },
        {
            "description": "task List",
            "difficulty": 3,
            "assignees": [
            ],
            "priority": 3,
            "completed": false
        },
        {
            "description": "login",
            "difficulty": 3,
            "assignees": [
      
            ],
            "priority": 2,
            "completed": false
        },
        {
            "description": "mood tracking",
            "difficulty": 1,
            "assignees": [
      
            ],
            "priority": 1,
            "completed": false
        },
      ]
      
      let members = [
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
      let updatedTasks = [
        {
            "description": "create task component",
            "difficulty": 1,
            "assignees": [{'name':'Jake','score':4}],
            "priority": 5,
            "completed": false
        },
        {
            "description": "Assign tasks button",
            "difficulty": 2,
            "assignees": [{'name':'Misha','score':5},{'name':'Iris','score':5}],
            "priority": 5,
            "completed": false
        },
        {
            "description": "task List",
            "difficulty": 3,
            "assignees": [{'name':'Daniel','score':3},{'name':'Carina','score':3},{'name':'Jake','score':4}],
            "priority": 3,
            "completed": false
        },
        {
            "description": "login",
            "difficulty": 3,
            "assignees": [{'name':'Yijing','score':4},{'name':'Misha','score':5},{'name':'Iris','score':5}],
            "priority": 2,
            "completed": false
        },
        {
            "description": "mood tracking",
            "difficulty": 1,
            "assignees": [{'name':'Yijing','score':4}],
            "priority": 1,
            "completed": false
        },
      ]
      
      let updatedMembers = [
        {
          "name": "Carina",
          "score": 3
        },
        {
          "name": "Daniel",
          "score": 3
        },
        {
          "name": "Jake",
          "score": 4
        },
        {
          "name": "Yijing",
          "score": 4
        },
        {
          "name": "Iris",
          "score": 5
        },
        {
          "name": "Misha",
          "score": 5
        }
      ]
      let totalScoreSum = 0;
      let totalMemberAssigned = 0;
    // since the function is random we can only check
    // the total number of points and team members assigned to a task
    const checker = ({tasks,mems}) =>{
        let totalScore = 0;
        let correctMembersNumber = 0;
        let curDifficulty = 0;
        for (let task of tasks){
            totalMemberAssigned += task.assignees.length
        };
        for (let member of members){
            totalScore += member.score
        }
        return {'score':totalScore,'memsAssigned':totalMemberAssigned}
    }
    let functionResult = {'score':24,'memsAssigned':10}
    expect(checker(assignTasks(members, tasks))).toEqual(functionResult)

});
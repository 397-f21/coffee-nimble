import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ControlledCheckbox from '../components/ControlledCheckBox';
import TaskCard from '../components/TaskCard';

describe("TaskCard Component", () => {

    let task1 = {
        "description": "create task component",
        "difficulty": 1,
        "assignees": [
            'jake',
            'Misha'
        ],
        "priority": 5,
        "completed": false
    };

    let task2 = {
        "description": "create task component",
        "difficulty": 1,
        "assignees": [
            'jake',
            'Misha'
        ],
        "priority": 5,
        "completed": true
    };

    it("ControlledCheckbox Blank rendered?", () => {
        const {getByTestId} = render(<TaskCard task={task1}/>);
        const checkbox = getByTestId("checkbox").querySelector('input[type="checkbox"]');
        expect(checkbox).toHaveProperty('checked', false);
    })

    it("ControlledCheckbox rendered?", () => {
        const {getByTestId} = render(<TaskCard task={task2}/>);
        const checkbox = getByTestId("checkbox").querySelector('input[type="checkbox"]');
        expect(checkbox).toHaveProperty('checked', true);
    })


    it("checkbox checked prop changed", async () =>{
        await act(async () => {
            const {getByTestId} = render(<TaskCard task={task1}/>);
            const checkbox = getByTestId("checkbox").querySelector('input[type="checkbox"]');
            expect(checkbox).toHaveProperty('checked', false);
            await fireEvent.click(checkbox);
            const newCheckBox = getByTestId("checkbox").querySelector('input[type="checkbox"]');
            expect(checkbox).toHaveProperty('checked', true);
            
        })
    })

})
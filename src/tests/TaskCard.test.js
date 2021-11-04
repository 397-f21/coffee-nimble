import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ControlledCheckbox from "../components/ControlledCheckBox";
import TaskCard from "../components/TaskCard";
import { setData } from "../Utilities/firebase";

describe("TaskCard Component", () => {
  let task1 = {
    description: "create task component",
    difficulty: 1,
    assignees: ["jake", "Misha"],
    priority: 5,
    completed: false,
  };

  let task2 = {
    description: "create task component",
    difficulty: 1,
    assignees: ["jake", "Misha"],
    priority: 5,
    completed: true,
  };

  it("ControlledCheckbox Blank rendered?", () => {
    const { getByTestId } = render(<TaskCard task={task1} />);
    const checkbox = getByTestId("checkbox").querySelector(
      'input[type="checkbox"]'
    );
    expect(checkbox).toHaveProperty("checked", false);
  });

  it("ControlledCheckbox rendered?", () => {
    const { getByTestId } = render(<TaskCard task={task2} />);
    const checkbox = getByTestId("checkbox").querySelector(
      'input[type="checkbox"]'
    );
    expect(checkbox).toHaveProperty("checked", true);
  });

  it("checkbox checked prop changed", () => {
    const { getByTestId } = render(<TaskCard task={task1} />);
    const checkbox = getByTestId("checkbox").querySelector(
      'input[type="checkbox"]'
    );
    expect(checkbox).toHaveProperty("checked", false);
    fireEvent.click(checkbox);
    expect(checkbox).toHaveProperty("checked", true);
  });

  it("description rendered properly", () => {
    act(() => {
      const { getByTestId } = render(<TaskCard task={task1} />);
      const description = getByTestId("description");
      expect(description).toBeTruthy();
    });
  });

  it("priority rendered properly", () => {
    act(() => {
      const { getByTestId } = render(<TaskCard task={task1} />);
      const priority = getByTestId("priority");
      expect(priority).toBeTruthy();
    });
  });

  it("members rendered properly", () => {
    act(() => {
        const { getByTestId } = render(<TaskCard task={task2} />);
        const assignees = getByTestId("assignees");
        expect(assignees).toBeTruthy();
      });
  })

  it("mock testing that button calls setData", () => {
    act( () => {
      const index = 56;
      const helpers = require("../Utilities/firebase");
      const setDataMock = jest.spyOn(helpers, "setData")
      
      expect(helpers.setData.mock).toBeTruthy();
      const { getByTestId } = render(<TaskCard task={task1} index={index}/>);
      const checkbox = getByTestId("checkbox").querySelector(
        'input[type="checkbox"]'
      );
      fireEvent.click(checkbox);
      expect(setDataMock).toHaveBeenCalledTimes(1);
      expect(setDataMock).toHaveBeenNthCalledWith(1, '/tasks/' + index + '/completed', true);
      fireEvent.click(checkbox);
      expect(checkbox).toHaveProperty("checked", false);
      expect(setDataMock).toHaveBeenCalledTimes(2);
      expect(setDataMock).toHaveBeenNthCalledWith(2, '/tasks/' + index + '/completed', true);
      
    })
  })

});

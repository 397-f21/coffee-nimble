

import AddDialog from "../components/AddDialog";
import React from "react";
import { render, fireEvent,screen } from "@testing-library/react";

describe("click add", ()=>{
  it("addbutton should add new tasks and call add task", () => {
    const addTask = jest.fn();

    const { getByTestId } = render(<AddDialog open={true} tasks={{}} addTaskDb={addTask} />);

    let newItemdes = "fix the bug";

    let newItemdiff = 2;

    let newItempri = 2;

    fireEvent.change(getByTestId("description"), { target: { value: newItemdes } });
    fireEvent.change(getByTestId("difficulty"), { target: { value: newItemdiff } });
    fireEvent.change(getByTestId("priority"), {
      target: { value: newItempri },
    });
    getByTestId("addButton").click();
  
    expect(addTask).toHaveBeenCalled();
    expect(addTask).toHaveBeenCalledTimes(1);

  });

});

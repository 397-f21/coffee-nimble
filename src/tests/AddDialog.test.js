

import AddDialog from "../components/AddDialog";
import React from "react";
import { render, fireEvent,screen } from "@testing-library/react";

describe("click add", ()=>{
  it("addbutton should add new tasks and call add task", () => {
    //const addTask = jest.fn();
    const addSetOn =jest.fn();
    const newtasks=jest.fn();
    const { getByTestId } = render(<AddDialog open={true} setTasks={{newtasks}} setOpen={addSetOn} />);

    let newItemdes = "fix the bug";

    let newItemdiff = 2;

    let newItempri = 2;

    fireEvent.change(getByTestId("description"), { target: { value: newItemdes } });
    fireEvent.change(getByTestId("difficulty"), { target: { value: newItemdiff } });
    fireEvent.change(getByTestId("priority"), {target: { value: newItempri },});
    getByTestId("addButton").click();
    //const add=addTaskDb(<AddDialog />);
  

    
    expect(getByTestId("difficulty")).toBeTruthy();
    expect(getByTestId("difficulty")).toBeTruthy();
    expect(getByTestId("priority")).toBeTruthy();

    

  });

});

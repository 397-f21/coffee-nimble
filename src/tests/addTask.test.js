import React from "react";
import AddDialog from "../components/AddDialog";
import { fireEvent, act, screen } from "@testing-library/react";
import { render, unmountComponentAtNode } from "react-dom";
// In your own jest-setup.js (or any other name)
import "@testing-library/jest-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Add button", () => {
  it("displays error message when description is empty", async () => {
    const setOpen = jest.fn();

    await act(() => {
      const r = render(
        <AddDialog open={true} tasks={{}} setOpen={setOpen} />,
        container
      );
    });
    const button = document.querySelector("[data-testid=addButton]");
    await fireEvent.click(button);
    expect(screen.getByText("Please enter description.")).toBeTruthy();
  });
});

describe("Create a new task without description", () => {
  it("displays an error", () => {
    cy.visit("/");
    cy.get("[data-cy=joinButton]").click();
    cy.get("[data-cy=addTask]").click();
    cy.get("[data-cy=addButton]").click();
    cy.get("[data-cy=taskDescription]").should(
      "contain",
      "Please enter description."
    );
  });
});

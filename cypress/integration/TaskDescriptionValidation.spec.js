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


describe("Create a new task with description", () => {
  it("displays a task with new description", () => {
    cy.visit("/");
    cy.get("[data-cy=joinButton]").click();
    cy.get("[data-cy=addTask]").click();
    cy.get('.MuiInput-root > [data-testid=description]').type('Cypress test for Misha');
    cy.get("[data-cy=addButton]").click();
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardContent-root > [data-cy=cardDescription]').should(
      "have.text",
      "Cypress test for Misha"
    );
  });
});
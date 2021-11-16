describe("Clicking assign members button renders members on the taskcard", () => {
  it("displays a member on a taskcard", () => {
    cy.visit("/");
    cy.get("[data-cy=joinButton]").click();
    cy.get('[data-cy="addnewmember"]').click();
    cy.get('[data-cy=addname]').type('apple');
    cy.get('[data-cy=confirm]').click();
    cy.get('[data-cy=addname]').type('pearl');
    cy.get('[data-cy=confirm]').click();
    cy.get('[data-cy=doneEditingButton').click();
    cy.get('[data-cy=assignButton]').click();
    cy.get(".member1").should('have.text','apple');
    cy.get(".member2").should('have.text','pearl');
  });
});

describe("Deleting member form members list takes their name off the taskcard", () => {
  it("Deletes name from taskcard", () => {
    cy.visit("/");
    cy.get("[data-cy=joinButton]").click();
    cy.get("[data-cy=addnewmember]").click();
    cy.get('[data-cy=addname]').type('apple');
    cy.get("[data-cy=deleteMemberButton]").click();
    cy.get('[data-cy=addname]').type('pearl');
    cy.get("[data-cy=deleteMemberButton]").click()
    cy.get('[data-cy=doneEditingButton').click();
    cy.get(".member1").should('not.exist');
    cy.get(".member2").should('not.exist');
  });
});
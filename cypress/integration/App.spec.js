describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('test header', () => {
        cy.visit ('/');
        cy.get('[data-cy=nimble]').should('contain', 'nimble');
      });

    it('Opens new task modal when add task is clicked', () => {
        cy.visit ('/');
        cy.get('[data-cy=addTask]').click();
        cy.get('[data-cy=addTaskTitle]').should('contain' ,'Enter New Task Information');
    });
  });
describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
<<<<<<< Updated upstream

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
=======
  });

// test for content
  describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });
  
    it ('opens with Fall CS courses', () => {
      cy.visit ('/');
      cy.get('[data-cy=nimble]').should('contain', 'nimble');
    });
  });
  
>>>>>>> Stashed changes

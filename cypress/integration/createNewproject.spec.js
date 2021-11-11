describe ('Test creat new project', () => {

    it ('enter into the exsiting project', () => {
      cy.visit ('/');
      cy.get('[data-cy=projectname]')
      .type("coffee");

      cy.get('[data-cy=join]').click();
      
      cy.get('[data-cy=teamname]').should('contain', 'welcome, team coffee!');
      
    });

    it ('create new member', () => {
      cy.visit ('/');
      cy.get('[data-cy=join]').click();
      cy.get('[data-cy=addnewmember]').click();
      cy.get('[data-cy=addname]').type('apple');
      cy.get('[data-cy=confirm]').click();

      cy.get('[data-cy=result]').should('contain', 'apple');
  
    });


     

  });
 



describe ('Test creat new project', () => {

    it ('enter into the existing project', () => {
      cy.visit ('/');
      cy.get('[data-cy=joinButton]').click();
      
      cy.get('[data-cy=teamname]').should('contain', 'welcome, team coffee!');
      
    });

    it ('create new member', () => {
      cy.visit ('/');
      cy.get('[data-cy=joinButton]').click();
      cy.get('[data-cy=addnewmember]').click();
      cy.get('[data-cy=addname]').type('user1');
      cy.get('[data-cy=confirm]').click();
      cy.get('[data-cy=result]').should('contain', 'user1');
      cy.get('[data-cy=addname]').type('user1');
      cy.get("[data-cy=deleteMemberButton]").click();
  
    });


     

  });
 



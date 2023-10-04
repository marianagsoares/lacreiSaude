Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').should('be.visible');
    cy.get('#email').type(email);

    cy.get('#password').should('be.visible');
    cy.get('#password').type(password);

    cy.get('form').submit();
});

Cypress.Commands.add('register', (firstName, lastName, email, password, confirmPassword) => {
    cy.get('#first_name').should('be.visible');
    cy.get('#first_name').type(firstName);

    cy.get('#last_name').should('be.visible');
    cy.get('#last_name').type(lastName);

    cy.get('#email').should('be.visible');
    cy.get('#email').type(email);

    cy.get('#password1').should('be.visible');
    cy.get('#password1').type(password);

    cy.get('#password2').should('be.visible');
    cy.get('#password2').type(confirmPassword);
});
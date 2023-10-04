describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://frontend-lacrei-pessoa-usuaria.vercel.app');
  });

  it('Login with a complete register', () => {
    const email = 'marianagalindo1d2013@gmail.com';
    const password = 'Marianagalindo1d2013#';

    cy.login(email, password);
    cy.get('#search').should('be.visible');
  });

  it('Login with an incomplete register', () => {
    const email = 'meupatrocinioqa@gmail.com';
    const password = 'Meupatrocinioqa123#';

    cy.login(email, password);

    cy.get('.iIVFha').should('be.visible');
  });
});
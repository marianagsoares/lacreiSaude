describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://frontend-lacrei-pessoa-usuaria.vercel.app/cadastro");
  });

  it("Create an account", () => {
    const firstName = "John";
    const lastName = "Doe";
    const email = "johnn@gmail.com";
    const password = "Johnn123#";
    const confirmPassword = "Johnn123#";

    cy.register(firstName, lastName, email, password, confirmPassword);
    
  
    cy.get('.check-container').first().click();
    cy.get('.check-container').eq(1).click();

    cy.get('form').submit();
  });
});
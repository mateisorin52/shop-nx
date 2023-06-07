describe('2e2 test', () => {
  beforeEach(() => {
    cy.fixture('example.json').as('productsData');
  });

  it('passes', () => {
    cy.visit('http://localhost:4200');

    cy.wait(1000);

    cy.get('@productsData').then((products) => {
      const productId = products[0].id;
      cy.get(`[data-testid="id-${productId}"]`).click();

      cy.wait(1000);

      cy.get('[data-testid="add-cart"]').click();

      cy.wait(1000);
      cy.get('[data-testid="add-increment"]').click();
      cy.get('[data-testid="add-increment"]').click();
      cy.get('[data-testid="add-increment"]').click();

      cy.get('[data-testid="num-items"]').should('have.text', '4');
      cy.wait(1000);
      cy.get('[data-testid="add-decrement"]').click();
      cy.get('[data-testid="num-items"]').should('have.text', '3');
    });
  });
});

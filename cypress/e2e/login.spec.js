describe('Login ZotoShop', () => {
beforeEach(() => {
    cy.visit('/account/login');
})

it('should display login form', () => {
    cy.log("T000: implementer ce Test");
});

it('should login with valid credentials', () => {
    cy.log("T000: implementer ce Test");
});

it( 'should reject invalid credentials', () => {
    cy.log("T000: implementer ce Test");
})
});

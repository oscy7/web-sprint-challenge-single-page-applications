describe('Sprint Challenge Testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/Pizzaform')
    })

    const nameInput = () => cy.get('input[name=name]');
    const specialInput = () => cy.get('input[name=special');

    it('Test that you can add text to the box', () => {
        nameInput()
            .should('have.value', '')
            .type('Paul Atreides')
            .should('have.value', 'Paul Atreides');
        specialInput()
            .should('have.value', '')
            .type('No Cheese')
            .should('have.value', 'No Cheese');
    })

    it('Test that user can select multiple toppings', () => {
        cy.contains('Pepperoni').click()
        cy.contains('Onion').click()
        cy.contains('Peppers').click()
    })

    it('Test user can submit Form', () => {
        cy.contains('Submit Pizza!!').click()
    })

})
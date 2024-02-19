describe('Newsletter Subscribe Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    
    it('allows users to subscribe to the email list', () => {
        cy.getByData('email-input').type('tom@alo.com')
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('exist').contains('Success: tom@alo.com has been successfully subscribed')
    })

    it('does NOT allow a invalid email address', () => {
        cy.getByData('email-input').type('tom')
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('not.exist')
    })

    it('users cannot sign up for our newsletter if they are already subscribed', () => {
        cy.getByData('email-input').type('john@example.com')
        cy.getByData('submit-button').click()
        cy.getByData('server-error-message').should('exist').contains('already exists. Please use a different email address.')
    })

    it('email is required', () => {
        cy.getByData('submit-button').click()
        cy.getByData('error-message').should('exist').contains('Email is required')
    })
})
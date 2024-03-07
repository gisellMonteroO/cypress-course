describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context("Hero section", () => {
    it('the h1 contains the correct text', () => {
      cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
    })
    
    it('the features on the homepage are correct',() => {
      cy.get('dt').eq(0).contains("4 Courses")
    })
  })

  context("Courses section", () => {
    it('Course: Testing your first netx.js application', () => {
      cy.getByData('course-0').find('a').contains('Get started').click()
      cy.location('pathname').should('eq', '/testing-your-first-application')
    })

    it('Course: Testing Foundations', () => {
      cy.getByData('course-1').find('a').eq(3).click()
      cy.location('pathname').should('eq', '/testing-foundations')
    })

    it('Course: Cypress Fundamental', () => {
      cy.getByData('course-2').find('a').contains('Get started').click()
      cy.location('pathname').should('eq', '/cypress-fundamentals')
    })
  })
})
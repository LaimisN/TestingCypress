/// <reference types="cypress" />

import {Objects} from "../../integration/pageAtributes/objects"
describe('Pigu page tests',()=>{
    const page = new Objects()

    before(()=>page.navigate())
/*
    beforeEach(()=>{
        //page.navigate()       
        
    })*/
    beforeEach(()=>cy.eyesOpen({appName: 'PiguPage', batchName: 'piguPageTest'}))
    afterEach(()=>cy.eyesClose())

        it.only('LogIn procedura',()=>{
            page.LogInProcedure('testamailas@gmail.com','test2021')
            page.LogInUserValidation('testamailas@gmail.com')
           // page.LogInProcedure()
            cy.get('.name').should('contain.text','testamailas@gmail.com')
    })
    
    it.only('Cart validation',()=>{
       // cy.visit('https://pigu.lt/lt/')
       cy.eyesCheckWindow('empty 1')
      cy.get('[href="u/login"] > .inner > strong > .text').click()
      cy.get('.close').click()
      cy.get('.login-details > .form-default > :nth-child(4) > input').click()
      cy.get('.login-details > .form-default > :nth-child(4) > input').type('testamailas@gmail.com')
       cy.get('#passwordCont > input').type('test2021')
       cy.get('[widget-attachpoint="viewLogin"] > .login-details > .form-default > .form-controls > .btn').click()
       cy.get('.name').should('contain.text','testamailas@gmail.com')
       cy.eyesCheckWindow('empty 2')

       cy.get('[href="https://pigu.lt/lt/u/wishlist"] > .inner > strong > .text').click()
       
       cy.get('#menuCount2442046').should('have.text','1')
    
    
       cy.get('#searchInput').type('samsung s20')
       .type('{enter}')
       cy.eyesCheckWindow('empty 3')

    })
})
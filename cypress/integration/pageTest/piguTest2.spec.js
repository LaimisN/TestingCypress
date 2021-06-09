/// <reference types="cypress" />
import{navigate, LogInProcedure, LogInUserValidation, logoutProcedure} from '../pageAtributes/functionss'

describe('Pigu page tests With Funkcions',()=>{
    beforeEach(()=>{
      //  cy.visit('https://pigu.lt/lt/')
        navigate()        
    })

    it.only('LogIn procedura',()=>{
        LogInProcedure('testamailas@gmail.com','test2021')
        LogInUserValidation('testamailas@gmail.com')
       // page.LogInProcedure()
        cy.get('.name').should('contain.text','testamailas@gmail.com')
})
})
/// <reference types="cypress" />


export function navigate(){
        cy.visit('https://pigu.lt/lt/')
    }

export function  LogInProcedure(email , password ){
        cy.get('[href="u/login"] > .inner > strong > .text').click()
      cy.get('.close').click()
      cy.get('.login-details > .form-default > :nth-child(4) > input').click()
      cy.get('.login-details > .form-default > :nth-child(4) > input').type(email)
       cy.get('#passwordCont > input').type(password)
       cy.get('[widget-attachpoint="viewLogin"] > .login-details > .form-default > .form-controls > .btn').click()
    }
export function  LogInUserValidation(email){
        cy.get('.name').should('contain.text',email)
    }
export function addTodo(TodoText){
        cy.get('.new-todo').type(TodoText+"{enter}")
    }

export function validateToDoText(todoIndex , expectedTEx){
        cy.get('.todo-list:nth-child(${todoIndex + 1}) lavel').should('have.text',expectedTEx)
    }
export function logoutProcedure(){

    }

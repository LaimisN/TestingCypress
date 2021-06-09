export class Objects{
    navigate(){
        cy.visit('https://pigu.lt/lt/')
    }

    LogInProcedure(email , password ){
        cy.get('[href="u/login"] > .inner > strong > .text').click()
      cy.get('.close').click()
      cy.get('.login-details > .form-default > :nth-child(4) > input').click()
      cy.get('.login-details > .form-default > :nth-child(4) > input').type(email)
       cy.get('#passwordCont > input').type(password)
       cy.get('[widget-attachpoint="viewLogin"] > .login-details > .form-default > .form-controls > .btn').click()
    }
    LogInUserValidation(email){
        cy.get('.name').should('contain.text',email)
    }
    addTodo(TodoText){
        cy.get('.new-todo').type(TodoText+"{enter}")
    }

    validateToDoText(todoIndex , expectedTEx){
        cy.get('.todo-list:nth-child(${todoIndex + 1}) lavel').should('have.text',expectedTEx)
    }
    logoutProcedure(){

    }
}
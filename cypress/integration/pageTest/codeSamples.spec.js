/// <reference types="cypress" />
import { Objects } from "../pageAtributes/objects"

//const page = new Object()

describe('Log In testing',()=>{ 
    /*
    before(()=> {
        cy.then(()=>{ window.localStorage.setItem(' sacacv', token)
        })
    })*/
    beforeEach(()=>{
        cy.visit('https://codedamn.com')
        cy.viewport(1280,720)

    })    
 //asset

    it.only('wehave correct page title',()=>{
        //cy.viewport('samsung-note9')
        cy.contains('Learn')
        .should('exist')
        cy.get('div#root').should('exist')
        cy.get('div[id=root]').should('exist')
        cy.get('div[class="bg-gray-100 lg:sticky shadow top-0 left-0"]').should('exist')
        cy.get('[data-testid=menutoggle]').should('not.exist')
        //cy.get('div#noroot').should('not.exist')
        cy.get('.bg-gray-900 > span').should('have.text','Start Learning')
        cy.contains('Create a free').click()
       // cy.contains('GO WITH GOOGLE').should('exist')
       cy.get('.ml-4').click()
        cy.url().should('include','/login')
        cy.url().should('eq','https://codedamn.com/login')
        
        cy.url().then((value)=>{

            cy.log('this real URl is:', value)
        })
        cy.get('[data-testid=username]').type('email')
        cy.log('going back')
        cy.go('back')// grizti atgal puslapyje
        cy.pause() //pauze padaro teste
        cy.contains('wqefqwef ${}.js', {timeout: 3000}) // timeout time wait
       // cy.url.should.contains('.com')
       cy.debug()
    })
})/*
describe('Log In testing',()=>{ //pasako testo aplinkos aprasa
    const page = new Objects() // kai perkialiama klase. kai inport funkcijos nebereikia sito

    beforeEach(()=>{
        page.navigate()       
    })    
    it.only('LogIn procedura',()=>{
        page.LogInProcedure('testamailas@gmail.com','test2021')
        page.LogInUserValidation('testamailas@gmail.com')
       // page.LogInProcedure()
        cy.get('.name').should('contain.text','testamailas@gmail.com')
})
it.only('Cart validation',()=>{
    // cy.visit('https://pigu.lt/lt/')
   cy.get('[href="u/login"] > .inner > strong > .text').click()
   cy.contains()
    cy.get('#searchInput').type('samsung s20')
    .type('{enter}')
 })
 it('.type() - type into a DOM element', () => {
    cy.get('.action-email')
      .type('fake@email.com').should('have.value', 'fake@email.com')
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('slow.typing@email.com', { delay: 100 })// Delay each keypress by 0.1 sec
      .should('have.value', 'slow.typing@email.com')

    cy.get('.action-disabled')
      .type('disabled error checking', { force: true })
      .should('have.value', 'disabled error checking')
  })
    })*/


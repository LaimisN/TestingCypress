/// <reference types="cypress" />

/*

it('should navigate to site',()=>{
    cy.visit('https://www.original-carparts.com/')
    // cy.wait('[data-testid=cookie-policy-dialog-accept-button]').click
    //cy.get('[data-testid=permission-popup-accept]').click
    cy.get('.login_links > [href="#loginModal"]').click()
    cy.get('#username').type('UAB DETALIU TIEKIMAS')
    cy.get('#password').type('el041')
    cy.get('.form_block > .btn').click()
    cy.wait(4000)
    cy.get('.col-4 > .logged_links > .dropdown > .cabinet').click()
    cy.get('.col-4 > .logged_links > .dropdown > .dropdown-menu > [href="/en/client/profiles/"]').should('contains.text','UAB Detaliu tiekimas')

})*/
describe('FACEBOOK LOG IN ',()=>{
it('Log in procedure',()=>{
    cy.visit('https://www.facebook.com/?delay-[data-testid=cookie-policy-dialog-accept-button]=5000')
   cy.wait(6000)
    // cy.wait('[data-testid=cookie-policy-dialog-accept-button]').click
    cy.get('[data-testid=cookie-policy-dialog-accept-button]').click()
    cy.get('[data-testid=royal_email]').type('mailas')
    cy.get('[data-testid=royal_pass]').type('kurnamas')
    cy.get('[data-testid=royal_login_button]').click()
})
})
import {Objects} from "../../integration/pageAtributes/objects"
describe('Pigu page tests',()=>{
    const page = new Objects()

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
      cy.get('.close').click()
      cy.get('.login-details > .form-default > :nth-child(4) > input').click()
      cy.get('.login-details > .form-default > :nth-child(4) > input').type('testamailas@gmail.com')
       cy.get('#passwordCont > input').type('test2021')
       cy.get('[widget-attachpoint="viewLogin"] > .login-details > .form-default > .form-controls > .btn').click()
       cy.get('.name').should('contain.text','testamailas@gmail.com')
       cy.get('[href="https://pigu.lt/lt/u/wishlist"] > .inner > strong > .text').click()
       
       cy.get('#menuCount2442046').should('have.text','1')
    
    
       cy.get('#searchInput').type('samsung s20')
       .type('{enter}')

    })
})

   // cy.hover


/*
     PiguPage page = new PiguPage(driver);
            page.NavigateToDefaultPage();
            page.LogInProcedure("testamailas@gmail.com", "test2021");
            page.VerificationOfLogedUser("testamailas@gmail.com");
            page.LogOutProcedure();
            page.LogOutVerification();
            public void LogInProcedure(string email, string password)
        {
            LoginIcon.Click();
            GetWait().Until(ExpectedConditions.ElementExists(By.CssSelector("#loginModal > div:nth-child(1) > div.col-1-of-2.login-details > form > div:nth-child(4) > input[type=email]")));
            //WebDriverWait wait = new WebDriverWait(driver(), 10);
            // WebDriverWait wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10));
            //IWebElement element = wait.Until(ExpectedConditions.InvisibilityOfElementLocated(By.CssSelector("#loginModal > div:nth-child(1) > div.col-1-of-2.login-details > form > div:nth-child(4) > input[type=email]")));
            //IWebElement element = wait.Until(ExpectedConditions.InvisibilityOfElementLocated("emailFieldInput");

            emailFieldInput.Clear();
            emailFieldInput.SendKeys(email);
            userPasswordFieldInput.SendKeys(password);
            driver.FindElement(By.CssSelector("#passwordCont > div")).Click();// passwordo perziura
            driver.FindElement(By.XPath("//*[@id='loginModal']/div[1]/div[1]/form/div[4]/input")).Click(); // prisijungti paspaudimas

        }
        public void RegistrationProcedure(string password)
        {
            registrationButton.Click();// registracijos buuton papaudimas
            userPasswordFielfInput2.SendKeys(password);//pakartoja passworda
            driver.FindElement(By.CssSelector("#agreeCheck > div")).Click(); // paklikina Check boxa
            driver.FindElement(By.CssSelector("#policiesButtonApprove")).Click(); // paklikina Check boxa
            registrationButton2.Click();//paspaudzia registruotis
        }
        public void RegistrationVerification(string email)
        {
            Assert.AreEqual(email, RegistrationFormcheckresult.Text, "tekstas neatitinka");// registracijos patikrinimas
        }

        public void VerificationOfLogedUser(string email)
        {
            Assert.AreEqual(email, LoggedInUserResult.Text, "tekstas neatitinka");
        }

        public void InputInItemEnterField(string item)
        {
            ItemEnterField.Clear();
            ItemEnterField.SendKeys(item);
            driver.FindElement(By.CssSelector("#searchRow > button:nth-child(2) > i:nth-child(1) > svg:nth-child(1)")).Click(); // searchas.click
        }
        public void SearchForItemNavigationCliks()
        {
            driver.FindElement(By.CssSelector("#productBlock36607961 > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1) > img:nth-child(1)")).Click(); //produktoparinkimas.clickinimas
            driver.FindElement(By.CssSelector("div.warranty-card:nth-child(2) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2)")).Click(); // kitame lange paklikinimas i krepseli
            Thread.Sleep(1000);
            warrantyDropdown.Click();
            driver.FindElement(By.Id("insuranceDropdown5fe196d2ed8680bd085e70ad2d03d0af")).Click(); // parenkama 1 metu garantija per dropdowna
            Thread.Sleep(1000);

            Actions action = new Actions(driver);
            action.SendKeys(Keys.PageDown);
            action.SendKeys(Keys.PageDown);
            action.SendKeys(Keys.PageDown);
            action.SendKeys(Keys.PageDown);
            action.Build().Perform();
            Thread.Sleep(1000);
            driver.FindElement(By.CssSelector("#stickyCartButton > div > button")).Click(); // i krepseli.clik
            driver.FindElement(By.CssSelector("#continue")).Click();   // testi apsipoirkima.click
        }
        public void LogOutProcedure()
        {
            Actions action = new Actions(driver);
            action.MoveToElement(LoginIcon);
            action.Build().Perform();
            GetWait().Until(ExpectedConditions.ElementExists(By.CssSelector(".drop-down--dark > li:nth-child(7) > a:nth-child(1)")));
            LogOutButton.Click();
        }
        public void LogOutVerification()
        {
            Assert.IsTrue(LogOutConfirmation.Text.Contains("Prisijungti"));

        }
        public void SelectrForomWarrantyDropdownList()
        {
            warrantyDropdownList.SelectByValue("5fe196d2ed8680bd085e70ad2d03d0af");
        }
        public void ItemInCartValidation()
        {
            PiguCart.Click();
            Assert.AreEqual("€ 129,00", PiguCartItemWarantyPriceResult.Text, "kaina neatitinka");
        }*/
            
//})
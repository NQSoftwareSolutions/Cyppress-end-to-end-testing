// cypress use mocha as testing framework so we can use mocha describe function
// which used to test collection of test case of same type

describe ("Login", function() {
  it ("Sign in", function() {
      // Launch website
      let url = "https://react-redux.realworld.io/#/login"
      cy.visit(url)

      // find element by xpath
      let emailXpath = "input[type='email']"
      let pwdXpath = "input[type='password']"

      let email = "abdulqayoomjat999@gmail.com"
      let pwd = "Testing123456789"

      // get : is used to get element by xpath and it returns elemennt
      // type: is used to tyoe in field

      // type email in input field
      let emailInputField = cy.get(emailXpath)
      emailInputField.type(email)

      // type password in password input field
      let pwdInputField = cy.get(pwdXpath)
      pwdInputField.type(pwd)

      // click: click is used to click on element, it returns true or false
      // we are using class name here 
      // we can use "." dot for class and "#" for it
      let signInButtonClass = ".btn"
      let signInBtnText = "Sign in"

      let signInButton = cy.get(signInButtonClass).contains(signInBtnText)
      signInButton.should("be.visible").click()
  })
})
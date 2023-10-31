class LoginPage {
// Elements
get emailInput() {
    return  cy.get('#id_user_identifier')
}
get passwordInput() {
    return cy.get('#id_password')
}
get submitbutton() {
    return cy.get('#submit')
}
// Methods
load () {
    cy.visit("/")
}
login (email , password) {
    this.emailInput.type(email)
    this.passwordInput.type(password)
    this.submitbutton.click()
}
}

export default LoginPage

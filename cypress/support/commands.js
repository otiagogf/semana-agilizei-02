// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        '8JYVddvvVUUWYwyn08WBQr0vDVIQNhDIhPc9Q22IOH5YlxY%2FXl%2BPG8yx%2Flggy9wZYgHH21aXOgedVVZK0fzt2dKwMCLk2iS3xnFBpjLWV7pCpOY6k32nr114J2vtC09LX4HDLnvzHooXFwbsiUIAtW0QD5MEEldqoiBIU2noGx5iW8KUbbEjd7PRk7XoRowktDLzkkHPCGAuQT4vY39cnQWgV4GzpCsLmb8dD5IAet0TaOdGjAHIdKgVkWIgI9V9JEk3t%2BASOqMiVYiOdT%2BY3gd4DV3AYPPgiAz6c%2FgYLTRwr62vccwVzmbTxmzM9isXfjb8%2FVy7kLgiu4gnH%2By4Yp7Vc6gy1f0uNC0kvLXWh7woEIqtA7%2FjS6NEyZF9JHU5A7sXnfAf%2BbJ8t7UUzdu8WAKFBQ9oag5uPupJIMiVJis%3D000320'
    )
})

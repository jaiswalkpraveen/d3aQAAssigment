Cypress.Commands.add('loginIntoApp', function (loginPagePOM) {
    cy.get(loginPagePOM["userEmail"]).clear().type(`${Cypress.env('email')}`);
    cy.get(loginPagePOM["userPassword"]).clear().type(`${Cypress.env('password')}`);
    cy.get(loginPagePOM["loginForm"]).submit();
});

Cypress.Commands.add('createProject', function (projectPagePOM, name, description) {
    cy.contains(projectPagePOM["newProjectButton"]).should('be.visible').click()
    cy.get(projectPagePOM["projectNameTextField"]).type(name)
    cy.get(projectPagePOM["projectDescriptionTextField"]).type(description)
    cy.contains(projectPagePOM["addProjectButton"]).should('be.enabled').click()
});

Cypress.Commands.add('validateCreatedProjectUI', function (projectPagePOM, name, description) {
    cy.get(projectPagePOM["projectList"]).within(()=>{
        cy.get(projectPagePOM["projectNameHeader"]).should('contain', name)
        cy.get(projectPagePOM["projectNameDescription"]).should('contain', description)
    })   
});

Cypress.Commands.add('createSimulation', function (projectPagePOM, simulationName, projectName) {
    cy.get(projectPagePOM["simulationForm"]).within(()=>{
         cy.get(projectPagePOM["simulationNameTextField"]).clear().type(simulationName)
          cy.get(projectPagePOM["simulationProjectName"]).contains(projectName).should('be.visible') 
    })
    cy.get(projectPagePOM["submitSimulationButton"]).click()
});

Cypress.Commands.add('validateCreatedSimulationUI', function (projectPagePOM, simulationName) {
    cy.get(projectPagePOM["activeProjectTab"]).click()
    cy.get(projectPagePOM["simulationNameTitle"]).contains(simulationName).should('be.visible')  
});
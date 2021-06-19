import './commands';
import { aliasQuery, aliasMutation } from '../utils/graphql-test-utils'

Cypress.Commands.add('interceptD3Gql', () => {
    cy.intercept('POST', Cypress.config('api'), (req) => {
        // Queries
        aliasQuery(req, 'listProjectsQuery')
        aliasQuery(req, 'cloudCoverageQuery')
        // Mutations
        aliasMutation(req, 'createProjectMutation')
        aliasMutation(req, 'createConfigurationMutation')
    })
})

Cypress.Commands.add('validateProjectGql', (operation, propertyName) => {
    cy.wait(operation)
          .its('response.body.data')
          .should('have.property', propertyName)
})

Cypress.Commands.add('validateCreatedProjectGql', (operation, projectName, projectDescription) => {
    cy.wait(operation)
      .its('response.body.data.createProject')
      .should((project) => {
        expect(project.name).to.equal(projectName)
        expect(project.description).to.equal(projectDescription)
      })
})

Cypress.Commands.add('validateSimulationFormGql', (operation, propertyName) => {
    cy.wait(operation)
    .its('response.body.data')
    .should('have.property', propertyName)
})

Cypress.Commands.add('validateCreatedSimulationGql', (operation, simulationName) => {
    cy.wait(operation)
      .its('response.body.data.createConfiguration')
      .should((simulation) => {
        expect(simulation.name).to.equal(simulationName)
      })
})
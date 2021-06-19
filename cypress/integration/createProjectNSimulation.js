const { beforeEach } = require("mocha");
const faker = require("faker"); 

let loginPagePOM = null;
let projectPagePOM = null;
const projectName = faker.name.firstName();
const projectDescription = faker.name.jobDescriptor()
const simulationName = faker.company.companySuffix()

describe('D3 user login into application and create new project with simulation', ()=> { 
    before(() => {
        cy.fixture('loginPagePOM.json').then(loginPagePOMObject => {
            loginPagePOM = loginPagePOMObject;
        })
        cy.fixture('projectPagePOM.json').then(projectPagePOMObject => {
          projectPagePOM = projectPagePOMObject;
        })
        
    })

    beforeEach(()=>{ 
      cy.interceptD3Gql();
      cy.visit('/login'); 
      cy.loginIntoApp(loginPagePOM);   
      cy.validateProjectGql(`@gqllistProjectsQuery`, 'listProjects')
    })

    it(`Create new Project for registered user`,()=> {
      cy.get(projectPagePOM["projectTab"]).eq(0).click()
      cy.validateProjectGql(`@gqllistProjectsQuery`, 'listProjects')
      cy.createProject(projectPagePOM, projectName, projectDescription)
      cy.validateCreatedProjectGql('@gqlcreateProjectMutation', projectName, projectDescription)
      cy.validateCreatedProjectUI(projectPagePOM, projectName, projectDescription)
    });

    it(`Create Simulation for newly created project for registered user`,()=> {
      cy.get(projectPagePOM["projectTab"]).eq(0).click()
      cy.validateCreatedProjectUI(projectPagePOM, projectName, projectDescription)
      cy.contains(projectName).click();
      cy.contains(projectPagePOM["newSimulationButton"]).should('exist').should('be.visible').click()
      cy.validateSimulationFormGql('@gqlcloudCoverageQuery', 'cloudCoverageProfiles')
      cy.createSimulation(projectPagePOM, simulationName, projectName)
      cy.validateCreatedSimulationGql('@gqlcreateConfigurationMutation', simulationName)
      cy.validateCreatedSimulationUI(projectPagePOM, simulationName)
      })
});
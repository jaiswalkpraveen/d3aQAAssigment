let loginPagePOM = null;

describe('D3 user login into application', ()=> { 
    before(() => {
      cy.fixture('loginPagePOM.json').then(loginPagePOMObject => {
          loginPagePOM = loginPagePOMObject;
      })

      cy.interceptD3Gql();
      cy.visit('/login'); 
        
    })

    it(`User successfully login into application`,()=> {
      cy.loginIntoApp(loginPagePOM);   
      cy.validateProjectGql(`@gqllistProjectsQuery`, 'listProjects')
    });
});
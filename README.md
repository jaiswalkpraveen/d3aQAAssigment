## About The Project
This project contains d3a.io automated test cases.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
*
  ```sh
  npm install 
  ```

### Test Execution
*UI Mode test execution
```
npx cypress open
```

* Headless mode Test Execution
```
npx cypress run
```

* Headless/CI mode where developer can see report here: https://dashboard.cypress.io/projects/x99wep/runs
```
npm run CI
```

### Test Execution
* Login into d3a.io application
```
Assertion: validate existing projectList graphQL query for Successful login
```

* User create new project 
```
Assertion: 
1. validate newly created project in projectList graphQL query
2. validate newly created project in UI 
```

* User creation simulation for newly created project
```
Assertion:
1. validate newly created project in UI
2. validate simulation form graphQL query
3. validate newly created simulation graphQL mutation
4. validate newly created simulation configuration in UI
```

### Report (Cypress Dashboard)
https://dashboard.cypress.io/projects/x99wep/runs

### Git action
Schedule this test cases to execute every day at 5 AM UTC using git action

### Note
I didn't use Gherkin syntax in this framework and used mocha instead. To see my Selenium-BDD-POM framework, please visit below repository:

1. https://github.com/jaiswalkpraveen/GMeetMute
2. https://github.com/jaiswalkpraveen/wingifyUIAutomation
3. https://github.com/jaiswalkpraveen/AutomationFramework_ClearTrip.com

I have used Gherkin for 4 years.

# Earthquake

## The stack

- WebApp scaffolded via [Create React App](https://github.com/facebook/create-react-app)
- Check the syntax and formatting of the JS, via [ESLint](http://eslint.org/) and [Prettier](https://prettier.io/)
- [Redux](https://react-redux.js.org/) to handle the state, using [ducks](https://github.com/erikras/ducks-modular-redux) structure to reduce the boilerplate and already set up for [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
- Unit tests with [Jest](https://jestjs.io) and [Enzyme](https://airbnb.io/enzyme/)
- Integration test with [Cypress](https://cypress.io)

### Improvements

- Polishing the UI
- Improve Unit Tests
- Validate input fields
- Use some fixtures for E2E tests
- Probably I am forgetting a bunch of them :-)

### Note

There is a problem related to running Cypress using `cypress run`, it might be related to https://github.com/cypress-io/cypress/issues/2069.
For the moment, in order to run the integration tests, run `cypress open` and then _run all specs_

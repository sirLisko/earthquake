# Earthquake [![Netlify Status](https://api.netlify.com/api/v1/badges/5019cd6e-3d34-49b9-ad10-9198ac2b8c07/deploy-status)](https://app.netlify.com/sites/earthquake-events/deploys)

[https://earthquake-events.netlify.com](https://earthquake-events.netlify.com)

## Motivation

I took advantage of this little project to test out a bit more Redux used with/via [React Hooks](https://reactjs.org/docs/hooks-intro.html), I hope I didn't make any mess. Probably a plain Redux implementation (using classes instead of hooks) it would have been easier to test (especially not having to include the `provider` in most of the tests), but it was definitely an experiment worth trying 😅

I also gave a try to the new fancy [Github Actions](https://github.com/features/actions), still in beta (at the moment) but with a lot of potential.

## The stack

- WebApp scaffolded via [Create React App](https://github.com/facebook/create-react-app)
- Check the syntax and formatting of the JS, via [ESLint](http://eslint.org/) and [Prettier](https://prettier.io/)
- [Redux](https://react-redux.js.org/) to handle the state, using [ducks](https://github.com/erikras/ducks-modular-redux) structure to reduce the boilerplate and already set up for [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
- Unit tests with [Jest](https://jestjs.io) and [Enzyme](https://airbnb.io/enzyme/)
- Integration test with [Cypress](https://cypress.io)
- CI using [Github Actions](https://github.com/features/actions)
- Style components with [Emotion](https://emotion.sh) using Macros
- Hosted on [Netlify](https://netlify.com)

### Improvements

- Polishing the UI
- Improve mobile experience
- Improve Unit Tests
- Validate input fields
- Use some fixtures for E2E tests
- Probably I am forgetting a bunch of them :-)

### Note

There is a problem running Cypress using `cypress run`, it might be related to https://github.com/cypress-io/cypress/issues/2069.
For the moment, in order to run the integration tests, run `cypress open` and then _run all specs_

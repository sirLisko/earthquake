import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import filterReducer from './reducers/filter';

const reducers = {
  filter: filterReducer,
};

export const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(),
);

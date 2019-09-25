import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import * as filter from 'reducers/filter';

import ClearFilter from './ClearFilter';

const mockStore = configureStore([]);

describe('ClearFilter Component', () => {
  let wrapper;
  const emptyStore = mockStore({ filter: {} });

  beforeEach(() => {
    jest.spyOn(filter, 'clearFilter');
    wrapper = mount(
      <Provider store={emptyStore}>
        <ClearFilter />
      </Provider>,
    );
  });

  it('should render properly', () => {
    expect(wrapper.find('ClearFilter')).toMatchSnapshot();
  });

  it('should dispatch the correct action', () => {
    wrapper.find('button').simulate('click');
    expect(filter.clearFilter).toHaveBeenCalled();
  });
});

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import * as filter from 'reducers/filter';

import Filter from './Filter';

const mockStore = configureStore([]);

describe('Filter Component', () => {
  let wrapper;
  const emptyStore = mockStore({ filter: {} });

  beforeEach(() => {
    jest.spyOn(filter, 'setFilter');
    wrapper = mount(
      <Provider store={emptyStore}>
        <Filter name="foo" />
      </Provider>,
    );
  });

  it('should render properly', () => {
    expect(wrapper.find('Filter')).toMatchSnapshot();
  });

  it('should dispatch the correct action', () => {
    const fakeEvent = {
      preventDefault: jest.fn(),
      target: {
        value: 'foo',
      },
    };
    wrapper.find('form').simulate('submit', fakeEvent);
    expect(filter.setFilter).toHaveBeenCalled();
    expect(filter.setFilter).toHaveBeenCalledWith({ name: 'foo', value: '' });
  });
});

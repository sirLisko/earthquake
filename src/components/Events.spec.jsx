import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import Events from './Events';

const mockStore = configureStore([]);

describe('Events Component', () => {
  let wrapper;
  const props = {
    events: [
      {
        id: '123',
        properties: { mag: '1', place: 'iAmAPlace', maagType: 'foo' },
      },
      {
        id: '321',
        properties: { mag: '01', place: 'foobar', maagType: 'bar' },
      },
    ],
  };
  const emptyStore = mockStore({ filter: {} });

  beforeEach(() => {
    wrapper = mount(
      <Provider store={emptyStore}>
        <Events {...props} />
      </Provider>,
    );
  });

  it('should render properly', () => {
    expect(wrapper.find('Events')).toMatchSnapshot();
    expect(wrapper.find('tr').length).toBe(2);
  });

  it('should render properly - if no events', () => {
    wrapper = mount(
      <Provider store={emptyStore}>
        <Events events={[]} />
      </Provider>,
    );
    expect(wrapper.find('Events')).toMatchSnapshot();
    expect(wrapper.find('tr').length).toBe(0);
  });

  it('should render properly - with filters', () => {
    const emptyStore = mockStore({
      filter: { name: 'place', value: 'foobar' },
    });
    wrapper = mount(
      <Provider store={emptyStore}>
        <Events {...props} />
      </Provider>,
    );
    expect(wrapper.find('Events')).toMatchSnapshot();
    expect(wrapper.find('tr').length).toBe(1);
  });
});

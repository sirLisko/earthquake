import React from 'react';
import { shallow } from 'enzyme';

import ControlBar from './ControlBar';

describe('ControlBar Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ControlBar />);
  });

  it('should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

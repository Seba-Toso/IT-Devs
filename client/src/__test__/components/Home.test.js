import React from 'react';
import { mount } from 'enzyme';
import Home from '../../pages/Home';

describe('<Home />', () => {
  test('Home: Must render properly.', () => {
    const wrapper = mount(<Home />);
    expect(wrapper).not.toBe(null);
  });

  test('Home: Must have Titles Directions.', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find('.sloganContainer').text()).toEqual(
      'DESARROLLARNUNCA FUETAN FÁCIL.'
    );
  });
});

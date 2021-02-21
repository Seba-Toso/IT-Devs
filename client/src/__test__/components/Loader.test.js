import React from 'react';
import { mount } from 'enzyme';
import Loader from '../../components/Loader/Loader';

describe('<Loader />', () => {
  test('Loader: Must have welcome message to load.', () => {
    const loader = mount(<Loader />);
    expect(loader.find('h1')).not.toBe(null);
  });
});

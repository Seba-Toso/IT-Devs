import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Loader from '../../components/Loader/Loader';

describe('<Loader />', () => {
  test('Loader: Must have welcome message to load.', () => {
    const loader = mount(<Loader />);
    expect(loader.find('h1')).not.toBe(null);
  });
});

describe('<Loader /> Snapshot', () => {
  test('Double check on Loader UI', () => {
    const loader = create(<Loader />);
    expect(loader.toJSON()).toMatchSnapshot();
  })
})

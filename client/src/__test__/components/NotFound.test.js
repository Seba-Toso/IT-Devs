import React from 'react';
import { mount } from 'enzyme';
import NotFound from '../../pages/NotFound';

describe('<NotFound />', () => {
  test('NotFound: Must have Message for Clients.', () => {
    const lost = mount(<NotFound />);
    expect(lost.length).toEqual(1);
  });
  test('NotFound: Must have img to render', () => {
    const lost = mount(<NotFound />);
    expect(lost.find('img')).not.toBe(null);
  });
});

//Closed...

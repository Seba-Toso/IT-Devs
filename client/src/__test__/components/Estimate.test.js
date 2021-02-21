import React from 'react';
import { mount } from 'enzyme';
import Estimate from '../../pages/Estimate';

describe('<Estimate />', () => {
  test('Estimate: Must match Schema FireBase.', () => {
    const db = mount(<Estimate />);
    //console.log(db.debug())
    expect(db.find('Button')).toEqual({});
  });
});

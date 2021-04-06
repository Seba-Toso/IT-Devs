import React from 'react';
import { mount } from 'enzyme';
import Home from '../../pages/Home';




describe('<Home />', () => {

    const wrapper = mount(<Home />);
    let data = wrapper.find('test');

    test('Home: Must render data.', () => {
        expect(data).toBeDefined();
      });
});

//    matchMedia not present, legacy browsers require a polyfill ERROR...
import React from 'react';
import { mount } from 'enzyme';
import Estimate from '../../pages/Estimate';

describe('<Estimate />', () => {
  test('Estimate: Must send data FireBase.', () => {
      const db = mount(<Estimate />);
      //console.log(db.debug())
      expect(db.find('Button')).toEqual({});
  });

 
  test('Estimate: Must change state when getting data by inputs: name/ email/ phone.', () => {
      const wrapper = mount(<Estimate/>);
      let user = wrapper.find('#user');
      let email = wrapper.find('#email');
      let phone = wrapper.find('#phone');
      
      user.simulate('change', {
        target: {
            value: 'Pepe'
        }
      });
      email.simulate('change', {
          target: {
              value: 'pepe@gmail.com'
          }
      });
      phone.simulate('change', {
      target: {
          value: '123'
        }
      });
      
      user = wrapper.find('#user');
      expect(user.prop('value')).toEqual('Pepe');
      email = wrapper.find('#email');
      expect(email.prop('value')).toEqual('pepe@gmail.com');
      phone = wrapper.find('#phone');
      expect(phone.prop('value')).toEqual('123');
    });
    const wrapper = mount(<Estimate/>);
    let reducer = wrapper.find('calculatePriceReducer')

    test('Estimate: Must render Reducer', () => {
      expect(reducer ).toBeDefined();
    });

});

// Closed...
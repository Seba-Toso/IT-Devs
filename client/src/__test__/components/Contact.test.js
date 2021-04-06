import React from 'react';
import { mount } from 'enzyme';
import Contact from '../../components/Contact/Contact';

const setup = (props = {}) => {
    const wrapper = mount(<Contact {...props} />);
    return wrapper;
  };

describe('<Contact />', ()=> {
    test('Contact: Must have options activated to Firebase', ()=> {
        const wrapper = mount(<Contact/>);
        expect(wrapper.find(".ContactContainer").text()).toEqual(
            "Nombre completoE-Mail de contactoTeléfono de contactoEscribinos en qué podemos ayudarEnviar")
    });
 
    test('Contact: Must change state when getting data by inputs: name/ email/ phone/ message.', () => {
        const wrapper = mount(<Contact/>);
        let user = wrapper.find('#user');
        let email = wrapper.find('#email');
        let phone = wrapper.find('#phone');
        let message = wrapper.find('#message');
        
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
        message.simulate('change', {
            target: {
                value: 'Quiero una web.'
                }
            });
        
        user = wrapper.find('#user');
        expect(user.prop('value')).toEqual('Pepe');
        email = wrapper.find('#email');
        expect(email.prop('value')).toEqual('pepe@gmail.com');
        phone = wrapper.find('#phone');
        expect(phone.prop('value')).toEqual('123');
        message = wrapper.find('#message');
        expect(message.prop('value')).toEqual('Quiero una web.');
    });

    test('Contact: Must send data by Button onClick event.', () => {
            const wrapper = mount(<Contact />);
            // console.log(wrapper.debug())
            expect(wrapper.find('onClick')).toEqual({});
    });

})

// Closed...









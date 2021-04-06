import React from 'react';
import { mount } from 'enzyme';
import Contact from '../../components/Contact/Contact';

const setup = (props = {}) => {
    const wrapper = mount(<Contact {...props} />);
    return wrapper;
  };

describe('<Contact />', ()=> {
    test('Contact: Must have options activated to Firebase', ()=> {
        const contact = mount(<Contact/>)
        expect(contact.find(".ContactContainer").text()).toEqual(
            "Nombre completoE-Mail de contactoTeléfono de contactoEscribinos en qué podemos ayudarEnviar")
    })
    
})









// describe('<Contact />', () => {
//     it('Must delete the selected item.', () => {
//       const deleteBtn = jest.fn();
//       const element = mount(<Contact onClick={() => handleDelete()} />);
//       element.find('button').simulate('click');
//       expect(deleteBtn).toHaveBeenCalled();
//     });
//   });


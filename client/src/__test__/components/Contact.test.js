import React from 'react';
import { mount } from 'enzyme';
import Contact from '../../components/Contact/Contact';

describe('<Contact />', ()=>{
    test('Contact: Must have options activated to Firebase', ()=> {
        const contact = mount(<Contact/>)
        expect(contact.find(".ContactContainer").text()).toEqual(
            "NombreE-MailTeléfono de contactoContanos tus problemasEnviar")
    })
})
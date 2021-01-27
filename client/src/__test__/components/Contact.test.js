import React from 'react';
import { mount } from 'enzyme';
import Contact from '../../components/Contact/Contact';

describe('<Contact />', ()=>{
    test('Testeando el Componente Contact', ()=> {
        const contact = mount(<Contact/>)
        expect(contact.find(".ContactContainer").text()).toEqual(
            "Full NameE-MailPhone NumberLet us know your problems")
    })
})
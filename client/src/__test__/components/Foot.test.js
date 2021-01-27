import React from 'react';
import { mount } from 'enzyme';
import Foot from '../../components/Footer/Foot';


describe("<Foot />", ()=>{
    test('Testeando el Componente Foot', ()=>{
        const footer = mount(<Foot/>)
        expect(footer.length).toEqual(1)
    })
})
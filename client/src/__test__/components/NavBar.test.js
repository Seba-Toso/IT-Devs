import React from 'react';
import { mount } from 'enzyme';
import NavBar from '../../components/NavBar/NavBar';

describe('<NavBar />', ()=>{
    test('Testeando el Componente NavBar', ()=> {
        const nav = mount(<NavBar/>)
        expect(nav.find(".navBar").text()).toEqual("ServiciosTecnologíasPortfolioQuienesAboutisActive=")
           
    })
})
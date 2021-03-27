import React from 'react';
import { mount } from 'enzyme';
import Routes from '../../components/Routes/Routes';

describe('<Routes />', ()=>{
    test('Routes: Must have Links activated to navigate.', ()=> {
        const nav = mount(<Routes/>)
        expect(nav.find(".links").text()).toEqual("ServiciosTecnologíasPortfolioQuienesAboutisActive=")
           
    })
})
import React from 'react';
import { mount } from 'enzyme';
import Quienes from '../../pages/Quienes';




describe('<Quienes />', () => {
    test('Quienes: Must render data.', () => {
        const wrapper = mount(<Quienes />);
        let data = wrapper.find('QuienesSomos');
        expect(data).toBeDefined();
    });

    test('Quienes: Must have profile data.', () => {
        const wrapper = mount(<Quienes />);   
        expect(wrapper.length).toEqual(1)
    });

    test('Quienes: Must have properly title.', () =>{
        const wrapper = mount(<Quienes />); 
        let title = wrapper.find('.profileTitle');
        expect(title.text()).toEqual('Somos nuestro Staff')
    });
    test('Quienes: Must show skills list.', () => {
        const wrapper = mount(<Quienes />); 
        let listSkills = wrapper.find('li');
        expect(listSkills).toEqual({});
    });
    
});

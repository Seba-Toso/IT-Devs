import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Foot from '../../components/Footer/Foot';



describe("<Foot />", ()=>{
    test('Footer: Must have data to render.', ()=>{
        const footer = mount(<Foot/>);
        expect(footer.length).toEqual(1);
    })
});

describe("<Foot />  Snapshot", () => {
    test('Double check on Footer UI', () => {
        const footer = create(<Foot />);
        expect(footer.toJSON()).toMatchSnapshot();
    });
});

//Component closed for testing.
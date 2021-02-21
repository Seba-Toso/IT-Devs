import React from 'react';
import { mount } from 'enzyme';
import RoundButton from '../../components/UI/RoundButton/RoundButton';

describe('<RoundButton />', () => {
  test('RoundButton: Must work properly on Click action.', () => {
    const wrapper = mount(<RoundButton />);
    // console.log(wrapper.debug())
    expect(wrapper.find('onClick')).toEqual({});
  });
});

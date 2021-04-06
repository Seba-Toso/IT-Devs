import React from 'react';
import { mount } from 'enzyme';
import ClientsList from '../../components/Backend/ClientsList';



describe('<ClientsList />', () => {
  it('Must delete the selected item.', () => {
    const deleteBtn = jest.fn();
    const element = mount(<ClientsList onClick={() => handleDelete()} />);
    element.find('button').simulate('click');
    expect(deleteBtn).toHaveBeenCalled();
  });
});


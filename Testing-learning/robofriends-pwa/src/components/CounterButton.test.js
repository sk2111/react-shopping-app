import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CounterButton from './CounterButton';

configure({adapter: new Adapter()});

test('counter button',()=>{
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

test('correctly incremets the counter',()=>{
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({count:2});
})
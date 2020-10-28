import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CardList from './CardList';

configure({adapter: new Adapter()});
test('Card component testing', ()=> {
    const mockRobots = [
        {
            id:1,
            name:'John',
            username:'John',
            email:'john@gmail.com'
        }
    ] 
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Card from './Card';

configure({adapter: new Adapter()});
test('Card component testing', ()=> {
     expect(shallow(<Card/>)).toMatchSnapshot();
})
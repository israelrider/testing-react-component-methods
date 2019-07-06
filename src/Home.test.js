import React from 'react';

import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './Home';

configure({
	adapter: new Adapter()
});

describe('home', () => {
	describe('indirectly testing "incrementCounter" through click simulation', () => {
		it('should update the count by 1 when invoked by default', () => {
			const wrapper = shallow(<Home/>);
			expect(wrapper.state('counter')).toBe(0);

			wrapper.find('button').simulate('click');
			expect(wrapper.state('counter')).toBe(1);
		});

		it('should add two to the count when the "two" value is true', () => {
			const wrapper = shallow(<Home two/>);
			expect(wrapper.state('counter')).toBe(0);

			wrapper.find('button').simulate('click');
			expect(wrapper.state('counter')).toBe(2);
		});
	});

	describe('directly invoking the "incrementCounter" method off of component instance', () => {
		it('should update the count by 1 when invoked by default', () => {
			const wrapper = shallow(<Home/>);
			expect(wrapper.state('counter')).toBe(0);

			const instance = wrapper.instance();
			instance.incrementCounter();
			expect(wrapper.state('counter')).toBe(1);
		});

		it('should add two to the counter when the "two" value is true', () => {
			const wrapper = shallow(<Home/>);
			expect(wrapper.state('counter')).toBe(0);

			const instance = wrapper.instance();
			instance.incrementCounter(true);
			expect(wrapper.state('counter')).toBe(2);
		});
	});

	describe('spying on "incrementCounter" method from component instance', () => {
		it('should call incrementCounter when the button is clicked', () => {
			// Passing the "two" prop to test if it is properly passed to onClick handler.
			const wrapper = shallow(<Home two/>);
			expect(wrapper.state('counter')).toBe(0);

			const instance = wrapper.instance();
			jest.spyOn(instance, 'incrementCounter');
			wrapper.find('button').simulate('click');
			expect(instance.incrementCounter).toHaveBeenCalledWith(true);
			expect(wrapper.state('counter')).toBe(2);
		});
	});
});

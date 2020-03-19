import React from 'react';
import { mount, shallow } from 'enzyme';

import Button from './index';

describe('Button', () => {
	it('Renders without crashing', () => {
		shallow(<Button>save</Button>);
	});

	it('Should render children', () => {
		const wrapper = mount(<Button>save</Button>);
		expect(
			wrapper
				.children()
				.at(0)
				.contains('save'),
		).toBe(true);
	});

	it('Should disable button on isDisabled props', () => {
		const wrapper = shallow(<Button isDisabled>save</Button>);
		expect(wrapper.is('[disabled]')).toBe(true);
	});

	it('Should call handler when clicked', () => {
		const spy = jest.fn();
		const wrapper = shallow(
			<Button isDisabled={false} onClick={spy}>
				save
			</Button>,
		);

		wrapper.simulate('click');

		expect(spy).toHaveBeenCalledTimes(1);
	});

	it("Shouldn't call handler when is disabled", () => {
		const spy = jest.fn();
		const wrapper = shallow(
			<Button isDisabled onClick={spy}>
				save
			</Button>,
		);

		wrapper.simulate('click');

		expect(spy).toHaveBeenCalledTimes(0);
	});
});

import React from "react"
import { shallow } from "enzyme"
import App from "./App"

/**
 * 
 */
describe("test suite for social media", () => {
    test('renders learn react link', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toMatchSnapshot();
    });
});

import React from "react"
import { shallow } from "enzyme"
import MenuSidebar from "./MenuSidebar"
import renderer from "react-test-renderer"
import { getMenuItems } from "./MenuSidebar.service"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from "react-dom"

jest.mock("./MenuSidebar.service", () => {
	return {
		getMenuItems: jest.fn()
	}
})

beforeEach(() => {
	
})

describe("Menusidebar group test", () => {
	it("it render's 1 menu-item only", () => {
		getMenuItems.mockImplementation(() => [{ className: "fab fa-earlybirds" }])
		const tree = renderer
			.create(
				<Router>
					<MenuSidebar />
				</Router>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	})

	it("it render's 3 menu-item only", () => {
		getMenuItems.mockImplementation(() => [
			{ className: "fab fa-earlybirds" },
			{ className: "fab fa-earlybirds" },
			{ className: "fab fa-earlybirds" }
		])
		const tree = renderer
			.create(
				<Router>
					<MenuSidebar />
				</Router>)
			.toJSON()
		expect(tree).toMatchSnapshot()
	})

	it("it render's empty router link when notifications is clicked", () => {
		getMenuItems.mockImplementation(() => [
			{ className: "fab fa-earlybirds" },
			{ className: "fab fa-earlybirds" },
			{ className: "fab fa-earlybirds" }
		])
		const tree = renderer
			.create(<Router>
				<MenuSidebar/>
			</Router>)
		console.log(tree.toTree)
	})
})
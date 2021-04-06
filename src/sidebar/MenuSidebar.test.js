import React from "react"
import { shallow } from "enzyme"
import MenuSidebar from "./MenuSidebar"
import renderer from "react-test-renderer"
import { getMenuItems } from "./MenuSidebar.service"


jest.mock('./Service', () => {
	return {
		getMenuItems: jest.fn()
	}
})

beforeEach(() => {
	getMenuItems.mockImplementation(() => [{ className: "fab fa-earlybirds" }])
})

describe("Menusidebar group test", () => {
	it("it render's 3 menu-items only", () => {
		console.log(getMenuItems)
		const items =  getMenuItems();
		console.log(items)

		const tree = renderer
		.create(<MenuSidebar />)
		.toJSON();
		  expect(tree).toMatchSnapshot();
	})
})
import React from "react"
import { shallow } from "enzyme"
import FeedList from "./FeedList"
import { getUserFeed } from "./Post.service"
import UserModel from "../models/UserModel"
import { PostModel } from "./PostModel"
import renderer from "react-test-renderer"

jest.mock("./Post.service", () => {
	return {
		getUserFeed: jest.fn()
	}
})

describe("FeedList test group", () => {
	test("FeedList render's 3 feed", () => {
		getUserFeed.mockImplementation(() => [
			new PostModel(
				new UserModel("1", "john", "doe"),
				"john doe first tweet",
				"john doe first title tweet",
				"john doe first title tweet",
				"1"
			),
			new PostModel(
				new UserModel("1", "jane", "doe"),
				"jane doe first tweet",
				"jane doe first title tweet",
				"jane doe first title tweet",
				"3"
			)
		])
		const tree = renderer
			.create(<FeedList />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	})
	renderer
})
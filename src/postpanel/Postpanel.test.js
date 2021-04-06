import React from "react"
import { shallow } from "enzyme"
import PostPanel from "./PostList"
import { User } from "../models/User.models"

describe("Postpanel test group", () => {
	test("Postpanel test #1", () => {
		const wrapper = shallow(<PostPanel user={new User(123, "", "")}/>)
	})
})
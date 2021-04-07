import UserModel from "../models/UserModel"
import { PostModel } from "./PostModel"
import fakePosts from "./Post.service.json"

/**
 * Performs http rest api call, API TBD later
 * @param userid 
 * @returns 
 */
export const getUserFeed = (userid: string): PostModel[] => {
	return fakePosts.data.map(x => {
		return new PostModel(
			new UserModel(x.user.id, x.user.firstname, x.user.lastname),
			x.content,
			x.title,
			x.subtitle,
			x.id
		)
	})
}
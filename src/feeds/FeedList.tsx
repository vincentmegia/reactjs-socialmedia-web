import "./FeedList.css"
import React, { useState } from "react"
import DebugRender from "../tools/DebugRender"
import { getUserFeed } from "./Post.service"
import { IPostModel } from "./PostModel"
import Post from "./Post"
import FeedListHeader from "./FeedListHeader"

export interface IFeedListProps {
    controlid: number
}

/**
 * Control that shows the user feed
 * @param param
 * @returns 
 */
const FeedList = ({ controlid }: IFeedListProps) => {
	const [posts] = useState<IPostModel[]>(getUserFeed("iamstupendous"))

	return (
		<div id="postlist-container" style={{ backgroundColor: "blue" }}>
			<ul className="postpanelliststyle">
				<FeedListHeader controlid={1} />
				{ posts.map(post => <Post key={post.id} model={post} /> ) }
			</ul>
			<DebugRender />
		</div>
	)
}

export default FeedList
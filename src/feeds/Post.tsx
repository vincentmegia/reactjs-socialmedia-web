import React from "react"
import { Card } from "react-bootstrap"
import { IPostModel } from "./PostModel"

export interface IPostProps {
	model: IPostModel
}

const Post = ({model}: IPostProps) => {
	return <li className="postpanellistitem">
	<Card style={{ width: "100%", marginBottom: "10px" }}>
		<Card.Body>
			<Card.Title>{model.content}</Card.Title>
			<Card.Subtitle className="mb-2 text-muted">{model.subtitle}</Card.Subtitle>
			<Card.Text>{model.content}</Card.Text>
		</Card.Body>
	</Card>
</li>
}

export default Post
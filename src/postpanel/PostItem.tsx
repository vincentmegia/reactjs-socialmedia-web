import { Card } from "react-bootstrap"
import { IPost } from "./Post.models"

const PostItem = (post: IPost) => {
	return <li>
	<Card style={{ width: "100%", marginBottom: "10px" }}>
		<Card.Body>
			<Card.Title>{post.content}</Card.Title>
			<Card.Subtitle className="mb-2 text-muted">{post.subtitle}</Card.Subtitle>
			<Card.Text>{post.content}</Card.Text>
		</Card.Body>
	</Card>
</li>
}

export default PostItem
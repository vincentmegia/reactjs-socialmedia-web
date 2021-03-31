import React, { memo, PropsWithChildren, useContext, useEffect } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { ServiceContext } from "../services/service-context"
import DebugRender from "../tools/DebugRender"
import { IPostPanelProps } from "./postpanel-types"
import "./PostPanel.css"

const PostPanel = ({ controlid, user }: IPostPanelProps) => {
	const { postService } = useContext(ServiceContext)

	useEffect(() => {
		// postService.getByUserId("1")
	})

	return (
		<div id="postpanel" style={{ backgroundColor: "blue" }}>
			<ul className="postpanelliststyle">
				<li className="postpanellistitem">
					<Container>
						<Row>
							<Col sm={11}>Latest Tweeze, postService test: {postService.toString()} </Col>
							<Col sm={1}>
								<i className="fas fa-splotch fa-2x"></i>
							</Col>
						</Row>
					</Container>
				</li>
				<li>
					<Card style={{ width: "100%", marginBottom: "10px" }}>
						<Card.Body>
							<Card.Title>
								{/* {posts[0].title} */}
							</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Card Subtitle
							</Card.Subtitle>
							<Card.Text>
								userid: {user.id}
                                Some quick example text to build on the card`s
                                title and make up the bulk of the card`s
                                content.
							</Card.Text>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</li>
				<li>
					<Card style={{ width: "100%" }}>
						<Card.Body>
							<Card.Title>
								rops.postPanelProps.posts[0].title
							</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Card Subtitle
							</Card.Subtitle>
							<Card.Text>
								Some quick example text to build on the card`s
								title and make up the bulk of the card`s
								content.
							</Card.Text>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</li>
			</ul>
			<DebugRender />
		</div>
	)
}

const equals = (prevProps: Readonly<PropsWithChildren<IPostPanelProps>>,
	nextProps: Readonly<PropsWithChildren<IPostPanelProps>>) => {
	return prevProps.controlid === nextProps.controlid
}

// export default memo(PostPanel, equals)
export default memo(PostPanel)
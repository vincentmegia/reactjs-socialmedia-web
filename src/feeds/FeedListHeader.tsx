import React from "react"
import { memo, PropsWithChildren } from "react"
import { Col, Container, Row } from "react-bootstrap"

export interface IFeedListHeaderProps {
	controlid: number
}

const equals = (prevProps: Readonly<PropsWithChildren<IFeedListHeaderProps>>,
	nextProps: Readonly<PropsWithChildren<IFeedListHeaderProps>>) => {
	return prevProps.controlid === nextProps.controlid
}

const FeedListHeader = ({controlid}: IFeedListHeaderProps) => {
	return <li className="postpanellistitem">
		<Container>
			<Row>
				<Col sm={11}><h3>Home</h3></Col>
				<Col sm={1}>
					<i className="fas fa-splotch fa-2x"></i>
				</Col>
			</Row>
		</Container>
	</li>
}

export default memo(FeedListHeader, equals)
import "./App.css"
import React from "react"
import FeedList from "./feeds/FeedList"
import { Col, Container, Row } from "react-bootstrap"
import MenuSidebar from "./sidebar/MenuSidebar"
import WidgetSidebar from "./sidebar/WidgetSidebar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import DebugRender from "./tools/DebugRender"


const App = () => {
	const onMenuEvent = () => {
	}

	return (
		<Router>
			<Switch>
			<Route exact path="/">
				<Container fluid>
					<Row xl={12}>
						<Col xs={{ span: 3, offset: 1 }}>
							<MenuSidebar
								controlid={1}
								onMenuCallback={onMenuEvent} />
						</Col>
						<Col xl={5}>
							<FeedList controlid={2} />
						</Col>
						<Col>
							<WidgetSidebar />
						</Col>	
					</Row>
				</Container>
			</Route>
			<Route path="/notifications">
			<Container fluid>
					<Row xl={12}>
						<Col xs={{ span: 3, offset: 1 }}>
							<MenuSidebar
								controlid={1}
								onMenuCallback={onMenuEvent} />
						</Col>
						<Col xl={5}>
							<h2>menusidebar</h2>
						</Col>
						<Col>
							<WidgetSidebar />
						</Col>	
					</Row>
				</Container>
			</Route>
			</Switch>
		</Router>
	)
}

export default App

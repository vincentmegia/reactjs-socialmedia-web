import React, { useCallback, useState } from "react"
// import "App.css"
import PostList from "./postlist/PostList"
import { Col, Container, Row } from "react-bootstrap"
import MenuSidebar from "./sidebar/MenuSidebar"
import WidgetSidebar from "./sidebar/WidgetSidebar"
import { User } from "./models/User.models"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import DebugRender from "./tools/DebugRender"


const App = () => {
	const [user, setUser] = useState(new User(new Date().getMilliseconds(), "Vince", "Megia", "", ""))
	const onMenuEvent = () => {
		const newUser = new User(new Date().getMilliseconds(), user.firstname, user.lastname, "", "")
		console.log(newUser)
		setUser(newUser)
	}

	return (
		<Router>
			<Switch>
				<Container fluid>
					<Row xl={12}>
						<Col xs={{ span: 3, offset: 1 }}>
							<MenuSidebar
								controlid={1}
								onMenuCallback={onMenuEvent} />
						</Col>
						<Route exact path="/">
							<Col xl={5}>
								<PostList controlid={2}
									user={user} />
							</Col>
							<Col>
								<WidgetSidebar />
							</Col>
						</Route>
					</Row>
				</Container>
			<DebugRender />
			</Switch>
		</Router>
	)
}

export default App

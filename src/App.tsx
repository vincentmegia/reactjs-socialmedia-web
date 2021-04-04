import React, { useState } from "react"
// import "App.css"
import PostPanel from "./postpanel/PostPanel"
import { Col, Container, Row } from "react-bootstrap"
import MenuSidebar from "./sidebar/MenuSidebar"
import WidgetSidebar from "./sidebar/WidgetSidebar"
import { serviceContext, ServiceContext } from "./services/service-context"
import { User } from "./models/user"
import { BrowserRouter as Router } from "react-router-dom"
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
			<ServiceContext.Provider value={serviceContext}>
				<Container fluid>
					<Row xl={12}>
						<Col xs={{ span: 3, offset: 1 }}>
							<MenuSidebar
								controlid={1}
								onMenuCallback={onMenuEvent} />
						</Col>
						<Col xl={5}>
							<PostPanel
								controlid={2}
								user={user} />
						</Col>
						<Col>
							<WidgetSidebar />
						</Col>
					</Row>
				</Container>
			</ServiceContext.Provider>
			<DebugRender />
		</Router>
	)
}

export default App

import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import PostPanel from './postpanel/PostPanel'
import { Col, Container, Row } from 'react-bootstrap'
import MenuSidebar from './sidebar/MenuSidebar'
import WidgetSidebar from './sidebar/WidgetSidebar'
import { serviceContext, ServiceContext } from './services/service-context';
import { IUser } from './user/user'
import { IPostPanelProps } from './postpanel/postpanel-types'
import {
    BrowserRouter as Router, Link, Route, Switch
} from 'react-router-dom';
import About, { About1 } from './about/About'


const App = () => {
    const user: IUser = {
        id: "123",
        lastname: "john",
        firstname: "wick"
    }

    return (
        <Router>
            <ServiceContext.Provider value={serviceContext}>
                <Container fluid>
                    <Row xl={12}>
                        <Col xs={{ span: 3, offset: 1 }}>
                            <MenuSidebar />
                        </Col>
                        <Col xl={5}>
                            <PostPanel 
                                user={user}
                                serviceContext={serviceContext}/>
                        </Col>
                        <Col>
                            <WidgetSidebar />
                        </Col>
                    </Row>
                </Container>
            </ServiceContext.Provider>

            <Switch>
                <Route path="/:id" children={<About/>} />
                {/* <Route path="/home/:body" children={<About1/>} /> */}
            </Switch>
        </Router>
    )
}

export default App

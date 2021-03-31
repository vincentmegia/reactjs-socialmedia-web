import React, { PropsWithChildren, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import PostPanel from './postpanel/PostPanel'
import { Col, Container, Row } from 'react-bootstrap'
import MenuSidebar from './sidebar/MenuSidebar'
import WidgetSidebar from './sidebar/WidgetSidebar'
import { serviceContext, ServiceContext } from './services/service-context';
import { IUser, User } from './models/user';
import {
    BrowserRouter as Router, Link, Route, Switch
} from 'react-router-dom';
import About from './about/About'
import DebugRender from './tools/DebugRender'



const App = () => {
    const [user, setUser] = useState(new User(new Date().getMilliseconds(), "Vince", "Megia", "", ""));

    const onMenuEvent = () => {
        const newUser = new User(new Date().getMilliseconds(), user.firstname, user.lastname, "", "");
        console.log(newUser);
        setUser(newUser);
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

            <Switch>
                <Route path="/:id" children={<About/>} />
                {/* <Route path="/home/:body" children={<About1/>} /> */}
            </Switch>
            <DebugRender/>
        </Router>
    )
}

export default App

import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Button, Col, Container, Row } from 'react-bootstrap';

import Sidebar from './features/sidebar/Sidebar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PostPanel from './features/postpanel/PostPanel';

function App() {
    return (
        <Container fluid>
            <Row xl={12}>
                <Col xs={{ span: 3, offset: 1}}><Sidebar/></Col>
                <Col xl={5}><PostPanel/></Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
}

export default App;

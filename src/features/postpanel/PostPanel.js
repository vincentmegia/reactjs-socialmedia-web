import { Card, Col, Container, Row, Toast } from 'react-bootstrap';
import './PostPanel.css';

const PostPanel = () => {
    return(
        <div id="postpanel" style={{backgroundColor: 'blue'}}>
            <ul className="postpanelliststyle">
                <li className="postpanellistitem">
                    <Container>
                        <Row>
                            <Col sm={11}>Latest Tweeze</Col>
                            <Col sm={1}><i class="fas fa-splotch fa-2x"></i></Col>
                        </Row>
                    </Container>
                </li>
                <li className="postpanellistitem">
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                </li>
                <li className="postpanellistitem">
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                </li>
                <li>
                <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
                </li>
            </ul>
        </div>
    )
}

export default PostPanel;
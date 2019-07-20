import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button, Container } from 'react-bootstrap';
import './Home.css';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Jumbotron>
                    <h2>Welcome brolog</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique. Adipiscing elit duis tristique sollicitudin nibh.</p>
                </Jumbotron>
                <Link to="/about">
                <Button bsStyle="primary">About</Button>
                </Link>
            
            <Row className="show-grid text-center">
                <Col xs={12} sm={4} lg={4} className="person-wrapper">
                <Image src="assets/ptm.jpg" className="profile-pic" />
                <h3>Pritam</h3>
                <p>One normal web developer</p>
                </Col>
                <Col xs={12} sm={4} lg={4} className="person-wrapper">
                <Image src="assets/man.jpeg" className="profile-pic" />
                <h3>Ramu</h3>
                <p>One normal web developer</p>
                </Col>
                <Col xs={12} sm={4} lg={4} className="person-wrapper">
                <Image src="assets/ptm.jpg" className="profile-pic" />
                <h3>Pritam</h3>
                <p>One normal web developer</p>
                </Col>
            </Row>
            </Container>
         );
    }
}
 
export default Home;
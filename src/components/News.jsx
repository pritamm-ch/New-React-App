import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './News.css';
class News extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Image src="assets/big-one.jpg" className="header-image" />
                <Container>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <p>Sed adipiscing diam donec adipiscing tristique.</p>
                            <p> Adipiscing elit duis tristique sollicitudin nibh.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src="assets/one.jpg" />
                            <p>Sed adipiscing diam donec adipiscing tristique.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default News;
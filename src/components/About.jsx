import React, { Component } from 'react';
import {Container, Col, Image} from 'react-bootstrap';
import './About.css';
class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Image src="assets/big-one.jpg" className="header-image" />
                <Container>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/man.jpeg" className="about-profile-pic" rounded />
                        <h3>Ramu</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <p>Sed adipiscing diam donec adipiscing tristique.</p>
                            <p> Adipiscing elit duis tristique sollicitudin nibh.</p>
                    </Col>
                </Container>
            </div>
         );
    }
}
 
export default About;
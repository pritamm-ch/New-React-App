import React, { Component } from 'react';
import { Navbar, Nav, NavItem , NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'
class CustomNavbar extends Component {
    render() { 
        return ( 
            <Navbar>
            
            <Navbar.Brand href="/">Chill Life</Navbar.Brand>
            <Navbar.Toggle  />
            
            <Navbar.Collapse>
              <Nav className="justify-content-center" id="navRight">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
         )
    }
}
 
export default CustomNavbar;
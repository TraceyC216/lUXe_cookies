import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

function Header() {
    return (
            <div className="nav">
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to="/">lUXe cookies</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <NavDropdown title="Cookies" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to="/traditional">Traditional Cookies</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to="/allergy">
                Allergy Sensitive Cookies</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to="/decorated">Hand Decorated Cookies</Link></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
          </Nav>
        
      
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    
            </div>
    );
} 

export default Header;
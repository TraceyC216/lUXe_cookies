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
        <Link className="navbar-brand" to="/">lUXe cookies</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cookies" id="basic-nav-dropdown">
            <Link className="dropdown-item" to="/traditional">Traditional Cookies</Link>
            <Link className="dropdown-item" to="/allergy">
                Allergy Sensitive Cookies</Link>
              <Link className="dropdown-item" to="/decorated">Hand Decorated Cookies</Link>
            </NavDropdown>
            <Link className="nav-link" to="/about">About</Link>
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
            <Button type="submit" className="btn btn-info">Submit</Button>
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
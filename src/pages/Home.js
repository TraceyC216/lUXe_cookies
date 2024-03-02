import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Home() {  
  
      return (
        <div className="welcome">
        <div id="hero">
          <h2> Welcome to</h2>
        <h1>l<strong>UX</strong>e cookies</h1>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="What are you looking for today?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </div>
        <div className="row">
        <div className="column">
          <img src="https://i.imgur.com/nQ6B1Ot.jpg" alt="cookie cake" height="350" width="350"/>
        </div>
        <div className="column">
          <img src="https://i.imgur.com/z127iAF.jpg" height="350" width="350"/>
        </div>
        <div className="column">
          <img src="https://i.imgur.com/9aJIHV2.jpg" height="350" width="350"/>
        </div>
        <div className="column">
         <img src="https://i.imgur.com/griagH9.jpg" height="350" width="350"/>
        </div>
        </div>
        </div>
      );
    }


export default Home;




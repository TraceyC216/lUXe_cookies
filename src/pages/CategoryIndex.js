import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import axios from "axios";
import { useParams, Link } from "react-router-dom";


function CategoryIndex(props) {
  const { category } = useParams();
  const [filteredCookies, setFilteredCookies] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_RENDER_URL + category + '/')
      .then((response) => {
        setFilteredCookies(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!filteredCookies) {
    return <h1>loading</h1>;
  }
  return (
    <>
     
          <section id="shop" className="block shop-block">
            <Container fluid>
            <h1>{category}</h1>
              <Row>
              {filteredCookies.map((cookie) => {
                return (
                
                <Col sm={4} key={cookie.id}>
                  <div className="holder">
                    <Card>
                      <Card.Img class="card-img-top" variant="top" src={cookie.image} />
                      <Card.Body>
                        <Card.Title>{cookie.name}</Card.Title>
                        <Card.Text>{cookie.description}</Card.Text>
                        <Link to={`/category/${cookie.id}`} className='btn btn-primary'>Learn More</Link>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              
                 );
                })}
              </Row>
            </Container>
          </section>
       {" "}
    </>
  );
}
export default CategoryIndex;

import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const axios = require("axios");

class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      corona: null
    };
  }

  componentDidMount() {
    axios.get("http://192.168.2.24:8082/movies").then((data) => {
      console.log(data.data);
      this.setState({
        corona: data.data,
      });
    });
  }

  render() {
    return (
      <Container fluid className="main-container">
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            {this.state.corona != null
              ? this.state.corona.map((c) => {
                  console.log(c);
                  return (
                    <Card style={{ margin:'auto' }}>
                      <Card.Body>
                        <Card.Title>{c.name}</Card.Title>
                        <Card.Text>
                          <p>
                            {c.name} movie has {c.rating} rating
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })
              : 'No Movies Found'
            }
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    );
  }
}

export default Movie;

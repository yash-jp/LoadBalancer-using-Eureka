import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import './mystyle.styles.css';
const axios = require("axios");


class Corona extends React.Component {
  constructor() {
    super();
    this.state = {
      corona: null
    };
  }

  componentDidMount() {
    axios.get("http://192.168.2.24:8082/corona").then((data) => {
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
                    <Card className='mycard'>
                      <Card.Body>
                        <Card.Title>{c.country}</Card.Title>
                        <Card.Text>
                          <p>
                            {c.country} has {c.cases} of cases
                          </p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })
              : 'No Corona Found'
            }
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Container>
    );
  }
}

export default Corona;

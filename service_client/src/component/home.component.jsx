import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.styles.css';


class Home extends React.Component {
  constructor() {
    super();
  }

  onMovieClicked = ()=>{
    window.location="/movie";
  }

  onCoronaClicked = ()=>{
    window.location="/corona";
  }

  render() {
    return(
      <Container fluid className='main-container'>
      <Row>
      <Col sm={4}></Col>  
      <Col sm={4}>
      <Button className='btn' onClick={this.onMovieClicked} variant="primary" block>Movies</Button>
      <Button className='btn' onClick={this.onCoronaClicked} variant="dark" block>Corona</Button>
      </Col>
      <Col sm={4}></Col>  
      </Row>
    </Container>
    );
  }
}

export default Home;
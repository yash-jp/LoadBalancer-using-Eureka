import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import Home from '../src/component/home.component';
import Movie from '../src/component/movies.component';
import Corona from '../src/component/corona.component';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Eureka Services Using Spring</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/movie">Movie</Nav.Link>
      <Nav.Link href="/corona">Corona</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    <Router>
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/movie">
      <Movie />
    </Route>
    <Route exact path="/corona">
      <Corona />
    </Route>
  </Switch>
  </Router>
  </>
  );
}

export default App;

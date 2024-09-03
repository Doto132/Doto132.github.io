import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';


const Home: React.FC = () => {
  return (
    <div>
    <Navbar className='navbar-custom' bg="dark" variant="dark">
      <Navbar.Brand className="ml-auto navbar-brand-custom" href="/">MyWebsite</Navbar.Brand>
      <Nav className="navbar-nav-custom">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
      </Nav>
    </Navbar>
    <div className="container mt-3">
      <h1>Welcome to the Home Page</h1>
      <p>tweaked with the lappy.</p>
      <Button variant="primary">Click Me</Button>
    </div>
  </div>
  );
};

export default Home;
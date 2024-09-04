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
        <Navbar.Brand className="ml-auto navbar-brand-custom" href="/">fernadussy</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Nav.Link href="/Projects">Projects</Nav.Link>
        </Nav>
      </Navbar>
      <div className="text-home">
        <h1>Welcome to the Home Page</h1>
        <p>tweaked with the lappy.</p>
      </div>
    </div>
  );
};

export default Home;
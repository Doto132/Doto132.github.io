import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import selfPhoto from '../images/selfphoto.jpg';

const About: React.FC = () => {
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
      <img className='selfPhoto' src={selfPhoto} alt="Photo" />
      <h1 className='larger-font'>
        Hi I am Edward Wu, a Data Science Major from UC Berkeley! Some things that I am 
        interested in are programming, undestanding the story behind the data, and cooking!
        Some of my other interests include Lion Dance and crafting up new or existing cocktails
        with my friends! I also enjoy exploring new areas and trying out different cuisines.
      </h1>
    </div>
  );
};

export default About;
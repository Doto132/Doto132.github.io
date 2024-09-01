import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div>
      <h1>About Page yuuup</h1>
      <p>This is a simple example of an About component.</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>This is a about page</h1>
      <h2>
        Go to <Link to="/">home</Link> page
      </h2>
    </div>
  );
}

export default About;

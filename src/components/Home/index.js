import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>This is a home page</h1>
      <h2>
        Go to <Link to="/about">about</Link> page
      </h2>
    </div>
  );
}

export default Home;

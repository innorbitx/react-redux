import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="bg-warning p-5">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn bg-info p-2 text-dark bg-opacity-75 btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h1>Medium</h1>
        </Link>
        <button className="navbar-toggler" type="button"   data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto"> 
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/our-story">
                Our Story</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/membership">
                Membership </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/write">
                Write </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/sign-in">
                Sign in  </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary" to="https://www.google.com/">
                Get Started </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;

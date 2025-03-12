import React from 'react';
import logo from '../assets/logo.jpg';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm fixed-top">
      <div className="container">
        {/* Logo à gauche */}
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
          <img src={logo} alt="Logo" width="40" height="40" className="me-2" />
          ResumeAI
        </a>

        {/* Bouton pour mobile
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Liens centrés */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>

          {/* Boutons à droite */}
          <div className="d-flex">
            <button className="btn btn-outline-dark me-2">Login</button>
            <button className="btn btn-dark">Sign Up Free</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

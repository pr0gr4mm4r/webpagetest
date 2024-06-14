import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import corporatelogo from './chess-26779_1280-2 Kopie 3.png';

export default function Navigationbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#000', width: '100%' }}>
      <Link className="navbar-brand d-flex align-items-center" to="/home">
        <img src={corporatelogo} width="27" height="35" className="d-inline-block align-top ms-2 me-2" alt="" />
        BaurDigital
      </Link>
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
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div
        className="collapse"
        id="navbarNavDropdown"
        style={{
          position: 'absolute',
          top: '56px',
          right: '0',
          width: '200px', // Adjusted width for better visibility
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 9999,
          borderRadius: '0 0 0 10px', // Optional: for better aesthetics
        }}
      >
        <ul className="navbar-nav" style={{ flexDirection: 'column', alignItems: 'flex-end', paddingRight: '1rem' }}>
          <li className="nav-item">
            <Link className="nav-link" to="/home" style={{ textAlign: 'right' }}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" style={{ textAlign: 'right' }}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" style={{ textAlign: 'right' }}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

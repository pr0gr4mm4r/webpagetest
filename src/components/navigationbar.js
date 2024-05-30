import React from 'react'
import { signal } from '@preact/signals-react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import corporatelogo from './chess-26779_1280-2 Kopie 3.png';

export const test = signal("ee");

export default function Navigationbar() {
  test.value = "haha";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#000', width: '100%' }}>
      <Link className="navbar-brand d-flex align-items-center" to="/home">
        <img src={corporatelogo} width="35" height="35" className="d-inline-block align-top ms-2 me-2" alt="" />
        BaurDigital
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
    </nav>
  );
}

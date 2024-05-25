import React from 'react'
import { Signal, signal } from '@preact/signals-react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import corporatelogo from './Designer.png'

export const test = signal("ee")

export default function Site() {
  //console.log(test.value)
  test.value = "haha"
  //console.log(test.value)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand d-flex align-items-center" to="/home">
      <img src={corporatelogo} width="35" height="35" className="d-inline-block align-top ms-2 me-2" alt=""/>
      Raub Media
    </Link>
    <Link className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </Link>
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
  )
}
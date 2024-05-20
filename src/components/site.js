import React from 'react'
import { Signal, signal } from '@preact/signals-react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './bootstrapnavbarpic.gif'
import { Link } from 'react-router-dom';

export const test = signal("ee")

export default function Site() {
  //console.log(test.value)
  test.value = "haha"
  //console.log(test.value)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand d-flex align-items-center" href="#">
      <img src={logo} width="30" height="30" className="d-inline-block align-top ms-2 me-2" alt=""/>
      David Raub
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/leistungen">Leistungen</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/pricing">Pricing</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Disabled</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/personal">About me </Link>
        </li>
      </ul>
    </div>
  </nav>

  )
}

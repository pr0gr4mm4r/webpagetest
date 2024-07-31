import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import corporatelogo from './chess-26779_1280-2 Kopie 3.png';
import { useTranslation } from 'react-i18next';
import usa from './usa.png';
import germany from './germany.png';

export default function Navigationbar() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const getLanguageButtonStyle = (language) => {
    return {
      border: `2px solid ${i18n.language === language ? '#fff' : '#495057'}`,
      borderRadius: '2px',
      transition: 'border 0.3s ease',
      marginRight: language === 'de' ? '10px' : '0'
    };
  };

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
            <Link className="nav-link" to="/home">{t("Home")}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">{t("Contact")}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{t("Info")}</Link>
          </li>
          <li className="nav-item">
            <div className="nav-link" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <img
                src={germany}
                alt="Deutsch"
                width="30"
                height="20"
                style={getLanguageButtonStyle('de')}
                onClick={() => changeLanguage('de')}
              />
              <img
                src={usa}
                alt="English"
                width="30"
                height="20"
                style={getLanguageButtonStyle('en')}
                onClick={() => changeLanguage('en')}
              />
            </div>
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

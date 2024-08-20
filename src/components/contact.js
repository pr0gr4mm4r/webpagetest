import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false); // Zustand für das Popup

  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_8a2car8', 'template_jrw2wwf', formData, 'Cy0typgzHmK_BUfzB')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowSuccess(true); // Popup anzeigen
      }, (error) => {
        console.error('FAILED...', error);
        alert(t('Nachricht konnte nicht gesendet werden'));
      });
  };

  const handleClosePopup = () => {
    setShowSuccess(false); // Popup schließen
  };

  return (
    <div>
      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '2em',
            borderRadius: '10px',
            textAlign: 'center',
            maxWidth: '400px',
            width: '100%'
          }}>
            <div style={{
              fontSize: '3em',
              color: 'green',
              marginBottom: '0.5em'
            }}>
              ✓
            </div>
            <h2 style={{ margin: '0.5em 0', fontSize: '1.5em', color: '#333' }}>{t("Anfrage erfolgreich versendet!")}</h2>
            <p style={{ margin: '1em 0', fontSize: '1em', color: '#666' }}>{t("Ihre Anfrage wird so bald wie möglich bearbeitet")}</p>
            <button onClick={handleClosePopup} style={{
              marginTop: '1em',
              padding: '0.5em 2em',
              backgroundColor: 'green',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1em'
            }}>
              {t('Weiter')}
            </button>
          </div>
        </div>
      )}

      <div className="container" style={{
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '2em',
        borderRadius: '10px',
        marginTop: '2em',
        maxWidth: '600px',
        border: '1px solid white'
      }}>
        <h2 style={{ color: 'white' }}>{t("Contact")}</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="firstName" className="form-label" style={{ color: 'white' }}>{t("First Name")}</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', border: '1px solid #ccc' }}
              />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label" style={{ color: 'white' }}>{t("Last Name")}</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', border: '1px solid #ccc' }}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ color: 'white' }}>{t("Email Address")}</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', border: '1px solid #ccc' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label" style={{ color: 'white' }}>{t("Message")}</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', border: '1px solid #ccc' }}
            ></textarea>
          </div>
          <button style={{ border: '1px solid white' }} type="submit" className="btn btn-dark">{t("Send")}</button>
        </form>
      </div>
    </div>
  );
}

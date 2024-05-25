import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

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
        alert('Nachricht erfolgreich gesendet!');
      }, (error) => {
        console.error('FAILED...', error);
        alert('Nachricht konnte nicht gesendet werden.');
      });
  };

  return (
    <div className="container" style={{
      background: 'rgba(0, 0, 0, 0.75)', 
      padding: '2em', 
      borderRadius: '10px', 
      marginTop: '2em',
      maxWidth: '600px' // Maximale Breite des Containers reduziert
    }}>
      <h2 style={{ color: 'white' }}>Kontakt</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="firstName" className="form-label" style={{ color: 'white' }}>Vorname</label>
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
            <label htmlFor="lastName" className="form-label" style={{ color: 'white' }}>Nachname</label>
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
          <label htmlFor="email" className="form-label" style={{ color: 'white' }}>E-Mail-Adresse</label>
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
          <label htmlFor="message" className="form-label" style={{ color: 'white' }}>Nachricht</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="6" // Höhe des Textbereichs erhöht
            value={formData.message}
            onChange={handleChange}
            required
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', border: '1px solid #ccc' }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-dark">Absenden</button>
      </form>
    </div>
  );
}

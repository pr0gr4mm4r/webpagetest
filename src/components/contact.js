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
        alert('Message sent successfully!');
      }, (error) => {
        console.error('FAILED...', error);
        alert('Message could not be sent.');
      });
  };

  return (
    <div className="container" style={{
      background: 'rgba(0, 0, 0, 0.8)',
      padding: '2em',
      borderRadius: '10px',
      marginTop: '2em',
      maxWidth: '600px', // Reduced the maximum width of the container
      border: '1px solid white'
    }}>
      <h2 style={{ color: 'white' }}>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="firstName" className="form-label" style={{ color: 'white' }}>First Name</label>
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
            <label htmlFor="lastName" className="form-label" style={{ color: 'white' }}>Last Name</label>
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
          <label htmlFor="email" className="form-label" style={{ color: 'white' }}>Email Address</label>
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
          <label htmlFor="message" className="form-label" style={{ color: 'white' }}>Message</label>
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
        <button style={{ border: '1px solid white' }} type="submit" className="btn btn-dark">Send</button>
      </form>
    </div>
  );
}

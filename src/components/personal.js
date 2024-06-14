import React from 'react';
import logo from './webseitenportrait.jpeg';
import { useNavigate } from 'react-router-dom';

export default function Personal() {
  const navigate = useNavigate();

  const handleExperienceMoreClick = () => {
    navigate('/contact');
  };

  return (
    <div className="container" style={{
      background: 'rgba(0, 0, 0, 0.75)',
      padding: '2em',
      borderRadius: '10px',
      marginTop: '2em',
      maxWidth: '100%', // Ensure the container doesn't exceed the screen width
      overflowX: 'hidden', // Prevent horizontal scrolling
      overflowY: 'hidden', // Allow vertical scrolling only if necessary
      border: '1px solid white'
    }}>
      <div className="row align-items-center">
        <div className="col-md-4 col-12" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <img src={logo} className="img-fluid" alt="Portrait von David" style={{
            borderRadius: '10px',
            border: '1px solid white' // Black solid border exactly on the edge of the image
          }} />
        </div>
        <div className="col-md-8 col-12">
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)', // Additional transparent black box
            padding: '1em',
            borderRadius: '10px',
            border: '1px solid white'
          }}>
            <h2>About Me</h2>
            <p>Hello, my name is David and I am a professional system administrator. I earned my Bachelor's degree in "Applied Computer Science" from DHBW Karlsruhe. In addition to my regular work, I also offer my services as a freelancer. I have experience in various areas of IT infrastructure and administration.</p>
            <p>My passion for technology and my commitment to a reliable and efficient IT infrastructure drive me to continuously expand my knowledge and take on new challenges.</p>
            <p>If you are interested in my services or have any questions, please do not hesitate to contact me. I look forward to working with you!</p>
            <button style={{ border: '1px solid white' }} className='btn btn-dark' onClick={handleExperienceMoreClick}>Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}
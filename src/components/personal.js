import React from 'react'
import logo from './webseitenportrait.jpeg'
import { useNavigate } from 'react-router-dom';


export default function Personal() {
  const navigate = useNavigate();

  const handleExperienceMoreClick = () => {
    navigate('/contact');
  };
  return (

    <div className="container" style={{
      background: 'rgba(0, 0, 0, 0.8)',
      padding: '2em',
      borderRadius: '10px',
      marginTop: '2em'
    }}>
      <div className="row">
        <div className="col-md-4">
          <img src={logo} className="img-fluid" alt="Portrait von David" style={{ marginTop: '20px' }} />
        </div>
        <div className="col-md-8" style={{ marginTop: '20px' }}>
          <h2>About Me</h2>
          <p>Hello, my name is David and I am a professional system administrator. I earned my Bachelor's degree in "Applied Computer Science" from DHBW Karlsruhe. In addition to my regular work at BLM Karlsruhe, I also offer my services as a freelancer. I have experience in various areas of IT infrastructure and administration.</p>
          <p>Some of my previous clients include Manimedia and Korrektur.de, for whom I have successfully implemented projects and provided IT solutions. I am dedicated to offering my clients the best possible solutions and assisting them in optimizing their systems.</p>
          <p>My passion for technology and my commitment to a reliable and efficient IT infrastructure drive me to continuously expand my knowledge and take on new challenges.</p>
          <p>If you are interested in my services or have any questions, please do not hesitate to contact me. I look forward to working with you!</p>
          <button className='btn btn-dark' onClick={handleExperienceMoreClick}>Contact Me</button>
        </div>
      </div>
    </div>
  )
}

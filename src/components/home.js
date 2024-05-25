import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleExperienceMoreClick = () => {
    navigate('/about'); // Navigiere zu der gewünschten Route
  };

  return (
    <div style={{
      background: 'rgba(0, 0, 0, 0.75)', 
      padding: '2em', 
      borderRadius: '10px', 
      margin: '2em auto', 
      maxWidth: '800px'
    }}>
      <section style={{ marginBottom: '2em' }}>
        <h1 style={{ fontSize: '3em', marginBottom: '0.5em' }}>
          Welcome to <b> Raub Media </b>
        </h1>
      </section>

      <section style={{ marginBottom: '2em' }}>
        <h2 style={{ fontSize: '2em' }}>Our service includes:</h2>
        <p style={{ fontSize: '1.3em' }}><b>Analysing</b> IT-Infrastructure (private or business)</p>
        <p style={{ fontSize: '1.3em' }}><b>Developing</b> and installation of software solutions</p>
        <p style={{ fontSize: '1.3em' }}><b>Data</b> modelling, transferring and migration</p>
        <p style={{ fontSize: '1.3em' }}><b>Consulting</b></p>
      </section>

      <section style={{ marginBottom: '2em' }}>
        <h2 style={{ fontSize: '2em' }}>About us</h2>
        <p style={{ fontSize: '1.3em' }}>We are an IT company located in Karlsruhe.</p>
        <button
          className="btn btn-dark"
          onClick={handleExperienceMoreClick}
          style={{ fontSize: '1.2em' }}
        >
          Experience more
        </button>
      </section>
    </div>
  );
}

export default Home;

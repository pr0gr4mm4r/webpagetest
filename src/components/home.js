import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImageUrl from './nature-8727795.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleExperienceMoreClick = () => {
    navigate('/about'); // Navigiere zu der gewünschten Route
  };

  return (
    <div style={{
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      minHeight: `1000px`, 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      textAlign: 'center',
      padding: '2em',
      boxSizing: 'border-box'
    }}>
      <section style={{ marginBottom: '2em', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1em', borderRadius: '10px' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '0.5em' }}>
          Welcome to Raub Media
        </h1>
        <p style={{ fontSize: '1.2em', marginBottom: '1em' }}>
          Wir bieten Ihnen die besten Dienstleistungen im Bereich IT
        </p>
      </section>

      <section style={{ marginBottom: '2em', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1em', borderRadius: '10px' }}>
        <h2>About us</h2>
        <p>
          We are a humble IT company located in Karlsruhe.
        </p>
        <button
          style={{
            padding: '0.5em 2em',
            fontSize: '1em',
            color: '#fff',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '0.3em',
            cursor: 'pointer',
          }}
          onClick={handleExperienceMoreClick}
        >
          Experience more
        </button>
      </section>

      <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1em', borderRadius: '10px' }}>
        <h2>Unsere Leistungen</h2>
        <p>
          Extending IT-Infrastructure (private or business)
        </p>
        <p>
          Developing and installation of software solutions
        </p>
        <p>
          Data transfer
        </p>
        <p>
          Consulting
        </p>
      </section>
    </div>
  );
}

export default Home;

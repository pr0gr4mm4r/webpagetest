import React from 'react';
import backgroundImageUrl from './nature-8727795.jpg';

const Home = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
// Erlaube vertikales Scrollen, wenn der Inhalt größer als der Bildschirm ist
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
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
          Wir bieten Ihnen die besten Dienstleistungen in [Dein Bereich]
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
        >
          Mehr erfahren
        </button>
      </section>

      <section style={{ marginBottom: '2em', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1em', borderRadius: '10px' }}>
        <h2>About me</h2>
        <p>
          Hier kannst du eine kurze Beschreibung über dein Unternehmen und dessen Geschichte hinzufügen.
        </p>
      </section>

      <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '1em', borderRadius: '10px' }}>
        <h2>Our Service Portfolio</h2>
        <p>
          Hier kannst du eine detaillierte Beschreibung deiner Leistungen hinzufügen.
        </p>
      </section>
    </div>
  );
}

export default Home;

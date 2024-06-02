import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleExperienceMoreClick = () => {
    navigate('/about'); // Navigiere zu der gewünschten Route
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '2em', // Weniger Padding für weniger Abstand zum Rand
      background: 'rgba(0, 0, 0, 0.85)',
      borderRadius: '10px',
      margin: '2em auto',
      width: '82%', // Breite des Haupt-Containers erhöht
      color: 'white'
    }}>
      <div style={{
        maxWidth: '70%', // Breite des Inhaltsblocks beibehalten
        marginRight: '1em' // Weniger Abstand zwischen den Abschnitten
      }}>
        <section style={{ textAlign: 'left', marginBottom: '2em' }}>
          <h1 style={{ fontSize: '2em', marginBottom: '0.5em' }}>
            <b>Welcome!</b>
          </h1>
        </section>

        <section style={{
          background: 'rgba(255, 255, 255, 0.06)',
          padding: '1.5em',
          borderRadius: '10px',
          marginBottom: '1.5em'
        }}>
          <h2 style={{ fontSize: '2em', marginBottom: '1em' }}>Services</h2>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '1.5em',
            margin: 0
          }}>
            <li style={{
              fontSize: '1.3em',
              textAlign: 'left', // Sicherstellen, dass Text linksbündig ist
              marginBottom: '0.5em' // Abstand zwischen den Listenelementen
            }}>
              <b>Analysing</b> IT-Infrastructure (private or business)
            </li>
            <li style={{
              fontSize: '1.3em',
              textAlign: 'left', // Sicherstellen, dass Text linksbündig ist
              marginBottom: '0.5em' // Abstand zwischen den Listenelementen
            }}>
              <b>Developing</b> and installation of software solutions
            </li>
            <li style={{
              fontSize: '1.3em',
              textAlign: 'left', // Sicherstellen, dass Text linksbündig ist
              marginBottom: '0.5em' // Abstand zwischen den Listenelementen
            }}>
              <b>Data</b> modelling, transferring and migration
            </li>
            <li style={{
              fontSize: '1.3em',
              textAlign: 'left' // Sicherstellen, dass Text linksbündig ist
            }}>
              <b>Consulting</b>
            </li>
          </ul>
        </section>

        <section style={{
          background: 'rgba(255, 255, 255, 0.06)',
          padding: '1.5em', // Weniger Padding für die Sektionen
          borderRadius: '10px'
        }}>
          <h2 style={{ fontSize: '2em', marginBottom: '1em' }}>Mission</h2>
          <p style={{ fontSize: '1.3em', marginBottom: '1.5em' }}>
            We are an IT company located in Karlsruhe.
          </p>
          <button
            className="btn btn-dark"
            onClick={handleExperienceMoreClick}
            style={{
              fontSize: '1.2em',
              padding: '0.5em 1em',
              borderRadius: '5px'
            }}
          >
            Experience more
          </button>
        </section>
      </div>

      <div style={{ flex: '1', maxWidth: '30%' }}>
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%', // 16:9 aspect ratio
          height: 0,
          overflow: 'hidden',
          maxWidth: '100%',
          background: '#000',
          borderRadius: '10px'
        }}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '10px'
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;

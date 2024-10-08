import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // useTranslation Hook hinzufügen

  const handleExperienceMoreClick = () => {
    navigate('/about'); // Navigate to the desired route
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', // Column direction for smaller screens
      justifyContent: 'center', // Center the sections
      alignItems: 'center', // Center the sections
      padding: '2em', // Less padding for less distance to the edge
      background: 'rgba(0, 0, 0, 0.85)',
      borderRadius: '10px',
      margin: '2em auto',
      width: '80%', // Increased width of the main container
      color: 'white',
      border: '1px solid white'
    }}>
      <div style={{
        width: '100%',
        marginBottom: '1em' // Less spacing between sections
      }}>

        <section style={{
          background: 'rgba(255, 255, 255, 0.06)',
          padding: '2em', // Adjusted padding for sections
          borderRadius: '10px',
          marginBottom: '1.5em',
          border: '1px solid white',
          textAlign: 'center' // Center text within the section
        }}>
          <h1 style={{ fontSize: '2.2em', marginBottom: '1em' }}>{t('services')}</h1>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '1.5em',
            margin: 0
          }}>
            <li style={{
              fontSize: '1.4em',
              textAlign: 'left', // Ensure text is left-aligned
              marginBottom: '0.5em' // Spacing between list items
            }}>
              <b>{t('analysing')}</b>{t(' IT-Infrastructure (private or business)')}
            </li>
            <li style={{
              fontSize: '1.4em',
              textAlign: 'left', // Ensure text is left-aligned
              marginBottom: '0.5em' // Spacing between list items
            }}>
              <b>{t('developing')}</b> {t("and installation of software solutions")}
            </li>
            <li style={{
              fontSize: '1.4em',
              textAlign: 'left', // Ensure text is left-aligned
              marginBottom: '0.5em' // Spacing between list items
            }}>
              <b>{t('data')}</b>{t(" modelling, transferring and securing")}
            </li>
            <li style={{
              fontSize: '1.4em',
              textAlign: 'left' // Ensure text is left-aligned
            }}>
              <b>{t('consulting')}</b>
            </li>
          </ul>
        </section>

        <section style={{
          background: 'rgba(255, 255, 255, 0.06)',
          padding: '2em', // Adjusted padding for sections
          borderRadius: '10px',
          border: '1px solid white',
          textAlign: 'center' // Center text within the section
        }}>
          <h1 style={{ fontSize: '2.2em', marginBottom: '1em' }}>{t('mission')}</h1>
          <p style={{ fontSize: '1.4em', marginBottom: '1.5em' }}>
            {t("supporting customers with IT related problems")}
          </p>
          <button
            className="btn btn-dark"
            onClick={handleExperienceMoreClick}
            style={{
              fontSize: '1.3em',
              padding: '0.5em 1em',
              borderRadius: '5px',
              border: '1px solid white'
            }}
          >
            {t('experience more ..')}
          </button>
        </section>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';

const Imprint = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2em',
            background: 'rgba(0, 0, 0, 0.85)',
            borderRadius: '10px',
            margin: '2em auto',
            width: '80%',
            height: '28%',
            color: 'white',
            border: '1px solid white',
            textAlign: 'left'
        }}>
            <ul style={{
                listStyleType: 'none', // Punkte entfernt
                paddingLeft: '1.5em',
                margin: 0
            }}>
                <li style={{ fontSize: '1.4em', marginBottom: '0.5em' }}>
                    BaurDigital (IT-Dienstleistungen)
                </li>
                <li style={{ fontSize: '1.4em', marginBottom: '0.5em' }}>
                    Inhaber: David Baur
                </li>
                <li style={{ fontSize: '1.4em', marginBottom: '0.5em' }}>
                    Kontakt: david.baur99@gmail.com
                </li>
                <li style={{ fontSize: '1.3em' }}>
                    Tullastr. 63
                </li>
                <li style={{ fontSize: '1.3em' }}>
                    76131 Karlsruhe
                </li>
                <li style={{ fontSize: '1.3em' }}>
                    Deutschland
                </li>
            </ul>
        </div>
    );
}

export default Imprint;

import React from 'react';

const DataProtection = () => {
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
            height: '40%',
            color: 'white',
            border: '1px solid white',
            textAlign: 'left'
        }}>
            <ul style={{
                listStyleType: 'none', // Punkte entfernt
                paddingLeft: '1.5em',
                margin: 0
            }}>
                <li style={{ fontSize: '1.3em', marginBottom: '0.5em' }}>
                    Welche Daten werden erhoben?
                </li>
                <li style={{ fontSize: '1.3em', marginBottom: '0.5em' }}>
                    Es werden sämtliche Daten des Kontaktformulars übertragen.
                    Dazu gehören: E-Mail Adresse, Vor- und Nachname sowie die Nachricht.
                </li>
                <li style={{ fontSize: '1.3em', marginBottom: '0.5em' }}>
                    Zweck der Datenverarbeitung:
                </li>
                <li style={{ fontSize: '1.3em', marginBottom: '0.5em' }}>
                    Ihre Daten werden ausschließlich zur Kontaktaufnahme und Auftragsbearbeitung genutzt.
                </li>
                <li style={{ fontSize: '1.3em', marginBottom: '0.5em' }}>
                    Dauer der Datenverwahrung:
                </li>
                <li style={{ fontSize: '1.3em', marginBottom: '0.5em' }}>
                    Ihre Daten werden nur in der Zeit der Auftragsbearbeitung gespeichert und werden anschließend gelöscht.
                </li>
            </ul>
        </div>
    );
}

export default DataProtection;

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
            color: 'white',
            border: '1px solid white',
            textAlign: 'center'
        }}>
            <ul style={{
                listStyleType: 'disc',
                paddingLeft: '1.5em',
                margin: 0
            }}>
                <li style={{ fontSize: '1.4em', marginBottom: '0.5em' }}>
                    Analysing IT Infrastructure (private or business)
                </li>
                <li style={{ fontSize: '1.4em', marginBottom: '0.5em' }}>
                    Developing and installation of software solutions
                </li>
                <li style={{ fontSize: '1.4em', marginBottom: '0.5em' }}>
                    Data modeling, transferring, and securing
                </li>
                <li style={{ fontSize: '1.4em' }}>
                    Consulting
                </li>
            </ul>
        </div>
    );
}

export default Imprint;

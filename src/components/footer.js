import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: '#000',
            color: '#fff',
            width: '100%',
            height: '80px',  // Adjusted height
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1em',
            position: 'absolute',
            bottom: '0',
            textAlign: 'center'
        }}>
            <div>
                <Link to="/impressum" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Impressum</Link>
                <Link to="/data-protection" style={{ color: '#fff', textDecoration: 'none' }}>Data Protection</Link>
            </div>
        </footer>
    );
}

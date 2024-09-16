import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer style={{
            backgroundColor: '#000',
            color: '#fff',
            width: '100%',
            height: '5%',  // Adjusted height
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1em',
            position: 'absolute',
            bottom: '0',
            textAlign: 'center'
        }}>
            <div>
                <Link to="/impressum" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>{t("Imprint")}</Link>
                <Link to="/data-protection" style={{ color: '#fff', textDecoration: 'none' }}>{t("Data Protection")}</Link>
            </div>
        </footer>
    );
}

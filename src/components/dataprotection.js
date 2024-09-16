import React from 'react';
import { useTranslation } from 'react-i18next';

const DataProtection = () => {
    const { t } = useTranslation();
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1.5em',
            background: 'rgba(0, 0, 0, 0.85)',
            borderRadius: '10px',
            margin: '1em auto',
            width: '90%',
            minHeight: 'auto', // Allow dynamic height
            color: 'white',
            border: '1px solid white',
            textAlign: 'left',
            boxSizing: 'border-box',
            marginBottom: '3em', // Add margin at the bottom
        }}>
            <ul style={{
                listStyleType: 'none',
                paddingLeft: '1em',
                margin: 0,
                boxSizing: 'border-box'
            }}>
                <li style={{ fontSize: '1em', marginBottom: '0.3em' }}>
                    <b>{t("What data is collected?")}</b>
                </li>
                <li style={{ fontSize: '0.9em', marginBottom: '0.3em' }}>
                    {t("The data provided in the contact form is transmitted. This includes: your email address, first and last name, and the message you have sent.")}
                </li>
                <li style={{ fontSize: '1em', marginBottom: '0.3em' }}>
                    <b>{t("Purpose of data processing:")}</b>
                </li>
                <li style={{ fontSize: '0.9em', marginBottom: '0.3em' }}>
                    {t("Your data is used solely for processing your request and for contacting you.")}
                </li>
                <li style={{ fontSize: '1em', marginBottom: '0.3em' }}>
                    <b>{t("Duration of data storage:")}</b>
                </li>
                <li style={{ fontSize: '0.9em', marginBottom: '0.3em' }}>
                    {t("Your data will only be stored for as long as necessary to process your request. After the communication or assignment is completed, your data will be deleted unless legal retention obligations apply.")}
                </li>
                <li style={{ fontSize: '1em', marginBottom: '0.3em' }}>
                    <b>{t("Disclosure to third parties:")}</b>
                </li>
                <li style={{ fontSize: '0.9em', marginBottom: '0.3em' }}>
                    {t("Your data is transmitted via the service 'EmailJS' for simplified communication and is stored in my Gmail mailbox. Please note that this may involve data transmission to servers in the USA. Therefore, I cannot guarantee complete control over the data transmitted.")}
                </li>
                <li style={{ fontSize: '1em', marginBottom: '0.3em' }}>
                    <b>{t("Your rights:")}</b>
                </li>
                <li style={{ fontSize: '0.9em', marginBottom: '0.3em' }}>
                    {t("You have the right at any time to request information about the data I store, to request correction or deletion, and to object to further processing. You can also request the transfer of your data.")}
                </li>
            </ul>
        </div>
    );
}

export default DataProtection;

// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "Dienstleistungen": "services",
                    "Mission": "mission",
                    "Erfahre mehr": "experience more..",
                    "Beratung": "consulting",
                    "Wir sind eine IT-Firma in Karlsruhe": "We are an IT company located in Karlsruhe.",
                    "Analysieren": "analysing",
                    "der IT-Infrastructure (privat or geschäftlich)": "IT-Infrastructure (private or business)",
                    "Daten": "data",
                    "-Modellierung, -Übertragung und -Sicherung": "modelling, transferring and securing",
                    "und Installation von Software-Lösungen": "and installation of software solutions",
                    "Entwicklung": "developing",
                    "Kontaktieren Sie mich": "Contact Me"
                }
            },
            de: {
                translation: {
                    "services": "Dienstleistungen",
                    "mission": "Mission",
                    "experience more ..": "Erfahre mehr ..",
                    "consulting": "Beratung",
                    "We are an IT company located in Karlsruhe.": "Wir sind eine IT-Firma in Karlsruhe",
                    "analysing": "Analysieren",
                    " IT-Infrastructure (private or business)": " der IT-Infrastructure (privat or geschäftlich)",
                    "data": "Daten",
                    " modelling, transferring and securing": "-Modellierung, -Übertragung und -Sicherung",
                    "and installation of software solutions": "und Installation von Software-Lösungen",
                    "developing": "Entwicklung",
                    "Contact": "Kontakt",
                    "First Name": "Vorname",
                    "Last Name": "Nachname",
                    "Message": "Nachricht",
                    "Email Address": "Email Adresse",
                    "Send": "Senden",
                    "Hello, my name is David and I am a professional system administrator. I earned my Bachelor's degree in 'Applied Computer Science' from DHBW Karlsruhe. In addition to my regular work, I also offer my services as a freelancer. I have experience in various areas of IT infrastructure and administration.": "Hallo, mein Name ist David und ich bin ein professioneller Systemadministrator. Ich habe meinen Bachelor-Abschluss in 'Angewandter Informatik' von der DHBW Karlsruhe erhalten. Neben meiner regulären Arbeit biete ich auch meine Dienstleistungen als Freiberufler an. Ich habe Erfahrung in verschiedenen Bereichen der IT-Infrastruktur und -Administration.",
                    "My passion for technology and my commitment to a reliable and efficient IT infrastructure drive me to continuously expand my knowledge and take on new challenges.": "Meine Leidenschaft für Technologie und mein Engagement für eine zuverlässige und effiziente IT-Infrastruktur treiben mich dazu an, mein Wissen kontinuierlich zu erweitern und neue Herausforderungen anzunehmen.",
                    "If you are interested in my services or have any questions, please do not hesitate to contact me. I look forward to working with you!": "Wenn Sie an meinen Dienstleistungen interessiert sind oder Fragen haben, zögern Sie nicht, mich zu kontaktieren. Ich freue mich auf die Zusammenarbeit mit Ihnen!",
                    "Contact Me": "Kontaktieren Sie mich",
                    "Info": "Info"                    // Füge hier weitere Übersetzungen hinzu
                }
            }
        },
        fallbackLng: 'en',
        lng: 'de',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

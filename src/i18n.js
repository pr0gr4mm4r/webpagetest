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
                    "Leistungen": "services",
                    "Mission": "mission",
                    "Erfahre mehr": "experience more..",
                    "Beratung": "consulting",
                    "Kunden bei IT-spezifischen Problemen unterstützen": "supporting customers with IT related problems",
                    "Analysieren": "analysing",
                    "der IT-Infrastructure (privat or geschäftlich)": "IT-Infrastructure (private or business)",
                    "Daten": "data",
                    "-Modellierung, -Übertragung und -Sicherung": "modelling, transferring and securing",
                    "und Installation von Software-Lösungen": "and installation of software solutions",
                    "Entwicklung": "developing",
                    "Kontaktieren Sie mich": "Contact Me",
                    "Anfrage erfolgreich versendet!": "request sent successfully!",
                    "Ihre Anfrage wird so bald wie möglich bearbeitet": "Your request will be processed as soon as possible",
                    "Nachricht konnte nicht gesendet werden": "message could not be sent",
                    "Weiter": "Continue",
                    "Über Mich": "About Me",
                    "Impressum": "Imprint",
                    "Datenschutzerklärung": "Data Protection",
                    "Kontakt": "Contact",
                    "Inhaber": "Owner",
                    "(IT-Dienstleistungen)": "(IT-Services)",
                    "Deutschland": "Germany",
                    "Welche Daten werden erhoben?": "What data is collected?",
                    "Es werden die im Kontaktformular angegebenen Daten übertragen. Dazu gehören: Ihre E-Mail-Adresse, Vor- und Nachname sowie die von Ihnen übermittelte Nachricht.": "The data provided in the contact form is transmitted. This includes: your email address, first and last name, and the message you have sent.",
                    "Zweck der Datenverarbeitung:": "Purpose of data processing:",
                    "Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme verwendet.": "Your data is used solely for processing your request and for contacting you.",
                    "Dauer der Datenspeicherung:": "Duration of data storage:",
                    "Ihre Daten werden nur so lange gespeichert, wie dies für die Bearbeitung Ihrer Anfrage erforderlich ist. Nach Abschluss der Kommunikation oder des Auftrags werden Ihre Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.": "Your data will only be stored for as long as necessary to process your request. After the communication or assignment is completed, your data will be deleted unless legal retention obligations apply.",
                    "Weitergabe an Dritte:": "Disclosure to third parties:",
                    "Ihre Daten werden zur vereinfachten Kommunikation über den Dienst „EmailJS“ übermittelt und in meinem Gmail-Postfach gespeichert. Bitte beachten Sie, dass hierbei eine Datenübermittlung an Server in den USA erfolgen kann. Eine vollständige Kontrolle der übermittelten Daten durch mich ist daher nicht möglich.": "Your data is transmitted via the service 'EmailJS' for simplified communication and is stored in my Gmail mailbox. Please note that this may involve data transmission to servers in the USA. Therefore, I cannot guarantee complete control over the data transmitted.",
                    "Ihre Rechte:": "Your rights:",
                    "Sie haben jederzeit das Recht, Auskunft über die von mir gespeicherten Daten zu erhalten, deren Berichtigung oder Löschung zu verlangen sowie der weiteren Verarbeitung zu widersprechen. Zudem können Sie die Übertragung Ihrer Daten anfordern.": "You have the right at any time to request information about the data I store, to request correction or deletion, and to object to further processing. You can also request the transfer of your data.",
                    "Ich stimme zu, dass meine Daten in einem Nicht-EU-Staat verarbeitet und gespeichert werden.": "I agree that my data will be processed and stored in a non EU state.",
                    "Datenschutzerklärung": "data protection section",
                    "Weitere Informationen finden Sie in der": "Further details can be found on the",
                    "     ": " page"
                }
            },
            de: {
                translation: {
                    "services": "Leistungen",
                    "mission": "Mission",
                    "experience more ..": "Erfahre mehr ..",
                    "consulting": "Beratung",
                    "supporting customers with IT related problems": "Kunden bei IT-spezifischen Problemen unterstützen",
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
                    "Info": "Info",
                    "request sent successfully!": "Anfrage erfolgreich versendet!",
                    "Your request will be processed as soon as possible": "Ihre Anfrage wird so bald wie möglich bearbeitet",
                    "message could not be sent": "Nachricht konnte nicht gesendet werden",
                    "Continue": "Weiter",
                    "About Me": "Über Mich",
                    "Imprint": "Impressum",
                    "Data Protection": "Datenschutz",
                    "Contact": "Kontakt",
                    "Owner": "Inhaber",
                    "(IT-Services)": "(IT-Dienstleistungen)",
                    "Germany": "Deutschland",
                    "What data is collected?": "Welche Daten werden erhoben?",
                    "The data provided in the contact form is transmitted. This includes: your email address, first and last name, and the message you have sent.": "Es werden die im Kontaktformular angegebenen Daten übertragen. Dazu gehören: Ihre E-Mail-Adresse, Vor- und Nachname sowie die von Ihnen übermittelte Nachricht.",
                    "Purpose of data processing:": "Zweck der Datenverarbeitung:",
                    "Your data is used solely for processing your request and for contacting you.": "Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme verwendet.",
                    "Duration of data storage:": "Dauer der Datenspeicherung:",
                    "Your data will only be stored for as long as necessary to process your request. After the communication or assignment is completed, your data will be deleted unless legal retention obligations apply.": "Ihre Daten werden nur so lange gespeichert, wie dies für die Bearbeitung Ihrer Anfrage erforderlich ist. Nach Abschluss der Kommunikation oder des Auftrags werden Ihre Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.",
                    "Disclosure to third parties:": "Weitergabe an Dritte:",
                    "Your data is transmitted via the service 'EmailJS' for simplified communication and is stored in my Gmail mailbox. Please note that this may involve data transmission to servers in the USA. Therefore, I cannot guarantee complete control over the data transmitted.": "Ihre Daten werden zur vereinfachten Kommunikation über den Dienst „EmailJS“ übermittelt und in meinem Gmail-Postfach gespeichert. Bitte beachten Sie, dass hierbei eine Datenübermittlung an Server in den USA erfolgen kann. Eine vollständige Kontrolle der übermittelten Daten durch mich ist daher nicht möglich.",
                    "Your rights:": "Ihre Rechte:",
                    "You have the right at any time to request information about the data I store, to request correction or deletion, and to object to further processing. You can also request the transfer of your data.": "Sie haben jederzeit das Recht, Auskunft über die von mir gespeicherten Daten zu erhalten, deren Berichtigung oder Löschung zu verlangen sowie der weiteren Verarbeitung zu widersprechen. Zudem können Sie die Übertragung Ihrer Daten anfordern.",
                    "I agree that my data will be processed and stored in a non EU state.": "Ich stimme zu, dass meine Daten in einem Nicht-EU-Staat verarbeitet und gespeichert werden.",
                    "data protection": "Datenschutzerklärung",
                    "Further details can be found on the": "Weitere Informationen finden Sie in der",
                    " page": "     "
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

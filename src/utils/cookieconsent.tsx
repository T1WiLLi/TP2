// Import necessary components and styles
import { useState, useEffect, FC } from 'react';
import "../styles/components/cookieconsent.css";

// Define props for the CookieConsent component
interface CookieConsentProps {
  onConsent: (consent: boolean) => void;
}

// Define the CookieConsent component
const CookieConsent: FC<CookieConsentProps> = ({ onConsent }) => {
    // State to manage the visibility of the consent box
    const [show, setShow] = useState<boolean>(false);

    // Effect to determine if the consent box should be shown
    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        const lastClosedTime = localStorage.getItem('cookieConsentLastClosedTime');

        // Show the consent box if no consent is stored or if it has been more than 5 minutes since last closure
        const shouldShow = consent === null || !lastClosedTime || (Date.now() - parseInt(lastClosedTime)) > 300000;
        setShow(shouldShow);
    }, []);

    // Function to handle user consent
    const handleConsent = (consent: boolean) => {
        localStorage.setItem('cookieConsent', consent.toString());
        setShow(false);
        onConsent(consent);
    };

    // Function to handle closing the consent box
    const handleClose = () => {
        setShow(false);
        localStorage.setItem('cookieConsentLastClosedTime', Date.now().toString());
    };

    // Render the consent box
    return (
        <div className={`cookie-consent-container ${show ? 'show' : 'hide'}`}>
            <div className="cookie-consent-box">
                <button className="close-button" onClick={handleClose}>X</button>
                <p>We use cookies to enhance your experience. Do you consent to our use of cookies?</p>
                <div className="cookie-consent-buttons">
                    <button onClick={() => handleConsent(true)}>Yes</button>
                    <button onClick={() => handleConsent(false)}>No</button>
                </div>
            </div>
        </div>
    );
};

// Export the CookieConsent component
export default CookieConsent;

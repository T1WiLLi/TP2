import { useState, useEffect, FC } from 'react';
import "../styles/components/cookieconsent.css";

interface CookieConsentProps {
  onConsent: (consent: boolean) => void;
}

const CookieConsent: FC<CookieConsentProps> = ({ onConsent }) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        const lastClosedTime = localStorage.getItem('cookieConsentLastClosedTime');

        // If no preference is stored or if it has been more than 5 minutes since last closure, show consent box
        if (consent === null || (!lastClosedTime || (Date.now() - parseInt(lastClosedTime)) > 300000)) {
            setShow(true);
        }
    }, []);

    const handleConsent = (consent: boolean) => {
        localStorage.setItem('cookieConsent', consent.toString());
        setShow(false);
        onConsent(consent);
    };

    const handleClose = () => {
        setShow(false);
        localStorage.setItem('cookieConsentLastClosedTime', Date.now().toString());
    };

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

export default CookieConsent;
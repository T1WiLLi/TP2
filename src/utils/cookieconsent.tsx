import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "../styles/components/cookieconsent.css";

const CookieConsent = () => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            const consent = localStorage.getItem('cookieConsent') as string;
            const lastClosedTime = localStorage.getItem('cookieConsentLastClosedTime') as string;
            const lastClosedTimeMillis = lastClosedTime ? parseInt(lastClosedTime) : 0 as number;
            const shouldShow = consent === null || !lastClosedTime || (Date.now() - lastClosedTimeMillis) > 1000;
            setShow(shouldShow);
        }, 10000);
    }, []);

    const handleConsent = (consent: boolean) => {
        localStorage.setItem('cookieConsent', consent.toString());
        setShow(false);
    };

    const handleClose = () => {
        setShow(false);
        localStorage.setItem('cookieConsentLastClosedTime', Date.now().toString());

        setTimeout(() => {
            setShow(true);
        }, 600000); // After 10 min
    };

    return (
        <Modal show={show} onHide={handleClose} animation={true} backdrop="static" className='cookie__consent-box'>
            <Modal.Header closeButton className='cookie__consent-header'>
                <Modal.Title>Cookie Consent</Modal.Title>
            </Modal.Header>
            <Modal.Body className='cookie__body-content'>
                <p>We use cookies to enhance your experience. Do you consent to our use of cookies?</p>
            </Modal.Body>
            <Modal.Footer className='cookie__consent-footer d-flex justify-content-between'>
                <Button variant="secondary" onClick={() => handleConsent(false)}>
                    No
                </Button>
                <Button variant="primary" onClick={() => handleConsent(true)}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default CookieConsent;

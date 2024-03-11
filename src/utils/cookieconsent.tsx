import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "../styles/components/cookieconsent.css";

const CookieConsent = () => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        const lastClosedTime = localStorage.getItem('cookieConsentLastClosedTime');

        const shouldShow = consent === null || !lastClosedTime || (Date.now() - parseInt(lastClosedTime)) > 300000;
        setShow(shouldShow);
    }, []);

    const handleConsent = (consent: boolean) => {
        localStorage.setItem('cookieConsent', consent.toString());
        setShow(false);
    };

    const handleClose = () => {
        setShow(false);
        localStorage.setItem('cookieConsentLastClosedTime', Date.now().toString());
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

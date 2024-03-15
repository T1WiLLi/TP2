import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Inactivity() {
    const [showInactiveMessage, setShowInactiveMessage] = useState(false);
    let inactivityTimeout: ReturnType<typeof setTimeout>;

    const handleInactive = () => {
        setShowInactiveMessage(true);
    };

    const resetInactivityTimer = () => {
        clearTimeout(inactivityTimeout);
        inactivityTimeout = setTimeout(handleInactive, 30000);
    };

    const handleRedirect = () => {
        window.location.href = 'https://www.google.com';
    };

    useEffect(() => {
        const setupEventListeners = () => {
            window.addEventListener('mousemove', resetInactivityTimer);
            window.addEventListener('keypress', resetInactivityTimer);
            window.addEventListener('scroll', resetInactivityTimer);
        };

        setupEventListeners();
        resetInactivityTimer();

        return () => {
            window.removeEventListener('mousemove', resetInactivityTimer);
            window.removeEventListener('keypress', resetInactivityTimer);
            window.removeEventListener('scroll', resetInactivityTimer);
        };
    }, []);

    return(
        <div>
            <Modal show={showInactiveMessage} onHide={() => setShowInactiveMessage(false)} centered>
                <Modal.Header className="border-primary-color" closeButton>
                    <Modal.Title className="special">Are you still active on the site?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex gap-3">
                    <Button className="button-primary" variant="primary" onClick={() => setShowInactiveMessage(false)}>Yes</Button>
                    <Button variant="secondary" onClick={handleRedirect}>No</Button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Inactivity;

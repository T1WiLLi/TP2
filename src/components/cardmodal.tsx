import { Modal, Button } from "react-bootstrap";
import "../styles/components/cardmodal.css"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    gameName: string;
    gameData: {
        header1: string;
        text1: string;
        header2: string;
        text2: string;
    };
}

const CardModal: React.FC<ModalProps> = ({ isOpen, onClose, gameName, gameData }) => {
    return (
        <Modal show={isOpen} onHide={onClose} dialogClassName="modal-dialog-centered">
            <Modal.Header closeButton>
                <Modal.Title className="modal-title">{gameName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-section">
                    <h6>{gameData.header1}</h6>
                    <p>{gameData.text1}</p>
                </div>
                <div className="modal-section">
                    <h6>{gameData.header2}</h6>
                    <p>{gameData.text2}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CardModal;

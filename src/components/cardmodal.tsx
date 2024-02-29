import { useEffect, useState } from "react";
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
    if (!isOpen || !gameData.header1 || !gameData.text1 || !gameData.header2 || !gameData.text2) {
        return null;
    }
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const handleScrollBlock = (event: Event) => {
            if (isOpen) {
                event.preventDefault();
            }
        };

        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        document.addEventListener('scroll', handleScrollBlock, {passive: false});

        return () => {
            document.body.style.overflow = 'unset';
            document.removeEventListener('scroll', handleScrollBlock);
        };
    }, [isOpen]);

    const handleCloseModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            isOpen = false;
            setIsClosing(false);
        }, 500);
    };

    return (
        <div className={`modal-wrapper ${isClosing ? `close-animation` : ''}`}>
            <div className="modal-backdrop" onClick={onClose}></div>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{gameName}</h5>
                        <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-section">
                            <h6>{gameData.header1}</h6>
                            <p>{gameData.text1}</p>
                        </div>
                        <div className="modal-section">
                            <h6>{gameData.header2}</h6>
                            <p>{gameData.text2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardModal;

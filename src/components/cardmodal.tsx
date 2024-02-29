// CardModal.tsx

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
        return null; // If gameData is not properly populated, don't render the modal
    }

    return (
        <div className="modal fade show" tabIndex={-1} style={{ display: 'block' }} aria-modal="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{gameName}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
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

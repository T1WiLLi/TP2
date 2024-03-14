import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import "../styles/components/hiring.css";
import HorizontalRule from "../utils/horizontalrule";
import { JOB_CONFIG, JOB_MODAL_CONFIG } from "../config/jobConfig";
import { useEffect, useState } from "react";

interface JobProps {
    title:string;
    description:string;
    index:number;
    setShowModal: (index: number | null) => void;
}

function Hiring() {
    const [showModal, setShowModal] = useState<number | null>(null);
    const handleCloseModal = () => setShowModal(null);
    return(
        <div id="careers" className="hiring__content-wrapper mt-5 mb-5">
            <Container>
                <div className="hiring__header d-flex align-items-center gap-5 mb-5">
                    <h1 className="mb-0 fw-light" data-aos="fade-down" data-aos-duration="1500">We're <span>Hiring</span></h1>
                    <HorizontalRule/>
                </div>
                <h1 data-aos="fade-down" data-aos-duration="1500" className="hiring__job-header d-block">
                    Job Openings
                </h1>
                <p className="hiring__desc mt-2 text-wrap text-start">
                    Are you a talented and motivated individual looking for an exciting opportunity? Do you thrive in dynamic environments and enjoy collaborating with passionate professionals? If so, we would love to have you join our <span className="fw-light">team of innovators!</span> Explore new challenges, unleash your creativity, and make a meaningful impact with us.
                </p>
                <Row className="mt-4">
                    {JOB_CONFIG.map((job) => (
                        <Col key={job.index} xs={6} md={4}>
                            <JobCard title={job.title} description={job.description} index={job.index} setShowModal={setShowModal}/>
                        </Col>
                    ))}
                </Row>
            </Container>
            <JobModal showModal={showModal} handleCloseModal={handleCloseModal}/>
        </div>
    );
}

function JobCard({ title, description, index, setShowModal }: JobProps & { setShowModal: (index: number | null) => void }) {
    const handleOpenModal = () => setShowModal(index);

    return (
        <div className="job-card position-relative text-center overflow-hidden d-flex flex-column align-items-center px-5 py-4">
            <h2 className="fw-light">{title}</h2>
            <p className="text-wrap text-center">{description}</p>
            <Button onClick={handleOpenModal}>View Details</Button>
        </div>
    );
}

interface ModalContent {
    title: string;
    idealCandidate: string;
    requireSkills: string[];
    requirements: string[];
    howToApply: string;
}

function JobModal({ showModal, handleCloseModal }: { showModal: number | null; handleCloseModal: () => void }) {
    const [jobModalContent, setJobModalContent] = useState<ModalContent | null>(null);

    useEffect(() => {
        if (showModal !== null) {
            const job = JOB_MODAL_CONFIG.find((job) => job.title === JOB_CONFIG[showModal].title);
            if (job) {
                setJobModalContent(job);
            }
        } else {
            setJobModalContent(null);
        }
    }, [showModal]);

    return (
        <Modal show={showModal !== null} onHide={handleCloseModal} centered>
            <Modal.Header closeButton className="hiring__modal-header">
                <Modal.Title className="fw-light">{jobModalContent?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {jobModalContent && (
                    <>
                        <h5 className="hiring__modal-header-text fw-light">
                            <span className="fw-light">The Ideal Candidate: </span><br/>
                            {jobModalContent.idealCandidate}
                        </h5>
                        <p className="d-flex gap-2 hiring__modal-require-skill">
                            {jobModalContent.requireSkills.map((skill, index) => (
                                <span className="d-flex justify-content-center align-items-center" key={index}>{skill}</span>
                            ))}
                        </p>
                        <h5 className="hiring__modal-requirement-header fw-light">Requirements:</h5>
                        <ul className="hiring__modal-requirement-item">
                            {jobModalContent.requirements.map((requirement, index) => (
                                <li key={index}>{requirement}</li>
                            ))}
                        </ul>
                        <h5 className="hiring__modal-howToApply-header fw-light">How to Apply:</h5>
                        <p className="hiring__modal-howToApply-desc mb-0">{jobModalContent.howToApply} <span className="fw-light">careers@example.com.</span></p>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer className="hiring__modal-footer justify-content-start">
                <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                <Button variant="primary">Apply</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Hiring;
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../styles/components/getintouch.css"
import HorizontalRule from "../utils/horizontalrule";

interface Detail {
    icon:string;
    detail:string;
    value:string;
}

const details: Detail[] = [
    // Using font-awesome for the icon : phone, envelope, globe, location-dot
    {
        icon: "phone",
        detail: "Phone",
        value: "+1 (450)-123-4567"
    },
    {
        icon: "envelope",
        detail: "Email",
        value: "office@example.com"
    },
    {
        icon: "globe",
        detail: "Website",
        value: "www.wesoftqc.com"
    },
    {
        icon: "location-dot",
        detail: "Address",
        value: "3000 Bd de Tracy, Sorel-Tracy, QC J3R 5B9"
    }
];

function renderIcon(icon:string) {
    return <i className={`fa-solid fa-${icon} primary-color`}></i>
}

function GetInTouch() {
    return (
        <div className="content-wrapper getintouch">
            <Container>
                <div className="getintouch__header d-flex align-items-center gap-5 mb-5">
                    <h1 className="header mb-0 fw-light" data-aos="fade-down" data-aos-duration="1500">Get In <span className="sub-header">Touch</span></h1>
                    <HorizontalRule/>
                </div>
                <p className="desc mt-2 text-wrap text-start">
                    We would love to hear from you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra laoreet dolor sit amet blandit. Ut suscipit nisl ut risus volutpat malesuada.
                </p>
                <Row className="mt-5">
                    <Col md={6} className="mb-5">
                        <h2 className="fw-light small-header mb-4">Leave us a Message</h2>
                        <Form className="getintouch__form px-3 py-4 d-flex flex-column gap-3">
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Control type="text" required placeholder="Name*" className="getintouch__input" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Control type="email" required placeholder="Email*" className="getintouch__input" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Control as="textarea" required rows={3} placeholder="Message*" className="getintouch__textarea" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="getintouch__button">
                                SEND MESSAGE
                            </Button>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <h2 className="fw-light small-header mb-4">Our Details</h2> 
                        <div className="getintouch__contact-info p-4">
                            <ul className="d-flex flex-column gap-3 p-0">
                                {details.map((detail, index) => (
                                    <li className="d-flex flex-row gap-2 align-items-center" key={index}>
                                        {renderIcon(detail.icon)}
                                        <p className="m-0 primary-color">
                                            <span className="fw-bold body-color">{detail.detail}:  </span>
                                            {` ` + detail.value}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11083.224707689695!2d-73.15927326679233!3d46.015060823333066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc88fa2e444276b%3A0x70bf9439911e2b63!2sC%C3%A9gep%20Sorel-Tracy!5e0!3m2!1sfr!2sca!4v1710467969968!5m2!1sfr!2sca" allowFullScreen={false} loading="lazy"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default GetInTouch;
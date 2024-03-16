import { Col, Container, Row } from "react-bootstrap";
import "../styles/components/team.css";
import HorizontalRule from "../utils/horizontalrule";
import team1 from "/images/team1.jpg";
import team2 from "/images/team2.jpg";
import team3 from "/images/team3.jpg";
import team4 from "/images/team4.jpg";
import img1 from "/images/img1.jpg";
import img2 from "/images/img2.jpg";
import img3 from "/images/img3.jpg";
import img4 from "/images/img4.jpg";
import img5 from "/images/img5.jpg";
import img6 from "/images/img6.jpg";

interface ImageCardProps {
    name: string;
    member: TeamMember;
}

interface TeamMember {
    role: string;
    image: string;
}

interface ImageMap {
    [key: string]: TeamMember;
}

const team: ImageMap = {
    "Joon-Ho K.": {
        role: "Lead Designer",
        image: team1
    },
    "John S.": {
        role: "Founder",
        image: team2
    },
    "Emily J.": {
        role: "Lead Artist",
        image: team3
    },
    "Malik T.": {
        role: "Lead Programmer",
        image: team4
    }
}

const images: string[] = [img1, img2, img3, img4, img5, img6];

function Team() {
    return(
        <div id="team" className="content-wrapper mt-5">
            <Container>
                <div className="d-flex align-items-center gap-5">
                    <h1 className="header mb-0 fw-light" data-aos="fade-down" data-aos-duration="1500">The <span className="sub-header">Team</span></h1>
                    <HorizontalRule/>
                </div>
                <p className="desc mt-2 text-wrap text-start">
                    As a game studio, our passion drives us to create immersive worlds, captivating gameplay, and memorable experiences for players worldwide. With a team of talented developers, designers, and storytellers, we push the boundaries of gaming innovation, bringing dreams to life one pixel at a time.
                </p>
                <Row className="g-5 d-flex flex-row mb-5">
                    {Object.entries(team).map(([name, member]) => (
                        <Col key={name} xs={12} sm={6} md={4} lg={3}>
                            <ImageCard name={name} member={member} />
                        </Col>
                    ))}
                </Row>
                <h1 data-aos="fade-down" data-aos-duration="1500" className="small-header d-block position-relative">
                    Our Studio
                </h1>
                <p className="desc mt-2 text-wrap text-start">
                    At Our Studio, creativity is our cornerstone. We blend passion and innovation to craft immersive gaming experiences that captivate players worldwide.
                </p>
                <Row className="team__studio-images g-2 mb-5">
                    {images.map((image, index) => (
                        <Col className="team__wrapper-image position-relative" key={index} xs={6} md={4}>
                            <img src={image} className="img-fluid" alt={`Image ${index}`}/>
                            <i className="fa-regular fa-image position-absolute"></i>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

function ImageCard({ name, member }: ImageCardProps) {
    return (
        <div className="card team__card text-center position-relative overflow-hidden">
            <figure>
                <img src={member.image} className="img-fluid box-shadow" alt={name}/>
            </figure>
            <p className="team__card-name fw-bold mb-0">{name}</p>
            <p className="team__card-subtle">{member.role}</p>
            <div className="team__hover-content text-light p-4 position-absolute top-0 left-0 bottom-0 right-0 d-flex flex-column align-items-center justify-content-center">
                <p className="team__quote mb-1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                <hr className="team__quote-divider mb-3" />
                <div className="d-flex gap-3">
                    <a href="#"><i className="fa-brands fa-facebook-f icon"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter icon"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in icon"></i></a>
                </div>
            </div>
        </div>
    );
}


export default Team;
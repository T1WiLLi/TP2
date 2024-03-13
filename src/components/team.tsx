import { Col, Container, Row } from "react-bootstrap";
import "../styles/components/team.css";
import HorizontalRule from "../utils/horizontalrule";
import team1 from "../../public/images/team1.jpg";
import team2 from "../../public/images/team2.jpg";
import team3 from "../../public/images/team3.jpg";
import team4 from "../../public/images/team4.jpg";

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

function Team() {
    return(
        <div id="team" className="team__content_wrapper">
            <Container>
                <div className="team__header d-flex align-items-center gap-5">
                    <h1 className="mb-0 fw-light">The <span>Team</span></h1>
                    <HorizontalRule/>
                </div>
                <p className="team__desc mt-2 text-wrap text-start">
                    As a game studio, our passion drives us to create immersive worlds, captivating gameplay, and memorable experiences for players worldwide. With a team of talented developers, designers, and storytellers, we push the boundaries of gaming innovation, bringing dreams to life one pixel at a time.
                </p>
                <Row className="g-5 d-flex flex-row">
                    {Object.entries(team).map(([name, member]) => (
                        <Col key={name} xs={12} sm={6} md={4} lg={3}>
                            <ImageCard name={name} member={member} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

function ImageCard({ name, member }: ImageCardProps) {
    return (
        <div className="team__card text-center position-relative overflow-hidden">
            <figure>
                <img src={member.image} className="img-fluid" alt={name}/>
            </figure>
            <p className="team__card-name fw-bold mb-0">{name}</p>
            <p className="team__card-subtle">{member.role}</p>
            <div className="team__hover-content position-absolute d-flex flex-column align-items-center justify-content-center">
                <p className="team__quote mb-1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                <hr className="team__quote-divider mb-3" />
                <div className="team__social-links d-flex">
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    );
}


export default Team;
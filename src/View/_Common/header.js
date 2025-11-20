import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const options = { threshold: 0.6 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
    return (
        <React.Fragment>
            <Navbar expand="lg" className="my-navbar">
                <Container>
                    <Navbar.Brand as={Link} to="/">Book Sailing Mumbai</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="navbar-links" activeKey={activeSection}>
                            <Nav.Link as={HashLink} smooth to="#home" eventKey="home" className={activeSection === "home" ? "active" : ""}>Home</Nav.Link>
                            <Nav.Link as={HashLink} smooth to="#our_fleet" eventKey="our_fleet" className={activeSection === "our_fleet" ? "active" : ""}>Our Fleet</Nav.Link>
                            <Nav.Link as={HashLink} smooth to="#experiences" eventKey="experiences" className={activeSection === "experiences" ? "active" : ""}>
                                Experiences
                            </Nav.Link>
                            <Nav.Link as={HashLink} smooth to="#safety" eventKey="safety" className={activeSection === "safety" ? "active" : ""}>Safety</Nav.Link>
                            <Nav.Link as={HashLink} smooth to="#contact" eventKey="contact" className={`contact-us ${activeSection === "contact" ? "active" : ""}`}>
                                Contact Us
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

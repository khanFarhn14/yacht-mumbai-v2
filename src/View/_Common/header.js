import React, { useEffect, useState } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const location = useLocation();

    // Detect active section for HOME PAGE scrolling
    useEffect(() => {
        if (location.pathname !== "/safety-guidelines") {
            const sections = document.querySelectorAll("section[id]");
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveSection(entry.target.id);
                        }
                    });
                },
                { threshold: 0.6 }
            );

            sections.forEach((section) => observer.observe(section));
            return () => observer.disconnect();
        }
    }, [location.pathname]);

    // When on SAFETY PAGE → make Safety active
    useEffect(() => {
        if (location.pathname === "/safety-guidelines") {
            setActiveSection("safety-guidelines");
        }
    }, [location.pathname]);

    return (
        <Navbar expand="lg" className="my-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/">Book Sailing Mumbai</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="navbar-links" activeKey={activeSection}>
                        
                        {/* Home */}
                        <Nav.Link
                            as={HashLink}
                            smooth
                            to="/home#home"
                            eventKey="home"
                            className={activeSection === "home" ? "active" : ""}
                        >
                            Home
                        </Nav.Link>

                        {/* Fleet */}
                        <Nav.Link
                            as={HashLink}
                            smooth
                            to="/home#our_fleet"
                            eventKey="our_fleet"
                            className={activeSection === "our_fleet" ? "active" : ""}
                        >
                            Our Fleet
                        </Nav.Link>

                        {/* Experiences */}
                        <Nav.Link
                            as={HashLink}
                            smooth
                            to="/home#experiences"
                            eventKey="experiences"
                            className={activeSection === "experiences" ? "active" : ""}
                        >
                            Experiences
                        </Nav.Link>

                        {/* SAFETY → NORMAL LINK (Another page) */}
                        <Nav.Link
                            as={Link}
                            to="/safety-guidelines"
                            eventKey="safety-guidelines"
                            className={activeSection === "safety-guidelines" ? "active" : ""}
                        >
                            Safety
                        </Nav.Link>

                        {/* Contact */}
                        <Nav.Link
                            as={HashLink}
                            smooth
                            to="/home#contact"
                            eventKey="contact"
                            className={`contact-us ${activeSection === "contact" ? "active" : ""}`}
                        >
                            Contact Us
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
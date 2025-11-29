import React, { useEffect, useState } from "react";
import "./footer.scss";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    const [activeSection, setActiveSection] = useState("");

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
            <footer className="footer">
                <Container>
                    <div className="footer-top">
                        <Row className="gy-4">
                            <Col md={3} className="footer-col">
                                <div className="footer-title">
                                    <h2>Yacht Mumbai</h2>
                                    <h3>Experience luxury on the Arabian Sea with Mumbai's premier yacht and speed boat charter service.</h3>
                                </div>

                            </Col>
                            <Col md={3} className="footer-col">
                                <h5 className="text-uppercase">Quick Links</h5>
                                <ul>
                                    <li><Nav.Link as={Link}>Home</Nav.Link></li>
                                    <li><Nav.Link as={Link}>Our Fleet</Nav.Link></li>
                                    <li><Nav.Link as={Link}>Experiences</Nav.Link></li>
                                    <li><Nav.Link as={Link}>Safety</Nav.Link></li>
                                    <li><Nav.Link as={Link}>Contact</Nav.Link></li>
                                </ul>
                            </Col>
                            <Col md={3} className="footer-col">
                                <h5 className="text-uppercase">Services</h5>
                                <ul>
                                    <li><Nav.Link as={Link}>Luxury Yacht Charters</Nav.Link></li>
                                    <li><Nav.Link as={Link}>Speed Boat Rentals</Nav.Link></li>
                                    <li><Nav.Link as={Link}>Sunset Cruises</Nav.Link></li>
                                    <li><Nav.Link as={Link}>Corporate Events</Nav.Link></li>
                                    <li><Nav.Link as={Link}>Private Celebrations</Nav.Link></li>
                                    <li><Nav.Link as={Link}>Wedding Proposals</Nav.Link></li>
                                </ul>
                            </Col>

                            <Col md={3} className="footer-col">
                                <h5 className="text-uppercase">Connect With Us</h5>
                                <ul>
                                    <li><Nav.Link as={Link}>info@yachtmumbai.in</Nav.Link></li>
                                    <li><Nav.Link as="a" href="tel:+919876543210">+91 98765 43210</Nav.Link></li>
                                </ul>

                                <ul className="d-flex align-items-center gap-3 social-icons">
                                    <li><Nav.Link as={Link}><i className="ri-facebook-fill"></i></Nav.Link></li>
                                    <li><Nav.Link as={Link}><i className="ri-instagram-line"></i></Nav.Link></li>
                                    <li><Nav.Link as={Link}><i className="ri-twitter-line"></i></Nav.Link></li>
                                    <li><Nav.Link as={Link}><i className="ri-linkedin-fill"></i></Nav.Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>

                    <div className="bottom-footer">
                        <p>© 2024 Yacht Mumbai. All rights reserved.</p>
                        <ul className="d-flex gap-3">
                            <li>
                                <Nav.Link as={HashLink} className={activeSection === "privacy-policy" ? "active" : ""} to="privacy-policy" eventKey="privacy-policy">
                                    Privacy Policy
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link as={HashLink} className={activeSection === "terms-of-use" ? "active" : ""} to="terms-of-use" eventKey="terms-of-use">
                                    Terms of Use
                                </Nav.Link>
                            </li>
                            <li>
                                <Nav.Link as={HashLink} className={activeSection === "safety-guidelines" ? "active" : ""} to="safety-guidelines" eventKey="safety-guidelines">
                                    Safety Guidelines
                                </Nav.Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </footer>
        </React.Fragment>
    )
}
import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <React.Fragment>
        <Navbar expand="lg" className="my-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/">Book Sailing Mumbai</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="navbar-links">
                        <Nav.Link  href="#home">Home</Nav.Link>
                        <Nav.Link  href="#our_fleet">Our Fleet</Nav.Link>
                        <Nav.Link  href="#experiences">Experiences</Nav.Link>
                        <Nav.Link  href="#safety">Safety</Nav.Link>
                        <Nav.Link  href="#contact" className="contact-us">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </React.Fragment>
    );
}

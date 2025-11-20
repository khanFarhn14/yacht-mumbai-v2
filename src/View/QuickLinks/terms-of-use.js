import React from "react";
import "./quick-link.scss";
import Header from "../_Common/header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import infoData from "../../json/QuickLinks/terms-of-use.json";

export default function TermsofUse() {

    return (
        <React.Fragment>
            <Header />
            {/* TOP QUICK LINK SECTION */}
            <section className="top-quick-links-section">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={10} lg={8} className="text-center">

                            <a className="back-link" href="/home">
                                <i className="ri-arrow-left-line"></i> Back to Home
                            </a>

                            <div className="privacy-icon">
                                <div className="icon-circle">
                                    <i className="ri-scales-3-line"></i>
                                </div>
                            </div>

                            <h3 className="title">Terms of Use</h3>

                            <p className="desc">
                                Please read these Terms of Use carefully before booking or using any services provided by Book Sailing Mumbai.
                                These terms govern your use of our website and yacht charter services.
                            </p>

                            <p className="updated-date">Last Updated: November 15, 2025</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* QUICK LINK COMMON SECTION */}
            <section className="quick-links-common-section">
                <Container>
                    {infoData?.map((item, index) => (
                        <Card className="info-wrapper-card" key={`info-${index}`}>
                            <Card.Body>
                                <div className="info-wrapper">
                                    <div className="info-header">
                                        <span className="icon"><i className={item?.icon}></i></span>
                                        <h2>{item?.title}</h2>
                                    </div>

                                    {item?.sections?.map((section, sectionIndex) => (
                                        <div key={`section-${index}-${sectionIndex}`} className="info-block">
                                            <h4>{section?.heading}</h4>
                                            <p>{section?.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </section>

            {/* PRIVACY SECTION */}
            <section className="notice-container">
                <Container>
                    <Card className="notice-card shadow-sm">
                        <Card.Body>
                            <Row>
                                <Col xs="auto" className="icon-col">
                                    <div className="icon-wrapper">
                                        <i className="ri-error-warning-line"></i>
                                    </div>
                                </Col>

                                <Col>
                                    <h5 className="notice-title">Important Notice</h5>

                                    <p className="notice-text">
                                        By making a booking with Book Sailing Mumbai, you acknowledge that you have
                                        read, understood, and agree to be bound by these Terms of Use. If you have
                                        any questions or concerns about these terms, please contact us before
                                        completing your booking.
                                    </p>

                                    <p className="notice-text">
                                        We are committed to providing you with a safe, enjoyable, and memorable
                                        yacht charter experience. These terms are designed to protect both you and
                                        our company, ensuring a smooth and satisfactory service for all parties.
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </section>

            {/* CONTACT PRIVACY SECTION */}
            <section className="contact-privacy-section">
                <Card className="contact-card">
                    <div className="icon-box">
                        <i className="ri-mail-line"></i>
                    </div>

                    <h4>Questions About Our Terms?</h4>

                    <p>If you have any questions, concerns, or need clarification about these Terms of Use, our team is here to help.</p>

                   <div>
                     <Button type="button" variant="primary" as="a" href="mailto:info@booksailingmumbai.com" className="email-btn me-2" >
                        <i className="ri-mail-send-line me-2 align-middle"></i>
                        <span className="align-middle">Emila Us</span>
                    </Button>

                     <Button type="button" variant="outline-dark" as="a" href="tel:+917666689265" className="email-btn" >
                        <i className="ri-phone-line me-2 align-middle"></i>
                        <span className="align-middle">Call +91 76666 89265</span>
                    </Button>
                   </div>
                </Card>
            </section>
        </React.Fragment>
    )
}
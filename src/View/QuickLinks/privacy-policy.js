import React from "react";
import "./quick-link.scss";
import Header from "../_Common/header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import infoData from "../../json/QuickLinks/privacy-policy.json";

export default function PrivacyPolicy() {
    const privacyData = [
        {
            icon: "ri-mail-line",
            title: "Children's Privacy",
            desc: `Our services are not directed to children under 13 years of age. 
    We do not knowingly collect personal information from children. 
    If you believe we have collected information from a child, 
    please contact us immediately.`,
        },
        {
            icon: "ri-phone-line",
            title: "Third-Party Links",
            desc: `Our website may contain links to third-party websites. 
    We are not responsible for the privacy practices of these external sites. 
    We encourage you to review their privacy policies before 
    providing any personal information.`,
        },
        {
            icon: "ri-shield-check-line",
            title: "Changes to This Policy",
            desc: `We may update this Privacy Policy from time to time to reflect 
    changes in our practices or legal requirements. 
    We will notify you of significant changes by posting 
    a notice on our website or sending you an email.`,
        }
    ]

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
                                    <i className="ri-lock-2-line"></i>
                                </div>
                            </div>

                            <h3 className="title">Privacy Policy</h3>

                            <p className="desc">
                                At Book Sailing Mumbai, we are committed to protecting your privacy
                                and ensuring the security of your personal information. This Privacy
                                Policy explains how we collect, use, share, and protect your
                                information when you use our yacht charter services.
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
            <section className="privacy-section">
                <Container>
                    <Row className="g-4 justify-content-center">
                        {privacyData.map((item, index) => (
                            <Col key={index} lg={4} md={6} sm={12} className="d-flex justify-content-center">
                                <Card className="privacy-card">
                                    <Card.Body>
                                        <div className="icon-wrapper">
                                            <i className={item.icon}></i>
                                        </div>
                                        <h4 className="title">{item.title}</h4>
                                        <p className="desc">{item.desc}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* CONTACT PRIVACY SECTION */}
            <section className="contact-privacy-section">
                <Card className="contact-card">
                    <div className="icon-box">
                        <i className="ri-mail-line"></i>
                    </div>

                    <h4>Questions About Your Privacy?</h4>

                    <p>
                        If you have any questions or concerns regarding this Privacy Policy
                        or how we handle your personal information, don’t hesitate to contact us.
                    </p>

                    <Button
                        type="button"
                        as="a"
                        href="mailto:info@booksailingmumbai.com"
                        className="email-btn"
                    >
                        <i className="ri-mail-send-line me-2 align-middle"></i>
                        <span className="align-middle">info@booksailingmumbai.com</span>
                    </Button>
                </Card>
            </section>
        </React.Fragment>
    )
}
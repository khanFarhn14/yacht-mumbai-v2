import React from "react";
import "./quick-link.scss";
import "./safety-guidelines.scss";
import Header from "../_Common/header";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import wellbeingImg from "../../assets/img/home/quick-links/wellbeing.png";
import lifeSavingEquipment from "../../assets/img/home/quick-links/life-Saving-equipment.png";
import expertCrew from "../../assets/img/home/quick-links/expert-crew.png";
import medicalPreparedness from "../../assets/img/home/quick-links/medical-preparedness.png";
import weatherMonitoring from "../../assets/img/home/quick-links/weather-monitoring.png";
import regularMaintenance from "../../assets/img/home/quick-links/regular-maintenance.png";
import safetyBriefing from "../../assets/img/home/quick-links/safety-briefing.png";
import guidelinesData from "../../json/QuickLinks/guidelines-data.json";

export default function SafetyGuidelines() {
    const stats = [
        {
            icon: "ri-medal-2-line",
            value: "7+",
            label: "Years in Business",
        },
        {
            icon: "ri-heart-line",
            value: "2,000+",
            label: "Happy Passengers",
        },
        {
            icon: "ri-shield-check-line",
            value: "100%",
            label: "Safety Record",
        },
    ];

    const safetyItems = [
        {
            img: lifeSavingEquipment,
            title: "Life-Saving Equipment",
            text: "Coast Guard approved life jackets for every passenger, including specially sized jackets for children. Premium fiber-reinforced life buoy rings strategically positioned throughout the vessel.",
            icon: "ri-lifebuoy-line",
        },
        {
            img: expertCrew,
            title: "Expert Crew",
            text: "Our crew members are professionally trained in swimming, water safety, and emergency response. Every captain holds a valid license from the Directorate General of Shipping with years of experience.",
            icon: "ri-user-star-line",
        },
        {
            img: medicalPreparedness,
            title: "Medical Preparedness",
            text: "Comprehensive first aid kits with essential medical supplies on every vessel. At least one crew member is trained and certified in first aid and CPR on each trip.",
            icon: "ri-first-aid-kit-line",
        },
        {
            img: weatherMonitoring,
            title: "Weather Monitoring",
            text: "Real-time weather updates from the Indian Meteorological Department. We never compromise on safety—if conditions aren't perfect, we reschedule at no cost.",
            icon: "ri-cloud-windy-line",
        },
        {
            img: regularMaintenance,
            title: "Regular Maintenance",
            text: "Every vessel undergoes daily pre-departure inspections and regular comprehensive maintenance. All vessels are certified by the Indian Coast Guard with current safety certificates.",
            icon: "ri-tools-line",
        },
        {
            img: safetyBriefing,
            title: "Safety Briefing",
            text: "Before every departure, our crew conducts a thorough safety briefing covering emergency procedures, life jacket usage, and important dos and don’ts.",
            icon: "ri-megaphone-line",
        }
    ];

    const emergencyItems = [
        {
            icon: "ri-error-warning-line",
            title: "Man Overboard",
            text: "Immediate crew alert, life ring deployment, visual contact maintained, controlled vessel return, Coast Guard coordination"
        },
        {
            icon: "ri-heart-pulse-line",
            title: "Medical Emergency",
            text: "First aid administration, communication with shore medical support, vessel return or emergency evacuation coordination"
        },
        {
            icon: "ri-alert-line",
            title: "Fire Emergency",
            text: "Fire suppression activation, passenger evacuation to assembly points, Coast Guard notification, life raft deployment if needed"
        },
        {
            icon: "ri-phone-line",
            title: "24/7 Support",
            text: "Shore-based emergency operations center, direct Coast Guard line, GPS tracking of all vessels, backup communication systems"
        }
    ];

    const certifications = [
        {
            icon: "ri-shield-check-line",
            title: "Indian Coast Guard",
            text: "Annual vessel certification and compliance with all Coast Guard safety regulations and maritime laws"
        },
        {
            icon: "ri-anchor-line",
            title: "Maritime Safety Authority",
            text: "Licensed and inspected vessels meeting all maritime safety standards with current compliance certificates"
        },
        {
            icon: "ri-user-3-line",
            title: "Crew Certifications",
            text: "All crew members hold valid licenses and certifications from Directorate General of Shipping"
        }
    ];

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

                            <div className="privacy-icon" data-aos="fade" data-aos-duration="3000">
                                <div className="icon-circle">
                                    <i className="ri-shield-line"></i>
                                </div>
                            </div>

                            <h3 className="title" data-aos="fade-up" data-aos-duration="2500">Your Safety is Our Priority</h3>
                            <p className="desc mb-0" data-aos="fade-up" data-aos-duration="2700">At Yacht Mumbai, we believe that memorable experiences begin with peace of mind. Every precaution,
                                every protocol, and every crew member is dedicated to ensuring your journey on the water is safe, comfortable, and truly unforgettable.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* STATE CONTAINER */}
            <section className="stats-container">
                <Container>
                    <Row className="justify-content-center text-center">
                        {stats.map((item, index) => (
                            <Col key={index} xs={12} md={4} className="stats-col" data-aos="fade" data-aos-duration="2000">
                                <div className="stats-icon-wrapper">
                                    <i className={item.icon}></i>
                                </div>

                                <h2 className="stats-value">{item.value}</h2>
                                <p className="stats-label">{item.label}</p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* PROMISE SECTION */}
            <div className="promise-section">
                <Container>
                    <Row>

                        {/* LEFT CONTENT */}
                        <Col md={6} className="promise-left" data-aos="fade-right" data-aos-duration="2000">
                            <div className="promise-badge">
                                <i className="ri-heart-line"></i> Our Promise to You
                            </div>

                            <h4 className="promise-title">We Care About Your Wellbeing</h4>

                            <p className="promise-text">
                                When you step aboard one of our vessels, you're not just a passenger—
                                you're part of our extended family. We understand that you're entrusting
                                us with your safety and your special moments.
                            </p>

                            <p className="promise-text">
                                That's why we go above and beyond industry standards. From our rigorously trained
                                crew to our meticulously maintained vessels, from our comprehensive safety protocols
                                to our 24/7 emergency support, every detail is designed with your wellbeing in mind.
                            </p>

                            <p className="promise-text">
                                Safety isn't just a checklist for us—it's a commitment we honor with every journey,
                                every day.
                            </p>
                        </Col>

                        {/* RIGHT IMAGE */}
                        <Col md={5} data-aos="fade-left" data-aos-duration="2000">
                            <div className="promise-right">
                                <Image src={wellbeingImg} alt="Passengers on deck" className="promise-image" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            {/* SAFETY SECION */}
            <section className="safety-section">
                <Container>
                    <div className="heading-wrapper" data-aos="fade-up" data-aos-duration="2500">
                        <h4 className="heading">How We Keep You Safe</h4>
                        <p className="subtext">
                            From state-of-the-art equipment to expert crew training, here’s what makes
                            your journey with us secure
                        </p>
                    </div>
                    <Row>
                        {safetyItems.map((item, idx) => (
                            <Col md={4} sm={6} xs={12} className="mb-4" key={idx}>
                                <Card className="safety-card" data-aos="fade" data-aos-duration="2000">
                                    <Card.Img variant="top" src={item.img} className="card-img" />
                                    <Card.Body>
                                        <div className="icon-title">
                                            <span className="icons">
                                                <i className={item.icon}></i>
                                            </span>
                                            <Card.Title>{item.title}</Card.Title>
                                        </div>
                                        <Card.Text>{item.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <div className="certification" data-aos="fade-up" data-aos-duration="2000">
                        <i className="ri-shield-line align-middle"></i>
                        <spam className="align-middle">All vessels certified by Indian Coast Guard and Maritime Safety Authority</spam>
                    </div>
                </Container>
            </section>

            {/* GUIDE LINE SECTION */}
            <section className="guidelines-section">
                <Container>
                    <div className="guidelines-header" data-aos="fade-up" data-aos-duration="2000">
                        <h3 className="title">Your Safety Guidelines</h3>
                        <p className="subtitle">Simple tips to help you have a safe and comfortable experience on the water</p>
                    </div>

                    <Row>
                        {guidelinesData?.map((item, index) => (
                            <Col md={6} lg={6} key={index} className="mb-4">
                                <Card className="guidelines-card" data-aos="fade" data-aos-duration="2000">
                                    <Card.Body>
                                        <div className="icon-wrapper">
                                            <div className="icons">
                                                <i className={item.icon}></i>
                                            </div>
                                            <Card.Title className="mb-0">{item.title}</Card.Title>
                                        </div>

                                        <ul className="safety-list">
                                            {item.lists.map((listItem, j) => (
                                                <li key={j}>
                                                    <div className="icons">
                                                        <i className="ri-checkbox-circle-line"></i>
                                                    </div>
                                                    <div>
                                                        <h3>{listItem?.title}</h3>
                                                        <p>{listItem?.sub_title}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <Card className="guidelines-footer-card shadow-sm" data-aos="fade" data-aos-duration="2000">
                        <Card.Body className="text-center">
                            <i className="ri-information-line info-icon"></i>

                            <h5 className="card-title mt-3">Have Questions About Safety?</h5>

                            <p className="card-text">
                                Our crew conducts a comprehensive safety briefing before every departure.
                                <br />
                                Feel free to ask any questions—we’re here to ensure you feel comfortable
                                and informed throughout your journey.
                            </p>
                        </Card.Body>
                    </Card>
                </Container>
            </section>

            {/* EMERGENCY SECTION */}
            <section className="emergency-section">
                <Container>
                    <div className="section-header text-center" data-aos="fade-up" data-aos-duration="2000">
                        <h5>Emergency Response</h5>
                        <p>
                            While emergencies are rare, we're thoroughly prepared with detailed protocols <br />
                            and trained professionals
                        </p>
                    </div>

                    <Row className="gy-4 justify-content-center">
                        {emergencyItems.map((item, index) => (
                            <Col key={index} xs={12} sm={6} lg={3} data-aos="fade" data-aos-duration="2000">
                                <Card className="emergency-card text-center h-100">
                                    <div className="icon-wrapper mx-auto">
                                        <i className={item.icon}></i>
                                    </div>

                                    <Card.Body>
                                        <h6 className="card-title">{item.title}</h6>
                                        <p className="card-text">{item.text}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* CERTIFICATION COMPLIANCE SECTION */}
            <section className="certifications-compliance-section">
                <Container>
                    <div className="section-header text-center" data-aos="fade-up" data-aos-duration="2000">
                        <h5>Official Certifications & Compliance</h5>
                        <p>
                            All our vessels and crew members maintain current certifications from recognized <br />
                            maritime authorities
                        </p>
                    </div>

                    <Row className="gy-4 justify-content-center">
                        {certifications.map((item, index) => (
                            <Col key={index} xs={12} md={6} lg={4}>
                                <Card className="cert-card text-center h-100" data-aos="fade" data-aos-duration="2000">
                                    <div className="icon-wrapper">
                                        <i className={item.icon}></i>
                                    </div>

                                    <Card.Body>
                                        <h6 className="card-title">{item.title}</h6>
                                        <p className="card-text">{item.text}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* CONTACT PRIVACY SECTION */}
            <section className="contact-privacy-section" data-aos="fade-up" data-aos-duration="2000">
                <Card className="contact-card">
                    <h4>Ready for a Safe and Memorable Experience?</h4>
                    <p>Book your yacht charter with confidence. Our team is available 24/7 to answer any questions about safety, procedures, or your upcoming voyage.</p>

                    <div>
                        <Button type="button" variant="primary" className="email-btn me-2">Book Your Experience</Button>
                        <Button type="button" variant="outline-dark" className="email-btn">Ask Safety Questions</Button>
                    </div>
                </Card>
            </section>
        </React.Fragment>
    )
}
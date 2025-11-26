import React, { useEffect, useState } from "react";
import "./full-fleet.scss";
import Header from "../_Common/header";
import { Button, Col, Container, Form, Image, Nav, Row, Tab } from "react-bootstrap";
import fleetTabsData from "../../json/FullFleet/fleet-tabs.json";

import sailingIcon from "../../assets/img/home/our-fleet/icons/sailing-boat.png";
import boatIcon from "../../assets/img/home/our-fleet/icons/boat.png";
import starIcon from "../../assets/img/home/our-fleet/icons/star.png";
import lightingIcon from "../../assets/img/home/our-fleet/icons/lighting.png";

import sailBoatsImg from "../../assets/img/home/our-fleet/sail-boats.png";
import sailYachtsImg from "../../assets/img/home/our-fleet/sail-yachts.png";
import motorYachtsImg from "../../assets/img/home/our-fleet/motor-yachts.png";
import speedBoatsImg from "../../assets/img/home/our-fleet/speed-boats.png";

import Aos from "aos";

export default function FullFleet() {
    const fleetImages = {
        "sailBoats": sailBoatsImg,
        "sailYachts": sailYachtsImg,
        "motorYachts": motorYachtsImg,
        "speedBoats": speedBoatsImg
    };

    const [aosKey, setAosKey] = useState(0);

    useEffect(() => {
        Aos.init({ duration: 800, once: false }); // initialize AOS
    }, []);

    // Refresh AOS every time aosKey changes
    useEffect(() => {
        setTimeout(() => {
            Aos.refreshHard();
        }, 100);
    }, [aosKey]);


    const handleTabClick = () => setAosKey(prev => prev + 1);

    const [activeSpecId, setActiveSpecId] = useState(null);
    const handleClick = () => {
        setActiveSpecId(false);
    };

    return (
        <React.Fragment>
            <Header />
            {/* OUR FLEET CONTENT */}
            <section className="our-fleet-section">
                <Container>
                    <div className="our-fleet-content">
                        <span className="premium-fleet-badge">
                            <i className="ri-menu-4-line align-middle"></i>
                            <span className="align-middle">PREMIUM FLEET COLLECTION</span>
                        </span>
                        <h2>Our Fleet</h2>
                        <p>From intimate sailboats to luxury motor yachts, discover the perfect vessel for your Mumbai maritime experience</p>
                    </div>
                </Container>
            </section>

            {/* FLEET NAV TAB SECTION */}
            <section className="fleet-nav-tab-section">
                <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="sail_boats_tab"
                    onSelect={handleTabClick}
                >
                    {/* TAB NAV */}
                    <div className="fleet-tabs-header">
                        <Container>
                            <Nav variant="pills">
                                {fleetTabsData.map(item => (
                                    <Nav.Item key={item.id}>
                                        <Nav.Link eventKey={item.key} onClick={handleClick}>
                                            <Image
                                                className="align-middle"
                                                src={item.id === "01" ? sailingIcon : item.id === "02" ? boatIcon : item.id === "03" ? starIcon : lightingIcon}
                                                alt="icon"
                                            />
                                            <span className="align-middle">{item.name}</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Container>
                    </div>

                    {/* TAB CONTENT */}
                    <div className="fleet-tabs-content">
                        <Container>
                            <Tab.Content>
                                {fleetTabsData.map(item => (
                                    <Tab.Pane key={item.id} eventKey={item.key}>
                                        <Row className="g-3 align-items-center fleet-panel">
                                            {/* LEFT IMAGE */}
                                            <Col lg={6} md={12} data-aos="fade-right">
                                                <div className="fleet-tabs-img">
                                                    <div className="fleet-image-box">
                                                        <Image src={fleetImages[item.img]} className="fleet-image" alt={item.name} />
                                                        <div className="capacity-card">
                                                            <div><i className="ri-group-line"></i></div>
                                                            <div>
                                                                <span>Capacity</span>
                                                                <h5>{item.capacity}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>

                                            {/* RIGHT CONTENT */}
                                            <Col lg={6} md={12} data-aos="fade-left">
                                                <div className="fleet-info">
                                                    <span className="fleet-badge">{item.badge}</span>
                                                    <h2>{item.name}</h2>
                                                    <p>{item.des}</p>

                                                    {/* FEATURES */}
                                                    <Row>
                                                        {item.list.map((feature, i) => (
                                                            <Col sm={6} xs={12} className="feature-item" key={i}>
                                                                <span className="feature-icon"><i className="ri-check-line"></i></span>
                                                                {feature}
                                                            </Col>
                                                        ))}
                                                    </Row>

                                                    {/* BUTTONS */}
                                                    <div className="fleet-buttons">
                                                        <Button variant="dark" className="btn-main">Quick Overview</Button>
                                                        <Button variant="light" className="btn-light" onClick={() => setActiveSpecId(item.id)}>
                                                            Full Specifications
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        {activeSpecId === item.id && (
                                            <div className="fleet-info-wrapper">
                                                {item?.info.map((list, idx) => (
                                                    <Row className="g-3" key={idx}>
                                                        {/* TECHNICAL SPECIFICATIONS */}
                                                        <Col lg={4} md={12}>
                                                            <div className="technical-specifications">
                                                                <h3>Technical Specifications</h3>
                                                                <ul>
                                                                    {Object.entries(list?.technicalSpecifications).map(
                                                                        ([key, value]) => (
                                                                            <li key={key}>
                                                                                <span className="text-capitalize">{key}</span>
                                                                                <span>{value}</span>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        </Col>

                                                        {/* FEATURES & AMENITIES */}
                                                        <Col lg={4} md={12}>
                                                            <div className="features-amenities">
                                                                <h3>Features & Amenities</h3>
                                                                <ul className="first-ul">
                                                                    <li><strong>Core Features</strong></li>
                                                                    {list?.featuresAndAmenities?.coreFeatures.map((core, i) => (
                                                                        <li key={i}><i className="ri-check-line text-primary"></i> {core}</li>
                                                                    ))}
                                                                </ul>

                                                                <ul>
                                                                    <li><strong>Premium Amenities</strong></li>
                                                                    {list?.featuresAndAmenities?.premiumAmenities.map((premium, i) => (
                                                                        <li key={i}><i className="ri-check-line text-success"></i> {premium}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </Col>

                                                        {/* PERFECT FOR + BOOKING INFO */}
                                                        <Col lg={4} md={12}>
                                                            <div className="perfect-for">
                                                                <h3>Perfect For</h3>
                                                                <ul>
                                                                    {list?.perfectFor.map((perfect, i) => (
                                                                        <li key={i}>{perfect}</li>
                                                                    ))}
                                                                </ul>

                                                                <Button variant="primary" className="w-100">
                                                                    Request This Yacht
                                                                </Button>

                                                                {/* BOOKING NOTICE */}
                                                                <div className="booking-point">
                                                                    <div><i className="ri-time-line"></i></div>
                                                                    <div>
                                                                        <Form.Label>Booking Notice</Form.Label>
                                                                        <h5>{list?.bookingNotice}</h5>
                                                                    </div>
                                                                </div>

                                                                {/* DEPARTURE POINT */}
                                                                <div className="booking-point">
                                                                    <div><i className="ri-map-pin-line"></i></div>
                                                                    <div>
                                                                        <Form.Label>Departure Point</Form.Label>
                                                                        <h5>{list?.departurePoint}</h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                ))}
                                            </div>
                                        )}
                                    </Tab.Pane>
                                ))}
                            </Tab.Content>
                        </Container>
                    </div>
                </Tab.Container>
            </section>

            <section className="need-help-section">
                <Container>
                    <div className="need-help-content">
                        <h2>Need Help Choosing?</h2>
                        <p>Our experienced team will guide you to the perfect vessel based on your group size, occasion, and preferences</p>
                        <div className="need-help-btn d-flex gap-3 justify-content-center">
                            <Button variant="primary">Speak with an Expert</Button>
                            <Button variant="default">Call Now</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}
import React, { useEffect, useState } from "react";
import "./full-fleet.scss";
import Header from "../_Common/header";
import { Button, Col, Container, Image, Nav, Row, Tab } from "react-bootstrap";
import sailingIcon from "../../assets/img/home/our-fleet/icons/sailing-boat.png";
import boatIcon from "../../assets/img/home/our-fleet/icons/boat.png";
import starIcon from "../../assets/img/home/our-fleet/icons/star.png";
import lightingIcon from "../../assets/img/home/our-fleet/icons/lighting.png";
import fleetTabsData from "../../json/FullFleet/fleet-tabs.json";

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
                                        <Nav.Link eventKey={item.key}>
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
                                        <Row className="align-items-center fleet-panel">
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
                                                        <Button variant="light" className="btn-light">Full Specifications</Button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
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
                        <div className="need-help-btn d-flex gap-2 justify-content-center">
                            <Button variant="primary">Speak with an Expert</Button>
                            <Button variant="default">Call Now</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}
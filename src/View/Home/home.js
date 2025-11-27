import React, { useState } from "react";
import "./home.scss";
import Header from "../_Common/header";
import { Button, Col, Container, Form, Image, Modal, Row } from "react-bootstrap";

import sailingIcon from "../../assets/img/home/our-fleet/icons/sailing-boat.png";
import boatIcon from "../../assets/img/home/our-fleet/icons/boat.png";
import starIcon from "../../assets/img/home/our-fleet/icons/star.png";
import lightingIcon from "../../assets/img/home/our-fleet/icons/lighting.png";

import sailBoatsImg from "../../assets/img/home/our-fleet/sail-boats.png";
import sailYachtsImg from "../../assets/img/home/our-fleet/sail-yachts.png";
import motorYachtsImg from "../../assets/img/home/our-fleet/motor-yachts.png";
import speedBoatsImg from "../../assets/img/home/our-fleet/speed-boats.png";

import sunsetCruiseImg from "../../assets/img/home/featured-experiences/sunset-cruise.png";
import speedBoatAdventureImg from "../../assets/img/home/featured-experiences/speed-boat-adventure.png";
import privatePartyYachtImg from "../../assets/img/home/featured-experiences/private-party-yacht.png";
import corporateMeetingsEventsImg from "../../assets/img/home/featured-experiences/corporate-meetings-events.png";
import eventCelebrationsImg from "../../assets/img/home/featured-experiences/event-celebrations.png";
import anniversaryCelebrationsImg from "../../assets/img/home/featured-experiences/anniversary-celebrations.png";

import SunsetCruiseIcon from "../../assets/img/home/featured-experiences/icons/sunset.png";
import speedBoatIcon from "../../assets/img/home/featured-experiences/icons/boat.png";
import privatePartyIcon from "../../assets/img/home/featured-experiences/icons/confetti.png";
import corporateMeetingsIcon from "../../assets/img/home/featured-experiences/icons/discussion.png";
import eventCelebrationsIcon from "../../assets/img/home/featured-experiences/icons/celebration.png";
import anniversaryIcon from "../../assets/img/home/featured-experiences/icons/party-popper.png";
import { Link } from "react-router-dom";

export default function Home() {
    // YATCH DATA
    const yachtData = [
        {
            title_icon: sailingIcon,
            title: "Sail Boats",
            capacity: "Traditional Elegance",
            description: "Experience the timeless charm of traditional sailing. Perfect for intimate gatherings and peaceful cruising along Mumbai's coastline.",
            tags: "6-8 Guests",
            image: sailBoatsImg,
            icon: "ri-group-line"
        },
        {
            title_icon: boatIcon,
            title: "Sail Yachts",
            capacity: "Sophisticated Luxury",
            description: "Elevate your celebration with our spacious luxury sail yachts. Combining traditional sailing with modern amenities for an unforgettable...",
            tags: "15-35 Guests",
            image: sailYachtsImg,
            icon: "ri-group-line"
        },
        {
            title_icon: starIcon,
            title: "Motor Yachts",
            capacity: "15-25 Guests",
            description: "Experience the pinnacle of luxury with our modern motor yachts. State-of-the-art amenities, climate control, and opulent interiors.",
            tags: "15-25 Guests",
            image: motorYachtsImg,
            icon: "ri-group-line"
        },
        {
            title_icon: lightingIcon,
            title: "Speed Boats",
            capacity: "6-12 Guests",
            description: "Feel the adrenaline rush with our high-performance speed boats. Perfect for adventure seekers and quick coastal tours.",
            tags: "6-12 Guests",
            image: speedBoatsImg,
            icon: "ri-group-line"
        }
    ];

    const featuredExperiences = [
        {
            id: "sunset_cruise",
            title_icon: SunsetCruiseIcon,
            title: "Sunset Cruise",
            img: sunsetCruiseImg,
            des: "Watch the sun set over the Arabian Sea from our premium yacht. Includes refreshments and music."
        },
        {
            id: "speed_boat_adventure",
            title_icon: speedBoatIcon,
            title: "Speed Boat Adventure",
            img: speedBoatAdventureImg,
            des: "Experience the thrill of high-speed boating with our state-of-the-art speed boats."
        },
        {
            id: "private_party_yacht",
            title_icon: privatePartyIcon,
            title: "Private Party Yacht",
            img: privatePartyYachtImg,
            des: "Celebrate your special moments with a fully customizable private yacht experience."
        },
        {
            id: "corporate_meetings",
            title_icon: corporateMeetingsIcon,
            title: "Corporate Meetings & Events",
            img: corporateMeetingsEventsImg,
            des: "Host high-end business meetings and corporate events on our luxury yacht with state-of-the-art facilities for 2-100 people."
        },
        {
            id: "event_celebrations",
            title_icon: eventCelebrationsIcon,
            title: "Event Celebrations",
            img: eventCelebrationsImg,
            des: "Make your special events unforgettable with our premium yacht celebration packages. Perfect for birthdays, milestones, and grand celebrations."
        },
        {
            id: "anniversary_celebrations",
            title_icon: anniversaryIcon,
            title: "Anniversary Celebrations",
            img: anniversaryCelebrationsImg,
            des: "Celebrate your love story with a romantic anniversary cruise. Create intimate moments on the serene waters of Mumbai."
        }
    ];

    // HANDLE FEATURE
    const [show, setShow] = useState(false);
    const [eventCelebrationsData, setEventCelebrationsData] = useState(null);
    const handleFeature = (data) => {
        setEventCelebrationsData(data);
        setShow(true);
    };

    // CLOSE MODAL
    const handleClose = () => {
        setShow(false);
        setEventCelebrationsData(null);
    };

    const whatsappLinks = {
        "sunset_cruise": "https://api.whatsapp.com/send/?phone=917666689265&text=Hi! I'd like to enquire about Sunset Cruise.%0APlease share availability, pricing, and package details.&type=phone_number&app_absent=0",

        "speed_boat_adventure": "https://api.whatsapp.com/send/?phone=917666689265&text=Hi! I'd like to enquire about Speed Boat Adventure.%0APlease share availability, pricing, and package details.&type=phone_number&app_absent=0",

        "private_party_yacht": "https://api.whatsapp.com/send/?phone=917666689265&text=Hi! I'd like to enquire about Private Party Yacht.%0APlease share availability, pricing, and package details.&type=phone_number&app_absent=0",

        "corporate_meetings": "https://api.whatsapp.com/send/?phone=917666689265&text=Hi! I'd like to enquire about Corporate Meetings & Events.%0APlease share availability, pricing, and package details.&type=phone_number&app_absent=0",

        "event_celebrations": "https://api.whatsapp.com/send/?phone=917666689265&text=Hi! I'd like to enquire about Event Celebrations.%0APlease share availability, pricing, and package details.&type=phone_number&app_absent=0",

        "anniversary_celebrations": "https://api.whatsapp.com/send/?phone=917666689265&text=Hi! I'd like to enquire about Anniversary Celebrations.%0APlease share availability, pricing, and package details.&type=phone_number&app_absent=0",
    };

    const handleBookNow = (book) => {
        const link = whatsappLinks[book.id];

        if (link) {
            window.open(link, "_blank");   // NEW TAB ✔
        } else {
            console.error("No WhatsApp link found for ID:", book.id);
        }
    }

    return (
        <React.Fragment>
            <Header />

            {/* HOME SECTION  */}
            <section className="home-section" id="home">
                <Container className="sm-container">
                    <div className="home-section-content">
                        <div className="icon" data-aos="fade" data-aos-duration="2200">
                            <i className="ri-anchor-line"></i>
                        </div>
                        <h1 data-aos="fade-up" data-aos-duration="2500">Luxury Sail & Speed Boat Experiences from Gateway of India</h1>
                        <p data-aos="fade-up" data-aos-duration="2700">Experience the Arabian Sea like never before. Premium yacht charters, sunset cruises, and unforgettable celebrations on Mumbai's pristine waters.</p>

                        <div className="home-section-content-btn" data-aos="fade-up" data-aos-duration="3000">
                            <Button type="button" variant="primary">
                                <i className="ri-bookmark-line"></i>
                                <span>Book a Trip</span>
                            </Button>
                            <Button type="button" variant="outline-info">
                                <i className="ri-ship-2-line"></i>
                                <span>Explore Yachts</span>
                            </Button>
                            <Button type="button" variant="outline-info">
                                <i className="ri-phone-line"></i>
                                <span>Contact Us</span>
                            </Button>
                        </div>
                    </div>
                </Container>

                <div className="scroll-mouse">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                </div>
            </section>

            {/* FEATURED EXPERIENCE SECTION */}
            <section className="featured-experience-section" id="experiences">
                <Container className="sm-container">
                    <div className="section-title text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                        <h2>Featured Experiences</h2>
                        <p>Choose from our curated selection of premium yacht and speed boat experiences</p>
                    </div>


                    <div className="featured-experience-content">
                        <Row className="g-3">
                            {featuredExperiences.map((item, index) => (
                                <Col key={index} xs={12} sm={6} lg={4} data-aos="fade" data-aos-duration="2000">
                                    <div className="service-card" onClick={() => handleFeature(item)} style={{ backgroundImage: `url(${item.img})` }}>
                                        <div className="service-content">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </section>

            {/* OUR FLEET SECTION  */}
            <section className="our-fleet-section" id="our_fleet">
                <Container className="sm-container">
                    <div className="section-title text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                        <h2>Our Fleet</h2>
                        <p>Choose from our diverse collection of vessels, each designed for unique experiences on Mumbai's beautiful waters</p>
                    </div>

                    <div className="our-fleet-content">
                        <Row className="g-3">
                            {yachtData.map((item, i) => (
                                <Col key={i} lg={6} md={6} sm={12} className="mb-4" data-aos="fade" data-aos-duration="2000">
                                    <div className="yacht-card" style={{ backgroundImage: `url(${item.image})` }}>
                                        <div className="content">
                                            <div className="content-title d-flex align-items-center gap-2">
                                                <div className="yacht-title-icon">
                                                    <Image src={item.title_icon} alt="icon" />
                                                </div>
                                                <div>
                                                    <h4>{item.title}</h4>
                                                    <p className="capacity">{item.capacity}</p>
                                                </div>
                                            </div>
                                            <p className="desc">{item.description}</p>
                                            <div className="tags">
                                                <i className="ri-group-line"></i>
                                                <span>{item.tags}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div className="expert-box" data-aos="fade-up" data-aos-duration="2000">
                        <h5 className="title">Ready to Set Sail?</h5>
                        <p className="subtitle">
                            Choose your perfect vessel and create unforgettable memories on Mumbai's stunning waters. Expert crew, luxury amenities,
                            and exceptional service await.
                        </p>
                        <div className="btn-group-custom">
                            <a className="primary-btn text-white" href="#">Get Expert Advice</a>
                            <a className="outline-btn" href="/full-fleet">View Full Fleet Gallery</a>
                        </div>
                    </div>
                </Container>
            </section>

            {/* GET IN TOUCH SECTION */}
            <section className="get-in-touch" id="contact">
                <Container className="sm-container">
                    <div className="section-title text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                        <h2>Get In Touch</h2>
                        <p>Ready to embark on an unforgettable journey? Contact us to book your luxury yacht experience</p>
                    </div>


                    <Row className="form-contact-wrapper">
                        {/* LEFT COLUMN — FORM */}
                        <Col xs={12} lg={7} className="form-column" data-aos="fade-right" data-aos-duration="2000">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name *</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email *</Form.Label>
                                            <Form.Control type="email" placeholder="Enter Email ID" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Phone *</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Mobile No." />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Preferred Date</Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Number of Guests</Form.Label>
                                            <Form.Select>
                                                <option>Select...</option>
                                                <option>1-5 guests</option>
                                                <option>11-15 guests</option>
                                                <option>16-20 guests</option>
                                                <option>20+ guests</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-4">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Tell us about your ideal yacht experience..." />
                                </Form.Group>

                                <Button className="submit-btn" type="button">
                                    <i className="ri-send-plane-fill align-middle"></i>
                                    <span className="align-middle">Send Inquiry</span>
                                </Button>

                            </Form>
                        </Col>

                        {/* RIGHT COLUMN — CONTACT INFO BOX */}
                        <Col xs={12} lg={5} className="contact-info-column" data-aos="fade-left" data-aos-duration="2000">
                            <div className="info-card">
                                <h5>Contact Information</h5>
                                <div className="info-item">
                                    <i className="ri-map-pin-line"></i>
                                    <div>
                                        <strong>Location</strong>
                                        <p>Gateway of India,<br />Apollo Bandar, Colaba,<br />Mumbai, Maharashtra 400001</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <i className="ri-phone-line"></i>
                                    <div>
                                        <strong>Phone</strong>
                                        <p>+91 76666 89265<br />+91 76666 89265</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <i className="ri-mail-line"></i>
                                    <div>
                                        <strong>Email</strong>
                                        <p>info@booksailingmumbai.com<br />bookings@booksailingmumbai.com</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <i className="ri-time-line"></i>
                                    <div>
                                        <strong>Operating Hours</strong>
                                        <p>Monday - Sunday: 7:00 AM - 10:00 PM<br />24/7 Emergency Support</p>
                                    </div>
                                </div>

                                <hr />
                                <p className="note">We respond to all inquiries within 24 hours. For urgent bookings, please call us directly.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* EVENT CELEBRATIONS MODAL */}
            <Modal className="event-celebrations-modal" show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="d-flex align-items-center gap-2">
                        <Image src={eventCelebrationsData?.title_icon} alt="icon" />
                        <span>{eventCelebrationsData?.title || "Event Celebrations"}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="event-celebrations-content">
                        <div className="event-celebrations-img">
                            {eventCelebrationsData?.img && (
                                <Image src={eventCelebrationsData.img} fluid />
                            )}
                        </div>
                        <h4>{eventCelebrationsData?.des}</h4>
                    </div>

                    <div className="book-event-bttn">
                        <Button variant="primary" onClick={() => handleBookNow(eventCelebrationsData)}>Book Now via WhatsApp</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}
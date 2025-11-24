import React from "react";
import "./home.scss";
import Header from "../_Common/header";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
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


export default function Home() {
    // YATCH DATA
    const yachtData = [
        {
            title: "Sail Boats",
            capacity: "6-8 Guests",
            description: "Couples, small groups, peaceful cruising, pre-wedding photoshoots",
            tags: ["Traditional sailing", "Wooden decks"],
            image: sailBoatsImg
        },
        {
            title: "Sail Yachts",
            capacity: "15-35 Guests",
            description: "Corporate parties, sunset dinners, family gatherings, special occasions",
            tags: ["Luxury interiors", "Gourmet kitchens"],
            image: sailYachtsImg
        },
        {
            title: "Motor Yachts",
            capacity: "15-25 Guests",
            description: "Birthday parties, high-end private dinners, luxury events",
            tags: ["Air-conditioned", "Multiple rooms"],
            image: motorYachtsImg
        },
        {
            title: "Speed Boats",
            capacity: "6-12 Guests",
            description: "Adventure seekers, short sea rides, quick city coastal tours",
            tags: ["Fast & thrilling", "Open deck"],
            image: speedBoatsImg
        }
    ];

    const featuredExperiences = [
        {
            title: "Sunset Cruise",
            description: "Watch the sun set over the Arabian Sea from our premium yacht. Includes refreshments and music.",
            img: sunsetCruiseImg,
        },
        {
            title: "Speed Boat Adventure",
            description: "Experience the thrill of high-speed boating with our state-of-the-art speed boats.",
            img: speedBoatAdventureImg,
        },
        {
            title: "Private Party Yacht",
            description: "Celebrate your special moments with a fully customizable private yacht experience.",
            img: privatePartyYachtImg,
        },
        {
            title: "Corporate Meetings & Events",
            description: "Host high-end business meetings and corporate events on our luxury yacht with facilities for 2-100 people.",
            img: corporateMeetingsEventsImg,
        },
        {
            title: "Event Celebrations",
            description: "Make your special events unforgettable with premium yacht celebration packages.",
            img: eventCelebrationsImg,
        },
        {
            title: "Anniversary Celebrations",
            description: "Celebrate your love story with a romantic anniversary cruise on serene waters.",
            img: anniversaryCelebrationsImg,
        }
    ];

    return (
        <React.Fragment>
            <Header />

            {/* HOME SECTION  */}
            <section className="home-section" id="home">
                <Container>
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

            {/* OUR FLEET SECTION  */}
            <section className="our-fleet-section" id="our_fleet">
                <Container>
                    <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1500">
                        <h2>Our Fleet</h2>
                        <p>Choose from our diverse collection of vessels, each designed for unique experiences on Mumbai's beautiful waters</p>
                    </div>

                    <div className="our-fleet-content">
                        <Row className="g-3">
                            {yachtData.map((item, i) => (
                                <Col key={i} lg={4} md={6} sm={12} className="mb-4" data-aos="fade" data-aos-duration="2000">
                                    <div
                                        className="yacht-card"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    >
                                        <div className="content">
                                            <h4>{item.title}</h4>
                                            <p className="capacity">Capacity: {item.capacity}</p>
                                            <p className="desc">{item.description}</p>

                                            <div className="tags">
                                                {item.tags.map((t, index) => (
                                                    <span key={index}>{t}</span>
                                                ))}
                                            </div>

                                            <button className="book-btn">Book Now</button>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <div className="expert-box" data-aos="fade-up" data-aos-duration="2000">
                        <h5 className="title">Not Sure Which Boat to Choose?</h5>
                        <p className="subtitle">
                            Our team will help you select the perfect vessel based on your group size, occasion, <br />
                            and preferences
                        </p>

                        <div className="btn-group-custom">
                            <Button className="primary-btn">Get Expert Advice</Button>
                            <Button className="outline-btn">View Complete Fleet Gallery</Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FEATURED EXPERIENCE SECTION */}
            <section className="featured-experience-section" id="experiences">
                <Container>
                    <div className="section-title text-center" data-aos="fade-up" data-aos-duration="2500">
                        <h2>Featured Experiences</h2>
                        <p>Choose from our curated selection of premium yacht and speed boat experiences</p>
                    </div>


                    <div className="featured-experience-content">
                        <Row className="g-3">
                            {featuredExperiences.map((item, index) => (
                                <Col key={index} xs={12} sm={6} lg={4} data-aos="fade" data-aos-duration="2000">
                                    <div className="service-card" style={{ backgroundImage: `url(${item.img})` }}>
                                        <div className="service-content">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <Button variant="light" className="book-btn">Book Now +</Button>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </section>

            {/* GET IN TOUCH SECTION */}
            <section className="get-in-touch" id="contact">
                <Container>
                    <div className="section-title text-center" data-aos="fade-up" data-aos-duration="2500">
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
        </React.Fragment>
    );
}
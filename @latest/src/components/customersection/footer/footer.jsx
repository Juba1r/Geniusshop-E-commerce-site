import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGooglePlus,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter-section py-4 d-flex align-items-center justify-content-center">
        <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <h2 className="footer-newsletter-title mb-3 mb-md-0">
            SIGN UP TO NEWSLETTER
          </h2>
          <Form className="footer-newsletter-form d-flex">
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              className="footer-newsletter-input rounded-start"
            />
            <Button
              variant="dark"
              className="footer-newsletter-button rounded-end"
            >
              Send
            </Button>
          </Form>
        </Container>
      </div>

      {/* Main Footer Section */}
      <div className="footer-main py-5">
        <Container>
          <Row>
            {/* Contact Info */}
            <Col xs={12} md={3} className="mb-4 mb-md-0">
              <h5>Genius Shop</h5>
              <ul className="footer-contact p-0">
                <li>
                  <FaPhoneAlt /> 00 000 000 000
                </li>
                <li>
                  <FaEnvelope /> admin@geniusocean.com
                </li>
                <li>
                  <FaMapMarkerAlt /> 3584 Hickory Heights Drive, USA
                </li>
              </ul>
              <div className="footer-social-icons">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
                <FaGooglePlus />
                <FaInstagram />
              </div>
            </Col>

            {/* Product Category */}
            <Col xs={12} md={3} className="mb-4 mb-md-0">
              <h5>PRODUCT CATEGORY</h5>
              <ul className="footer-links p-0">
                <li>Electronic</li>
                <li>Fashion & Beauty</li>
                <li>Camera & Photo</li>
                <li>Smart Phone & Tablet</li>
                <li>Sport & Outdoor</li>
                <li>Jewelry & Watches</li>
              </ul>
            </Col>

            {/* Customer Care */}
            <Col xs={12} md={3} className="mb-4 mb-md-0">
              <h5>CUSTOMER CARE</h5>
              <ul className="footer-links p-0">
                <Link to="/Home" className="text-decoration-none text-white">
                  <li>Home</li>
                </Link>
                <Link to="/Home" className="text-decoration-none text-white">
                  <li>Blog</li>
                </Link>
                <Link to="/Home" className="text-decoration-none text-white">
                  <li>FAQ</li>
                </Link>
                <Link to="/AboutUs" className="text-decoration-none text-white">
                  <li>About Us</li>
                </Link>
                <Link
                  to="/PrivacyPolicy"
                  className="text-decoration-none text-white"
                >
                  <li>Privacy & Policy</li>
                </Link>
                <Link
                  to="/TermsAndConditions"
                  className="text-decoration-none text-white"
                >
                  <li>Terms & Condition</li>
                </Link>
                <Link
                  to="/ContactUs"
                  className="text-decoration-none text-white"
                >
                  <li>Contact Us</li>
                </Link>
              </ul>
            </Col>

            {/* Recent Post */}
            <Col xs={12} md={3}>
              <h5>RECENT POST</h5>
              <div className="footer-post">
                <p>10 Must-Have Fashion Staples for Every Woman</p>
                <i className="bi bi-calendar3 me-2"></i>
                <small>Jan 02, 2019</small>
              </div>
              <div className="footer-post">
                <p>The Ultimate Guide to Sustainable Fashion</p>
                <i className="bi bi-calendar3 me-2"></i>
                <small>Jan 02, 2019</small>
              </div>
              <div className="footer-post">
                <p>
                  From Office to Outing: Versatile Outfits for All Occasions
                </p>
                <i className="bi bi-calendar3 me-2"></i>
                <small>Aug 02, 2018</small>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom py-3 text-center">
        <Container>
          <p>COPYRIGHT © 2024. All Rights Reserved By GeniusOcean</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

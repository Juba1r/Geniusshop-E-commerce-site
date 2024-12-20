import { Navbar, Nav, Container, Row, Col, Dropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import "./customerNavbar.css";
import { Link } from "react-router-dom";

const CustomerNavbar = () => {
  return (
    <div className="customerNavbar-main-div">
      {/* Top Navbar - Contact and Support, Logins, Language, Currency */}
      <div className="container top-navbar text-white text-nowrap">
        <Row className="align-items-center">
          <Col md={6}>
            <div className="customNavbar-contact">
              Contact & Support: 00 000 000 000
            </div>
          </Col>
          <Col md={6} className="text-md-right">
            <div className="d-flex justify-content-end gap-4 align-items-center">
              <div className="customerNavbar-vendor-login-btn border border-1">
                Vendor Login
              </div>
              <div className="customerNavbar-vendor-rider-btn border border-1">
                Rider Login
              </div>
              <Dropdown>
                <div className="d-flex align-items-center">
                  <i className="bi bi-globe2 customNavbar-icon-border border-start px-3"></i>
                  <Dropdown.Toggle
                    id="dropdown-language"
                    className="text-white bg-transparent border-0 p-0"
                  >
                    English
                  </Dropdown.Toggle>
                </div>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">French</Dropdown.Item>
                  <Dropdown.Item href="#">Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <div className="d-flex align-items-center">
                  <i className="bi bi-currency-dollar border-start px-3"></i>
                  <Dropdown.Toggle
                    variant="danger"
                    id="dropdown-currency"
                    className="text-white bg-transparent border-0 p-0"
                  >
                    USD
                  </Dropdown.Toggle>
                </div>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">EUR</Dropdown.Item>
                  <Dropdown.Item href="#">GBP</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="p-0">
                <Link to="/UserLogin" className="text-white border-start px-3 text-decoration-none">
                  <FaUser /> My Account
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Bottom Navbar - Logo, Menu, Icons */}
      <Navbar expand="lg" className="bottom-navbar">
        <Container>
          <Navbar.Brand href="#" className="logo">
            Genius Shop
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler-left p-0"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-4">
              <Link to="/Home" href="#" className="customNavbar-links">
                HOME
              </Link>
              <Link to="/CustomerProducts" className="customNavbar-links">
                PRODUCTS
              </Link>
              <Link href="#" className="customNavbar-links">
                PAGES
              </Link>
              <Link href="#" className="customNavbar-links">
                BLOG
              </Link>
              <Link href="#" className="customNavbar-links">
                FAQ
              </Link>
              <Link to="/ContactUs" className="customNavbar-links">
                CONTACT US
              </Link>
            </Nav>
          </Navbar.Collapse>

          {/* Icons are kept outside Navbar.Collapse for always visibility */}
          <div className="navbar-icons d-flex gap-4">
            <div className="icon-with-badge">
              <i className="bi bi-search customNavbar-icons-circle"></i>
            </div>
            <div className="icon-with-badge position-relative">
              <i className="bi bi-infinity customNavbar-icons-circle"></i>
              <span className="badge">0</span>
            </div>
            <div className="icon-with-badge position-relative">
              <i className="bi bi-heart customNavbar-icons-circle"></i>
              <span className="badge">0</span>
            </div>
            <div className="icon-with-badge position-relative">
              <i className="bi bi-cart2 customNavbar-icons-circle"></i>
              <span className="badge">0</span>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomerNavbar;

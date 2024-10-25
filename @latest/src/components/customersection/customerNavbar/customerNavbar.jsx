import { Navbar, Nav, Container, Row, Col, Dropdown } from "react-bootstrap";
import {
  FaUser,
  FaShoppingCart,
  FaHeart,
  FaInfinity,
  FaSearch,
} from "react-icons/fa";
import "./customerNavbar.css";

const CustomerNavbar = () => {
  return (
    <div className="customerNavbar-main-div">
      {/* Top Navbar - Contact and Support, Logins, Language, Currency */}
      <div className="container top-navbar text-white">
        <div>
          <Row className="align-items-center">
            <Col md={6}>
              <div>Contact & Support: 00 000 000 000</div>
            </Col>
            <Col md={6} className="text-md-right">
              <div className="justify-content-end gap-4 text-nowrap d-flex align-items-center">
                <div
                  href="#"
                  className="customerNavbar-vendor-login-btn border border-1"
                >
                  Vendor Login
                </div>
                <div
                  href="#"
                  className="customerNavbar-vendor-rider-btn border border-1 "
                >
                  Rider Login
                </div>
                <Dropdown>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-globe2 border-start px-3"></i>
                    <Dropdown.Toggle
                      id="dropdown-language"
                      className="text-white bg-transparent border border-0 p-0"
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
                      className="text-white bg-transparent border border-0 p-0"
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
                  <Nav.Link href="#" className="text-white border-start px-3">
                    <FaUser /> My Account
                  </Nav.Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Bottom Navbar - Logo, Menu, Icons */}
      <Navbar
        expand="lg"
        className="bottom-navbar d-flex justify-content-center align-items-center"
      >
        <Container className="">
          <Navbar.Brand href="#" className="logo">
            Genius Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">HOME</Nav.Link>
              <Nav.Link href="#">PRODUCTS</Nav.Link>
              <Nav.Link href="#">PAGES</Nav.Link>
              <Nav.Link href="#">BLOG</Nav.Link>
              <Nav.Link href="#">FAQ</Nav.Link>
              <Nav.Link href="#">CONTACT US</Nav.Link>
            </Nav>
            <div className="navbar-icons ml-auto">
              <FaSearch />
              <FaInfinity />
              <FaHeart />
              <FaShoppingCart />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomerNavbar;

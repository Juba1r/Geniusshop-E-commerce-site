import { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Dropdown } from "react-bootstrap";
import { FaUser, FaTimes } from "react-icons/fa";
import "../customersection/customerNavbar/customerNavbar.css";
import { Link } from "react-router-dom";
import "./userNavbar.css";

const UserNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
                <Link
                  to="/UserLogin"
                  className="text-white border-start px-3 text-decoration-none"
                >
                  <FaUser /> Dashboard
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
            onClick={toggleSidebar}
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

      {/* Sidebar */}
      <div
        className={`usernavbar-sidebar-overlay ${sidebarOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        <div
          className={`usernavbar-sidebar ${sidebarOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sidebar-close-icon" onClick={toggleSidebar}>
            <FaTimes />
          </div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="fas fa-th-large me-2"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-store me-2"></i>
                <span>Vendor Panel</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-shopping-bag me-2"></i>
                <span>Purchased Items</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-money-bill-wave me-2"></i>
                <span>Deposit</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-exchange-alt me-2"></i>
                <span>Transactions</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-gift me-2"></i>
                <span>Rewards</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-handshake me-2"></i>
                <span>Affiliate Program</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-paper-plane me-2"></i>
                <span>Withdraw</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-truck me-2"></i>
                <span>Order Tracking</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-heart me-2"></i>
                <span>Favorite Sellers</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-envelope me-2"></i>
                <span>Messages</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-ticket-alt me-2"></i>
                <span>Tickets</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-exclamation-circle me-2"></i>
                <span>Disputes</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-user-edit me-2"></i>
                <span>Edit Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-lock me-2"></i>
                <span>Reset Password</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fas fa-tags me-2"></i>
                <span>Pricing Plans</span>
              </a>
            </li>
            <li className="nav-item mt-auto">
              <Link className="nav-link" to="/UserLogin">
                <i className="fas fa-sign-out-alt me-2"></i>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;

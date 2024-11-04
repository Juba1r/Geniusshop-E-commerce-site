import { useState } from "react";
import "./customerProducts.css";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import productbg from "../../../assets/customerproductbg.jpg";
import productpic from "../../../assets/productcardpicture1.jpg";

const CustomerProducts = () => {
  const [expandedCategories, setExpandedCategories] = useState({
    electronic: true,
    television: true,
    refrigerator: false,
    washingMachine: false,
    airConditioners: false,
    fashionBeauty: false,
  });

  const toggleCategory = (category) => {
    setExpandedCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <Container fluid className="p-0">
      <div className="customer-products-div">
        <div className="customer-products-fst-img">
          <img src={productbg} alt="" height={300} width={1519} />
          <div className="customer-products-text">
            <h2 className="text-white">Product</h2>
            <p className="text-white">Home // Product // </p>
          </div>
        </div>
        <Container className="customer-products-page py-4">
          <Row>
            {/* Sidebar */}
            <Col lg={3} md={4} sm={12} className="mb-4">
              {/* Product Categories Card */}
              <Card className="p-3 mb-3">
                <h5 className="mb-3 py-2">Product Categories</h5>
                <ul className="customer-products-page-category-list">
                  <li>
                    <div
                      className="category-item"
                      onClick={() => toggleCategory("electronic")}
                    >
                      <span>Electronic</span>
                      <span className="toggle-icon">
                        {expandedCategories.electronic ? "-" : "+"}
                      </span>
                    </div>
                    {expandedCategories.electronic && (
                      <ul>
                        <li
                          className="category-item text-danger"
                          onClick={() => toggleCategory("television")}
                        >
                          <span>TELEVISION</span>
                          <span className="toggle-icon">
                            {expandedCategories.television ? "-" : "+"}
                          </span>
                        </li>
                        {expandedCategories.television && (
                          <ul>
                            <li>LCD TV</li>
                            <li>LED TV</li>
                            <li>Curved TV</li>
                            <li>Plasma TV</li>
                            <li>LED TVs</li>
                            <li>OLED TVs</li>
                            <li>Smart TVs</li>
                            <li>4K & 8K TVs</li>
                          </ul>
                        )}
                      </ul>
                    )}
                  </li>
                  <li>
                    <div
                      className="category-item"
                      onClick={() => toggleCategory("refrigerator")}
                    >
                      <span>Refrigerator</span>
                      <span className="toggle-icon">
                        {expandedCategories.refrigerator ? "-" : "+"}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="category-item"
                      onClick={() => toggleCategory("washingMachine")}
                    >
                      <span>Washing Machine</span>
                      <span className="toggle-icon">
                        {expandedCategories.washingMachine ? "-" : "+"}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="category-item"
                      onClick={() => toggleCategory("airConditioners")}
                    >
                      <span>Air Conditioners</span>
                      <span className="toggle-icon">
                        {expandedCategories.airConditioners ? "-" : "+"}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="category-item"
                      onClick={() => toggleCategory("fashionBeauty")}
                    >
                      <span>Fashion & Beauty</span>
                      <span className="toggle-icon">
                        {expandedCategories.fashionBeauty ? "-" : "+"}
                      </span>
                    </div>
                  </li>
                </ul>
              </Card>

              {/* Price Range Card */}
              <Card className="p-3">
                <h5 className="mb-3">Price Range</h5>
                <Form.Group controlId="priceRange">
                  <Form.Control type="range" min="0" max="1000000" />
                  <div className="d-flex justify-content-between">
                    <span>$0</span>
                    <span>$1,000,000</span>
                  </div>
                </Form.Group>
                <Button variant="danger" className="w-100 mt-2">
                  Apply Filter
                </Button>
                <Button variant="dark" className="w-100 mt-2">
                  Clear Filter
                </Button>
              </Card>
            </Col>

            {/* Product Area */}
            <Col lg={9} md={8} sm={12}>
              {/* Product Sorting Section */}
              <div className="product-sorting-section d-flex justify-content-between align-items-center mb-3 p-3">
                <h5 className="mb-0">Total Products Found: 1</h5>
                <div className="d-flex align-items-center">
                  <span className="me-2">Sort by:</span>
                  <Form.Select
                    aria-label="Sort by"
                    className="me-4 sorting-select"
                  >
                    <option>Latest Product</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                  </Form.Select>
                  <Button
                    variant="light"
                    className="sorting-icon-btn me-1 border-none"
                  >
                    <i className="bi bi-card-list fs-2 text-black"></i>
                  </Button>
                  <Button variant="light" className="sorting-icon-btn">
                    <i className="bi bi-grid-fill fs-4"></i>
                  </Button>
                </div>
              </div>

              <Card className="customer-products-card p-3 text-center">
                <Card.Img
                  variant="top"
                  src={productpic}
                  height={150}
                  alt="No Image Found"
                />
                <Card.Body className="text-start px-1">
                  <Card.Title>Honda CBR Dual Channel ABS</Card.Title>
                  <Card.Text>
                    <span className="fw-semibold">$31 </span>
                    <del>$36.25</del>
                    <div className="">
                      <i className="bi bi-star-fill text-warning"></i> 0.0 (0)
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default CustomerProducts;

import "./customerProducts.css";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import productbg from "../../../assets/customerproductbg.jpg";

const CustomerProducts = () => {
  return (
    <Container fluid className="p-0">
      <div className="customer-products-div">
        <div className="customer-products-fst-img ">
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
              <Card className="p-3">
                <h5 className="mb-3">Product Categories</h5>
                <ul className="customer-products-page-category-list ">
                  <li>
                    <strong>Electronic</strong>
                  </li>
                  <ul>
                    <li className="text-danger">TELEVISION</li>
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
                  </ul>
                  <li>Refrigerator</li>
                  <li>Washing Machine</li>
                  <li>Air Conditioners</li>
                  <li>Fashion & Beauty</li>
                  {/* Add more categories as needed */}
                </ul>

                {/* Price Range */}
                <h5 className="mt-4">Price Range</h5>
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
                  src="https://via.placeholder.com/150"
                  alt="No Image Found"
                />
                <Card.Body>
                  <Card.Title>Test CSV Product</Card.Title>
                  <Card.Text>
                    <span className="text-danger">$31 </span>
                    <del>$36.25</del>
                    <div className="text-warning">
                      <i className="fas fa-star"></i> 0.0 (0)
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

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaHeart, FaStar, FaEye } from "react-icons/fa";
import "./homeProducts.css"; // Make sure you have the relevant styles

const products = [
  {
    id: 1,
    image: "path/to/image1.jpg",
    discount: "25%",
    title: "Chic Off-Shoulder Ruffle Dress with Floral Print",
    price: "318.95$",
    oldPrice: "423.95$",
    rating: 0,
  },
  {
    id: 2,
    image: "path/to/image2.jpg",
    discount: "34%",
    title: "Cozy Knit Sweater with Turtleneck and Cable Knit Pattern",
    price: "267.50$",
    oldPrice: "404$",
    rating: 0,
  },
  {
    id: 3,
    image: "path/to/image3.jpg",
    discount: "38%",
    title: "High-Waisted Skinny Jeans with Distressed Details",
    price: "146.75$",
    oldPrice: "236$",
    rating: 0,
  },
  {
    id: 4,
    image: "path/to/image4.jpg",
    discount: "42%",
    title: "Gaming Headset with Surround Sound, LED Lighting",
    price: "215$",
    oldPrice: "372.50$",
    rating: 0,
  },
];

const HomeProducts = () => {
  return (
    <Container className="py-5 home-products-container">
      <h1 className="text-center fw-bold mb-4 mt-5">Explore Our Products</h1>
      <div className="d-flex justify-content-center mb-3">
        <div className="product-categories">
          <span>NEW ARRIVAL</span>
          <span>TRENDING</span>
          <span>BEST SELLING</span>
          <span>POPULAR</span>
        </div>
      </div>
      <Row>
        {products.map((product) => (
          <Col md={3} key={product.id} className="mb-4">
            <Card className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <span className="discount-badge">{product.discount}</span>
                <div className="product-icons">
                  <FaEye className="icon" />
                  <Button variant="light" className="add-to-cart">
                    Add To Cart
                  </Button>
                  <FaHeart className="icon" />
                </div>
              </div>
              <Card.Body>
                <Card.Title className="product-title">
                  {product.title}
                </Card.Title>
                <div className="product-price">
                  <span className="new-price">{product.price}</span>
                  <span className="old-price">{product.oldPrice}</span>
                </div>
                <div className="product-rating">
                  <FaStar className="rating-icon" />
                  <span>({product.rating})</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeProducts;

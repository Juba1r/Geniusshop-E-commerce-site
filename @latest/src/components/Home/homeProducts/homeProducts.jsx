import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaStar, FaEye } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import "./homeProducts.css";
import prdctpic1 from "../../../assets/productcardpicture1.jpg";
import prdctpic2 from "../../../assets/productcardpicture2.jpg";
import prdctpic3 from "../../../assets/productcardpicture3.jpg";
import prdctpic4 from "../../../assets/productcardpicture4.jpg";

const products = [
  {
    id: 1,
    image: prdctpic1,
    discount: "-25%",
    title: "Chic Off-Shoulder Ruffle Dress with Floral Print",
    price: "318.95$",
    oldPrice: "423.95$",
    rating: 0,
  },
  {
    id: 2,
    image: prdctpic2,
    discount: "-34%",
    title: "Cozy Knit Sweater with Turtleneck and Cable Knit Pattern",
    price: "267.50$",
    oldPrice: "404$",
    rating: 0,
  },
  {
    id: 3,
    image: prdctpic3,
    discount: "-38%",
    title: "High-Waisted Skinny Jeans with Distressed Details",
    price: "146.75$",
    oldPrice: "236$",
    rating: 0,
  },
  {
    id: 4,
    image: prdctpic4,
    discount: "-42%",
    title: "Gaming Headset with Surround Sound, LED Lighting",
    price: "215$",
    oldPrice: "372.50$",
    rating: 0,
  },
  {
    id: 1,
    image: prdctpic1,
    discount: "-25%",
    title: "Chic Off-Shoulder Ruffle Dress with Floral Print",
    price: "318.95$",
    oldPrice: "423.95$",
    rating: 0,
  },
  {
    id: 2,
    image: prdctpic2,
    discount: "-34%",
    title: "Cozy Knit Sweater with Turtleneck and Cable Knit Pattern",
    price: "267.50$",
    oldPrice: "404$",
    rating: 0,
  },
  {
    id: 3,
    image: prdctpic3,
    discount: "-38%",
    title: "High-Waisted Skinny Jeans with Distressed Details",
    price: "146.75$",
    oldPrice: "236$",
    rating: 0,
  },
  {
    id: 4,
    image: prdctpic4,
    discount: "-42%",
    title: "Gaming Headset with Surround Sound, LED Lighting",
    price: "215$",
    oldPrice: "372.50$",
    rating: 0,
  },
  {
    id: 1,
    image: prdctpic1,
    discount: "-25%",
    title: "Chic Off-Shoulder Ruffle Dress with Floral Print",
    price: "318.95$",
    oldPrice: "423.95$",
    rating: 0,
  },
  {
    id: 2,
    image: prdctpic2,
    discount: "-34%",
    title: "Cozy Knit Sweater with Turtleneck and Cable Knit Pattern",
    price: "267.50$",
    oldPrice: "404$",
    rating: 0,
  },
  {
    id: 3,
    image: prdctpic3,
    discount: "-38%",
    title: "High-Waisted Skinny Jeans with Distressed Details",
    price: "146.75$",
    oldPrice: "236$",
    rating: 0,
  },
  {
    id: 4,
    image: prdctpic4,
    discount: "-42%",
    title: "Gaming Headset with Surround Sound, LED Lighting",
    price: "215$",
    oldPrice: "372.50$",
    rating: 0,
  },
];
const featuredProducts = [
  {
    id: 1,
    image: prdctpic1,
    discount: "-25%",
    title: "Chic Off-Shoulder Ruffle Dress with Floral Print",
    price: "318.95$",
    oldPrice: "423.95$",
    rating: 0,
  },
  {
    id: 2,
    image: prdctpic2,
    discount: "-34%",
    title: "Cozy Knit Sweater with Turtleneck and Cable Knit Pattern",
    price: "267.50$",
    oldPrice: "404$",
    rating: 0,
  },
  {
    id: 3,
    image: prdctpic3,
    discount: "-38%",
    title: "High-Waisted Skinny Jeans with Distressed Details",
    price: "146.75$",
    oldPrice: "236$",
    rating: 0,
  },
  {
    id: 4,
    image: prdctpic4,
    discount: "-42%",
    title: "Gaming Headset with Surround Sound, LED Lighting",
    price: "215$",
    oldPrice: "372.50$",
    rating: 0,
  },
];

const HomeProducts = () => {
  return (
    <>
      <Container className="py-5 home-products-container">
        <h1 className="text-center fw-bold mb-4 mt-5">Explore Our Products</h1>
        <div className="d-flex justify-content-center mb-4">
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
                  <i className="bi bi-heart home-products-card-fav-icon"></i>
                  <div className="pre-product-icons">
                    <div className="product-icons">
                      <i className="bi bi-infinity"></i>
                      <Button variant="light" className="add-to-cart">
                        Add To Cart
                      </Button>
                      <FaEye className="homeproduct-icon" />
                    </div>
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
                    <FaStar className="product-rating-icon" />
                    <span>({product.rating})</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="py-5">
        <h1 className="text-center fw-bold mb-4 mt-5">Our Featured Products</h1>
        <div className="featured-products-swiper mt-5">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Row>
                {featuredProducts.map((product) => (
                  <Col md={3} key={product.id} className="mb-4">
                    <Card className="product-card">
                      <div className="product-image">
                        <img src={product.image} alt={product.title} />
                        <span className="discount-badge">
                          {product.discount}
                        </span>
                        <i className="bi bi-heart home-products-card-fav-icon"></i>
                        <div className="pre-product-icons">
                          <div className="product-icons">
                            <i className="bi bi-infinity"></i>
                            <Button variant="light" className="add-to-cart">
                              Add To Cart
                            </Button>
                            <FaEye className="homeproduct-icon" />
                          </div>
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
                          <FaStar className="product-rating-icon" />
                          <span>({product.rating})</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </SwiperSlide>
            <SwiperSlide>
              <Row>
                {featuredProducts.map((product) => (
                  <Col md={3} key={product.id} className="mb-4">
                    <Card className="product-card">
                      <div className="product-image">
                        <img src={product.image} alt={product.title} />
                        <span className="discount-badge">
                          {product.discount}
                        </span>
                        <i className="bi bi-heart home-products-card-fav-icon"></i>
                        <div className="pre-product-icons">
                          <div className="product-icons">
                            <i className="bi bi-infinity"></i>
                            <Button variant="light" className="add-to-cart">
                              Add To Cart
                            </Button>
                            <FaEye className="homeproduct-icon" />
                          </div>
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
                          <FaStar className="product-rating-icon" />
                          <span>({product.rating})</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </SwiperSlide>
            <SwiperSlide>
              <Row>
                {featuredProducts.map((product) => (
                  <Col md={3} key={product.id} className="mb-4">
                    <Card className="product-card">
                      <div className="product-image">
                        <img src={product.image} alt={product.title} />
                        <span className="discount-badge">
                          {product.discount}
                        </span>
                        <i className="bi bi-heart home-products-card-fav-icon"></i>
                        <div className="pre-product-icons">
                          <div className="product-icons">
                            <i className="bi bi-infinity"></i>
                            <Button variant="light" className="add-to-cart">
                              Add To Cart
                            </Button>
                            <FaEye className="homeproduct-icon" />
                          </div>
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
                          <FaStar className="product-rating-icon" />
                          <span>({product.rating})</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default HomeProducts;

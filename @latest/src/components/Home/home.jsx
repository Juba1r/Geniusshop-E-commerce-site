import "./home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { EffectCards } from "swiper/modules";
import sliderimg1 from "../../assets/sliderimg1.jpg";
import sliderimg2 from "../../assets/sliderimg2.jpg";
import sliderimg3 from "../../assets/sliderimg3.jpg";

import { Container, Col, Button, Card, Row } from "react-bootstrap";
import ctgimg1 from "../../assets/homecategoryimg1.jpg";
import ctgimg2 from "../../assets/homecategoryimg2.jpg";
import ctgimg3 from "../../assets/homecategoryimg3.jpg";
import ctgimg4 from "../../assets/homecategoryimg4.jpg";
import ctgimg5 from "../../assets/homecategoryimg5.jpg";
import ctgimg6 from "../../assets/homecategoryimg6.jpg";
import bstofrimg1 from "../../assets/bestofferimg1.jpg";
import bstofrimg2 from "../../assets/bestofferimg2.jfif";
import bstofrimg3 from "../../assets/bestofferimg3.jfif";

import bstdealsliderimg1 from "../../assets/bestdealsliderimg1.jpg";
import bstdealsliderimg2 from "../../assets/bestdealsliderimg2.jpg";
import bstdealsliderimg3 from "../../assets/bestdealsliderimg3.jpg";
import bstdealsliderimg4 from "../../assets/bestdealsliderimg4.jpg";

import partnerlogo1 from "../../assets/partnerlogo1.jpg";
import partnerlogo2 from "../../assets/partnerlogo2.jpg";
import partnerlogo3 from "../../assets/partnerlogo3.jpg";
import partnerlogo4 from "../../assets/partnerlogo4.jpg";
import partnerlogo5 from "../../assets/partnerlogo5.jpg";
import partnerlogo6 from "../../assets/partnerlogo6.jpg";

import prdctpic1 from "../../assets/productcardpicture1.jpg";
import prdctpic2 from "../../assets/productcardpicture2.jpg";
import prdctpic3 from "../../assets/productcardpicture3.jpg";
import prdctpic4 from "../../assets/productcardpicture4.jpg";

import badgepic from "../../assets/badgepic.png";
import cartpic from "../../assets/cartpic.png";
import moneybagpic from "../../assets/moneybagpic.png";
import onlinesupportpic from "../../assets/onlinesupprtpic.png";

import latestpostpic1 from "../../assets/latestpostpic1.jpg";
import latestpostpic2 from "../../assets/latestpostpic2.jpg";

import HomeProducts from "./homeProducts/homeProducts";
import Footer from "../customersection/footer/footer";
import { FaEye, FaStar } from "react-icons/fa";

const categories = [
  { name: "Smart Phone & Tablet", count: 4, image: ctgimg1 },
  { name: "Sport & Outdoor", count: 2, image: ctgimg2 },
  { name: "Jewelry & Watches", count: 3, image: ctgimg3 },
  { name: "Health & Beauty", count: 3, image: ctgimg4 },
  { name: "Books & Office", count: 1, image: ctgimg5 },
  { name: "Toys & Hobbies", count: 2, image: ctgimg6 },
];
const bestSellingProducts = [
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

const Home = () => {
  return (
    <>
      <div className="px-0">
        <div className="home-swiper">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="home-slider-text d-flex justify-content-start container">
                <div className="home-slider-text-inner">
                  <p className="fw-bold mb-0">Dive in and Explore</p>
                  <h1 className="fw-semibold" style={{ fontSize: "60px" }}>
                    Start Shopping Now!
                  </h1>
                  <p className="mt-4" style={{ fontSize: "15px" }}>
                    Explore out cureted collections and find the perfect item
                    that speaks to your style and <br /> needs with just a
                    click,begin your journey
                  </p>
                  <button className="home-slider-shopnow-btn mt-4 rounded-3">
                    Shop Now
                  </button>
                </div>

                <img src={sliderimg1} alt="Slider Image 1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={sliderimg2} alt="Slider Image 2" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-slider-text d-flex justify-content-start container">
                <div className="home-slider-text-inner">
                  <p className="fw-bold mb-0">Dive in and Explore</p>
                  <h1 className="fw-semibold" style={{ fontSize: "60px" }}>
                    Start Shopping Now!
                  </h1>
                  <p className="mt-4" style={{ fontSize: "15px" }}>
                    Explore out cureted collections and find the perfect item
                    that speaks to your style and <br /> needs with just a
                    click,begin your journey
                  </p>
                  <button className="home-slider-shopnow-btn mt-4 rounded-3">
                    Shop Now
                  </button>
                </div>

                <img src={sliderimg3} alt="Slider Image 1" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <Container className="py-5 px-0 mt-5 mb-5">
          <div className="home-category-div justify-content-center d-flex align-items-center gap-4">
            {categories.map((category, index) => (
              <Col
                key={index}
                xs={12}
                sm={4}
                md={3}
                lg={2}
                className="text-center mb-4 "
              >
                <div className="home-category-card">
                  <div className="home-category-image-wrapper">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="home-category-image"
                    />
                  </div>
                  <h6 className="mt-3 home-category-h6">{category.name}</h6>
                  <p className="home-category-count">({category.count})</p>
                </div>
              </Col>
            ))}
          </div>
        </Container>
      </div>
      <div className="container">
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center
        "
        >
          <h2 className="fw-bold fs-1">Best Month offer</h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            provident voluptas. Delectus neque quisquam tempore recusandae
            nesciunt sint pariatur hic. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic, ipsa! provident voluptas.
          </p>
        </div>
        <div className="mt-5 col-12 d-flex best-offer-image-div">
          <div className="col-6 ">
            <img src={bstofrimg1} alt="" width={670} height={606} />
          </div>
          <div className="col-6 flex-column d-flex">
            <div>
              <img src={bstofrimg2} alt="" width={600} height={295} />
            </div>
            <div className="mt-3">
              <img src={bstofrimg3} alt="" width={600} height={295} />
            </div>
          </div>
        </div>
      </div>
      <HomeProducts />
      <div className="deal-of-the-day-div container mt-5 col-12 d-flex">
        <div className="col-6 deal-of-the-day-text">
          <h1 className="fw-bold">
            DEAL <br />
            OF THE DAY
          </h1>
          <p className="fw-semibold">CLICK SHOP NOW FOR ALL OF THE PRODUCT</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eius
            omnis iste deleniti unde corrupti molestias quis ipsum autem
            repudiandae!Lorem Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="d-flex align-items-center gap-4 deal-of-the-day-dates">
            <p>
              {" "}
              236 <br /> DAY
            </p>
            <p>
              {" "}
              17 <br /> HOUR
            </p>
            <p>
              {" "}
              59 <br /> MIN
            </p>
            <p>
              {" "}
              40 <br /> SEC
            </p>
          </div>
          <button className="deal-of-the-day-shopnow-btn mt-2 rounded-3">
            Shop Now
          </button>
        </div>
        <div className="col-6 align-items-center d-flex justify-content-center ">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper h-75 w-50 rounded-5"
          >
            <SwiperSlide>
              <img src={bstdealsliderimg1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bstdealsliderimg2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bstdealsliderimg3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bstdealsliderimg4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="our-partner-div container mb-5">
        <div className="our-partner-title mb-5">
          <h1>Our Partners</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            praesentium, pariatur minus quas neque suscipit quisquam itaque
            cupiditate ipsam quod!minus quas neque suscipit quisquam itaque
            cupiditate ipsam quod!cupiditate ipsam quod!
          </p>
        </div>
        <div className="our-partner-images">
          <img
            src={partnerlogo1}
            width={200}
            height={100}
            alt="partner's logo 1"
          />
          <img
            src={partnerlogo2}
            width={200}
            height={100}
            alt="partner's logo 1"
          />
          <img
            src={partnerlogo3}
            width={200}
            height={100}
            alt="partner's logo 1"
          />
          <img
            src={partnerlogo4}
            width={200}
            height={100}
            alt="partner's logo 1"
          />
          <img
            src={partnerlogo5}
            width={200}
            height={100}
            alt="partner's logo 1"
          />
          <img
            src={partnerlogo6}
            width={200}
            height={100}
            alt="partner's logo 1"
          />
        </div>
        <div className="our-partner-images mt-5">
          <img
            src={partnerlogo5}
            width={200}
            height={100}
            alt="partner's logo 1"
          />
          <img
            src={partnerlogo3}
            width={200}
            height={100}
            alt="partner's logo 1"
          />
          <img
            src={partnerlogo2}
            width={200}
            height={100}
            alt="partner's logo 1"
          />
          <img
            src={partnerlogo6}
            width={200}
            height={100}
            alt="partner's logo 1"
          />
          <img
            src={partnerlogo1}
            width={200}
            height={100}
            alt="partner's logo 1"
          />
          <img
            src={partnerlogo4}
            width={200}
            height={100}
            alt="partner's logo 1"
          />
        </div>
      </div>
      <div className="best-selling-product-container container">
        <Container className="py-5">
          <h1 className="text-center fw-bold mb-4 mt-5">
            Best Selling Products
          </h1>
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
                  {bestSellingProducts.map((product) => (
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
                            <span className="old-price">
                              {product.oldPrice}
                            </span>
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
                  {bestSellingProducts.map((product) => (
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
                            <span className="old-price">
                              {product.oldPrice}
                            </span>
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
                  {bestSellingProducts.map((product) => (
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
                            <span className="old-price">
                              {product.oldPrice}
                            </span>
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
      </div>
      <div className="manage-quality-div container p-5">
        <div className="col-12 text-white d-flex align-items-center justify-content=center me-5">
          <div className="col-3 d-flex text-nowrap align-items-center">
            <div className="col-6">
              <img
                src={badgepic}
                width={60}
                height={60}
                alt=""
                className="d-flex ms-auto"
              />
            </div>
            <div className="col-6" style={{ fontSize: "15px" }}>
              <p className="mb-0">
                <span className="fw-semibold">Manage Quality</span> <br />
                Best Quality Guarantee
              </p>
            </div>
          </div>
          <div className="col-3 d-flex text-nowrap align-items-center">
            <div className="col-6">
              <img
                src={cartpic}
                width={60}
                height={60}
                alt=""
                className="d-flex ms-auto"
              />
            </div>
            <div className="col-6" style={{ fontSize: "15px" }}>
              <p className="mb-0 ms-2">
                <span className="fw-semibold">Win $100 To Shop</span> <br />
                Enter Now
              </p>
            </div>
          </div>
          <div className="col-3 d-flex text-nowrap align-items-center">
            <div className="col-6">
              <img
                src={onlinesupportpic}
                width={60}
                height={60}
                alt=""
                className="d-flex ms-auto"
              />
            </div>
            <div className="col-6" style={{ fontSize: "15px" }}>
              <p className="mb-0 ms-2">
                <span className="fw-semibold">Best Online Support</span> <br />
                Hour: 10:00AM - 5:00PM
              </p>
            </div>
          </div>
          <div className="col-3 d-flex text-nowrap align-items-center">
            <div className="col-6">
              <img
                src={moneybagpic}
                width={60}
                height={60}
                alt=""
                className="d-flex ms-auto"
              />
            </div>
            <div className="col-6" style={{ fontSize: "15px" }}>
              <p className="mb-0 ms-2">
                <span className="fw-semibold">Money Gurantee</span> <br />
                With A 30 Days
              </p>
            </div>
          </div>
        </div>
      </div>
      <Container className="my-5">
        <h2 className="text-center fw-bold">Latest Post</h2>
        <p className="text-center w-75 m-auto">
          Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
          excepteur voluptate velit ipsum esse enim. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Corporis, dignissimos!
        </p>

        {/* Second row with article cards */}
        <Row className="mt-5">
          <Col md={6} className="mb-4">
            <Card className="border-0">
              <Card.Img
                src={latestpostpic1}
                alt="Post 3"
                className="img-fluid rounded-0"
              />
              <Card.Body>
                <h1 className="fw-bold">
                  Fashion on a Budget: How to Look Chic Without Breaking the
                  
                </h1>
                <Card.Text className="text-muted">02 JAN, 2019</Card.Text>
                <Card.Text>
                  Looking chic and stylish doesn&apos;t have to come with a
                  hefty price tag. With the right strategies, you can build a
                  fashionable wardrobe that reflects your style.
                </Card.Text>
                <p className="fw-bold">-READ MORE</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="border-0">
              <Card.Img
                src={latestpostpic2}
                alt="Post 4"
                className="rounded-0"
                height={635}
              />
              <Card.Body>
                <h1 className="fw-bold">
                  10 Must-Have Fashion Staples for Every Woman&apos;s Wardrobe
                </h1>
                <Card.Text className="text-muted">02 JAN, 2019</Card.Text>
                <Card.Text>
                  In the ever-evolving world of fashion, trends may come and go,
                  but some pieces remain timeless. These wardrobe essentials are
                  the foundation of any style.
                </Card.Text>

                <p className="fw-bold">-READ MORE</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Home;

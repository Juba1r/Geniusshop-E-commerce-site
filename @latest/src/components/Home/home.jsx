import "./home.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import sliderimg1 from "../../assets/sliderimg1.jpg";
import sliderimg2 from "../../assets/sliderimg2.jpg";
import sliderimg3 from "../../assets/sliderimg3.jpg";

import { Container, Row, Col } from "react-bootstrap";
import Ctgimg1 from "../../assets/homecategoryimg1.jpg";
import Ctgimg2 from "../../assets/homecategoryimg2.jpg";
import Ctgimg3 from "../../assets/homecategoryimg3.jpg";
import Ctgimg4 from "../../assets/homecategoryimg4.jpg";
import Ctgimg5 from "../../assets/homecategoryimg5.jpg";
import Ctgimg6 from "../../assets/homecategoryimg6.jpg";

const categories = [
  { name: "Smart Phone & Tablet", count: 4, image: Ctgimg1 },
  { name: "Sport & Outdoor", count: 2, image: Ctgimg2 },
  { name: "Jewelry & Watches", count: 3, image: Ctgimg3 },
  { name: "Health & Beauty", count: 3, image: Ctgimg4 },
  { name: "Books & Office", count: 1, image: Ctgimg5 },
  { name: "Toys & Hobbies", count: 2, image: Ctgimg6 },
];

const Home = () => {
  return (
    <>
      <div className="px-0 mt-5">
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
        <Container className="py-5 mt-5">
          <Row className="justify-content-center">
            {categories.map((category, index) => (
              <Col
                key={index}
                xs={6}
                sm={4}
                md={3}
                lg={2}
                className="text-center mb-4"
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
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;

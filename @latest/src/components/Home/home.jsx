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

import { Container, Col } from "react-bootstrap";
import ctgimg1 from "../../assets/homecategoryimg1.jpg";
import ctgimg2 from "../../assets/homecategoryimg2.jpg";
import ctgimg3 from "../../assets/homecategoryimg3.jpg";
import ctgimg4 from "../../assets/homecategoryimg4.jpg";
import ctgimg5 from "../../assets/homecategoryimg5.jpg";
import ctgimg6 from "../../assets/homecategoryimg6.jpg";
import bstofrimg1 from "../../assets/bestofferimg1.jpg";
import bstofrimg2 from "../../assets/bestofferimg2.jfif";
import bstofrimg3 from "../../assets/bestofferimg3.jfif";

import HomeProducts from "./homeProducts/homeProducts";
import Footer from "../customersection/footer/footer";

const categories = [
  { name: "Smart Phone & Tablet", count: 4, image: ctgimg1 },
  { name: "Sport & Outdoor", count: 2, image: ctgimg2 },
  { name: "Jewelry & Watches", count: 3, image: ctgimg3 },
  { name: "Health & Beauty", count: 3, image: ctgimg4 },
  { name: "Books & Office", count: 1, image: ctgimg5 },
  { name: "Toys & Hobbies", count: 2, image: ctgimg6 },
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
            <img src={bstofrimg1} alt="" width={650} height={606} />
          </div>
          <div className="col-6 flex-column d-flex ms-3">
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
      <Footer />
    </>
  );
};

export default Home;

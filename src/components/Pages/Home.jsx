import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialSlider from "../Slider/TestimonialSlider";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import PostSlider from "../Slider/PostSlider";
import TeamSlider from "../Slider/TeamSlider";
import Work from "../Work/Work";
import MovingText from "../MovingText";
import LogoList from "../LogoList";
import Cta from "../Cta";
import Hero from "../Hero";
import Slider from "react-slick";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./home.css";

// import required modules
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import { pageTitle } from "../../helper";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

export default function Home() {
  const [itemShow, setItemShow] = useState(4);
  pageTitle("Home");

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: "Instagram",
      links: "/",
    },
    {
      name: "Twitter",
      links: "/",
    },
  ];

  const portfolioData = [
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/events/events-details",
      src: "/images/portfolio_11.jpeg",
      category: "ui_ux_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/events/events-details",
      src: "/images/portfolio_12.jpeg",
      category: "logo_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/events/events-details",
      src: "/images/portfolio_13.jpeg",
      category: "web_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/events/events-details",
      src: "/images/portfolio_14.jpeg",
      category: "mobile_apps",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/events/events-details",
      src: "/images/portfolio_15.jpeg",
      category: "ui_ux_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/events/events-details",
      src: "/images/portfolio_16.jpeg",
      category: "web_design",
    },
    {
      title: "Colorful Art Work",
      subtitle: "See Details",
      href: "/events/events-details",
      src: "/images/portfolio_11.jpeg",
      category: "ui_ux_design",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* main slider section */}

      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
        style={{ marginTop: "5rem", position: "relative" }}
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active " data-bs-interval="10000">
            <img
              src="/images/background2.png"
              class="d-block w-100 img-fluid"
              style={{ height: "38rem" }}
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5
                className="fs-1"
                style={{ position: "absolute", top: "-20rem" }}
              >
                WORLD'S FIRST ENTERTAINMENT MARKETPLACE AND MEDIA TECH PORTAL
              </h5>
              <p
                className="text-white fs-2"
                style={{ position: "absolute", top: "-12rem" }}
              >
                Get Yourself Featured By Our Global Industry Professionals
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="/images/changeslider1.jpeg"
              class="d-block w-100"
              alt="..."
              style={{ height: "38rem" }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5
                className="fs-1"
                style={{ position: "absolute", top: "-20rem" }}
              >
                WORLD'S FIRST ENTERTAINMENT MARKETPLACE AND MEDIA TECH PORTAL
              </h5>
              <p
                className="text-white fs-2"
                style={{ position: "absolute", top: "-12rem" }}
              >
                Get Yourself Featured By Our Global Industry Professionals
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="/images/changeslider2.jpeg"
              class="d-block w-100"
              alt="..."
              style={{ height: "38rem" }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h5
                className="fs-1"
                style={{ position: "absolute", top: "-20rem" }}
              >
                WORLD'S FIRST ENTERTAINMENT MARKETPLACE AND MEDIA TECH PORTAL
              </h5>
              <p
                className="text-white fs-2"
                style={{ position: "absolute", top: "-12rem" }}
              >
                Get Yourself Featured By Our Global Industry Professionals
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* main slider section end */}

      {/*   feture talent start */}
      <div className="container" style={{ marginTop: "12rem" }}>
        <h1 className="fs-2 fw-bold text-white text-center pb-5">
          Featured Talent
        </h1>
      

        <Swiper
          slidesPerView={5}
          spaceBetween={-3}
          className="home_page_newsLatter"
          // autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true} // Enable continuous loop // Set the delay (in milliseconds) between slides
        >
          <SwiperSlide className="home_page_newsLatter-item">
           <div className="">
           <img className="" src="/images/slider2.jpg" alt="" />
           <p className="pt-2 fs-5 fw-bold text-white">True Life</p>
           </div>
             
          </SwiperSlide>
          <SwiperSlide className="home_page_newsLatter-item">
          <div>
          <img className="" src="/images/portfolio_12.jpeg" alt="" />
          <p className="pt-2 fs-5 fw-bold text-white">Life Enjoy</p>
          </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_newsLatter-item">
          <div> <img className="" src="/images/portfolio_13.jpeg" alt="" />
          <p className="pt-2 fs-5 fw-bold text-white">Life Lovely</p> </div>
           
          </SwiperSlide>
          <SwiperSlide className="home_page_newsLatter-item">
          <div>
          <img className="" src="/images/portfolio_14.jpeg" alt="" />
          <p className="pt-2 fs-5 fw-bold text-white">Cycle Goal</p> 
          
          </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_newsLatter-item">
          <div>
          <img className="" src="/images/portfolio_14.jpeg" alt="" />
          <p className="pt-2 fs-5 fw-bold text-white">Cycle Goal</p> 
          
          </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_newsLatter-item">
          <div>
          <img className="" src="/images/portfolio_14.jpeg" alt="" />
          <p className="pt-2 fs-5 fw-bold text-white">Cycle Goal</p> 
          
          </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_newsLatter-item">
            <div>
          <img className="" src="/images/portfolio_14.jpeg" alt="" />
          <p className="pt-2 fs-5 fw-bold text-white">Cycle Goal</p> 
          
          </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_newsLatter-item">
            <div>
          <img className="" src="/images/portfolio_14.jpeg" alt="" />
          <p className="pt-2 fs-5 fw-bold text-white">Cycle Goal</p> 
          
          </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*   end */}

      {/* News Center start */}
      <div className="container" style={{ marginTop: "12rem" }}>
        <h1 className="fs-2 fw-bold text-white text-center pb-5">
          News Center
        </h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          className="home_page_newscenter"
        >
          <SwiperSlide className="home_page_newscenter-item">
            <img src="/images/slider2.jpg" alt="" />
            <div className="bg-[#000] border-b border-cyan">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_newscenter-item">
            <img src="/images/portfolio_12.jpeg" alt="" />
            <div className="bg-[#000] border-b border-cyan">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_newscenter-item">
            <img src="/images/portfolio_13.jpeg" alt="" />
            <div className="bg-[#000] border-b border-cyan">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_newscenter-item">
            <img src="/images/portfolio_14.jpeg" alt="" />
            <div className="bg-[#000] border-b border-cyan">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_newscenter-item">
            <img src="/images/portfolio_10.jpeg" alt="" />
            <div className="bg-[#000] border-b border-cyan">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_newscenter-item">
            <img src="/images/portfolio_9.jpeg" alt="" />
            <div className="bg-[#000] border-b border-cyan">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_newscenter-item">
            <img src="/images/slider2.jpg" alt="" />
            <div className="bg-[#000] border-b border-cyan">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_newscenter-item">
            <img src="/images/slider2.jpg" alt="" />
            <div className="bg-[#000] border-b border-cyan">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* News Center end */}

      {/* start event  */}

      <div className="container mb-5" style={{ marginTop: "12rem" }}>
        <h1 className="fs-2 fw-bold text-white text-center pb-5">
          Latest Events
        </h1>
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          className="home_page_newscenter"
        >
          <SwiperSlide className="home_page_event-item">
            <img src="/images/slider2.jpg" alt="" />
            <div className="border-b ">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_event-item">
            <img src="/images/portfolio_12.jpeg" alt="" />
            <div className="border-b ">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_event-item">
            <img src="/images/portfolio_13.jpeg" alt="" />
            <div className="border-b ">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_event-item">
            <img src="/images/portfolio_14.jpeg" alt="" />
            <div className="border-b ">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_event-item">
            <img src="/images/portfolio_10.jpeg" alt="" />
            <div className="border-b ">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="home_page_event-item">
            <img src="/images/portfolio_9.jpeg" alt="" />
            <div className="border-b ">
            <p className="pt-4 fs-4 ps-3 text-white">Apna Developers</p>
            <p className="ps-3 pb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque cum, a quis corporis est non eveniet, voluptas
              soluta ipsa eius quae possimus perspiciatis voluptatum laudantium
              incidunt sit ipsam provident?{" "}
            </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* end event */}

      <TestimonialSlider />

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="What You Can Do On GEM?"
                subtitle=""
                btnText="View More"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}

      {/*Start Find Work Section */}
      <Spacing lg="100" md="100" />
      <Div>
        <Work
          position="Sales Manager"
          description="Data for icons is open source and is available for everyone to use. You can use it with various icon components, create your own components that use Iconify as source or just export raw SVGs."
          time="Full time"
          imageSrc="/images/about_img_1.jpeg"
          style={{ width: "11rem" }}
          name="John"
          details="Data for icons is open source and is available for everyone to use. You can use"
        />
      </Div>
      {/*End Find Work Section */}

      {/* Start MovingText Section */}
      <Spacing lg="115" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="ARE YOU READY TO BE A PART OF <br />GEM'S COMMUNITY?"
          btnText="Signup"
          btnLink="/signup"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}

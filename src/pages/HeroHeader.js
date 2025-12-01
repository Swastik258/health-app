import React from "react";
import Slider from "react-slick";
import { FaVial, FaPills, FaSyringe, FaUserShield } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  { icon: <FaVial />, label: "STI Testing" },
  { icon: <FaPills />, label: "Contraceptive Pills" },
  { icon: <FaSyringe />, label: "Emergency Pills" },
  { icon: <FaUserShield />, label: "Private Treatment" },
  { icon: <FaVial />, label: "Lab Kits" },
  { icon: <FaPills />, label: "Supplements" },
];

const HeroHeader = () => {
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Default for desktop
  slidesToScroll: 1,
  
  // This is the key change for mobile responsiveness
  responsive: [
    {
      breakpoint: 768, // This breakpoint is for screens up to 768px wide (typical mobile)
      settings: {
        slidesToShow: 1, // Show only one card per slide
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 1024, // Optional: for tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
  ],
};

  return (
    <section style={{ position: "relative", height: "80vh", background: "#FFF" }}>
      {/* Top half background image */}
      <div
        style={{
          backgroundImage: 'url("/images/header-bg-2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "85%",
        }}
      ></div>

      {/* Bottom half white */}
      <div
        style={{
          backgroundColor: "#fff",
        }}
      ></div>

      {/* Overlay content */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Centered Hero text */}
        <div className="container d-flex align-items-center justify-content-center text-center flex-grow-1">
          <div
            className="p-4 rounded"
            style={{
              backgroundColor: "rgb(0 103 116 / 40%)",
              maxWidth: "700px",
              color: "#fff",
            }}
          >
            <h1 className="display-5 fw-bold">Get Started With Confidence</h1>
            <p className="lead">
              Your health, your terms. Discreet and fast access to essential
              care and treatments.
            </p>
          </div>
        </div>

        {/* Feature carousel on split background */}
        <div style={{ padding: "20px 0" }}>
          <div style={{ maxWidth: "90%", margin: "0 auto" }}>
            <Slider {...settings}>
              {features.map((item, index) => (
                <div key={index} className="p-2">
                  <div
                    className="d-flex flex-column align-items-center text-center"
                    style={{
                      background: "#f8f9fa", // gray card
                      borderRadius: "12px",
                      padding: "25px 15px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      height: "100%",
                    }}
                  >
                    <div className="fs-2 mb-2 text-info">{item.icon}</div>
                    <strong className="text-dark">{item.label}</strong>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;

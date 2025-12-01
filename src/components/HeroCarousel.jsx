import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Common.css";
const HeroCarousel = () => {
  const slides = [
    {
      title: "Discreet At-Home STI Testing",
      description:
        "Order accurate, lab-verified STI test kits from the privacy of your home with fast results.",
      btnText: "Explore STI Tests",
      route: "/hiv-lab",
      bg: "/images/hero-hiv.webp",
    },
    {
      title: "Simple Online Access to Contraceptive Pills",
      description:
        "Choose from a range of trusted combined pills delivered straight to your door—no doctor visit needed.",
      btnText: "Browse Pills",
      route: "/eloine",
      bg: "/images/hero-pill.webp",
    },
    {
      title: "Fast & Reliable Emergency Contraception",
      description:
        "Get peace of mind with quick delivery of emergency contraception when you need it most.",
      btnText: "Get Started",
      route: "/hiv-lab",
      bg: "/images/hero-privacy.webp",
    },
    {
      title: "Discreet Treatment for Common Sexual Health Conditions",
      description:
        "Access confidential treatment for infections like chlamydia and gonorrhoea, safely from home.",
      btnText: "Get Started",
      route: "/hiv-lab",
      bg: "/images/hero-life.webp",
    },
  ];

  return (
    <section className="hero-carousel">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* Dots / Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                color: "white",
              }}
            >
              <div className="d-flex align-items-center h-100 w-100 bg-dark bg-opacity-50">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="text-center px-4">
                        <h1 className="display-5 fw-bold mb-3 gradient-heading">
                          {slide.title}
                        </h1>
                        <p className="lead mb-4">{slide.description}</p>
                        <Link
                          to={slide.route}
                          className="btn btn-light btn-lg text-dark"
                        >
                          {slide.btnText}
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;

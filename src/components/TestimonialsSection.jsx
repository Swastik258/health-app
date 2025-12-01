import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HivLabTestPage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialsSection = ({ testimonials }) => {
    const chunkedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    chunkedTestimonials.push(testimonials.slice(i, i + 2));
  }
  return (
  <section className="section-tests text-dark py-5">
    <div className="container text-center">
      <h3 className="text-center text-info mb-5">What Our Users Say</h3>
      <div
        id="testimonialCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Group testimonials in sets of 2 */}
          {chunkedTestimonials.map((group, i) => (
            <div
              className={`carousel-item testimonial-slide ${
                i === 0 ? "active" : ""
              }`}
              key={i}
            >
              <div className="row justify-content-center">
                {group.map((testimonial, j) => (
                  <div className="col-12 col-md-6 mb-4 mb-md-0" key={j}>
                    <div className="bg-white p-4 rounded shadow text-center h-100 mx-2">
                      <p className="fst-italic fs-5">“{testimonial.message}”</p>
                      <p className="fw-bold mt-3 mb-0">– {testimonial.userName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

       
        {/* Indicators (dots) */}
        <div className="d-flex justify-content-center mt-4">
          <div className="carousel-indicators position-static">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
}

export default TestimonialsSection;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HivLabTestPage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FaqSection = ({ faqs }) => (
  <>
    <section className="section-tests bg-white py-5">
      <div className="container">
        <h3 className="text-center text-dark mb-5">
          Frequently Asked Questions
        </h3>
        <div className="accordion" id="homeFaq">
          {faqs.map((faq, i) => (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header" id={`heading${i}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${i}`}
                  aria-expanded="false"
                  aria-controls={`collapse${i}`}
                >
                  <span
                    className="badge me-3 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "rgb(2 57 198)",
                      width: "34px",
                      height: "34px",
                      fontSize: "17px",
                      borderRadius: "50%",
                    }}
                  >
                    {i + 1}
                  </span>
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${i}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${i}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default FaqSection;

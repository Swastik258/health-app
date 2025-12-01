import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./HivLabTestPage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HivLabTestPageBK = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // run only once when scrolled into view
    });
  }, []);

  return (
    <div className="hiv-lab-test-page">
      {/* 1. Header (auto height) */}
      <section className="section-header text-white py-5"
        data-aos="zoom-in"
        data-aos-delay={100} // staggered delay
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 px-5">
              <img
                src="/images/hiv-lab-test-kit.jpg"
                alt="HIV Lab Test Kit"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6 px-5">
              <h2 className="mb-4">HIV Lab Test</h2>
              <p>
                This test uses a small blood sample to detect HIV antibodies and
                antigens with high accuracy.
              </p>
              <ul className="list-unstyled mt-3">
                <li>Simple finger-prick sample</li>
                <li>Lab-verified results in 2–3 days</li>
                <li>100% confidential & discreet shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Other HIV Tests (gradient background) */}
      <section className="section-tests py-5">
        <div className="container">
          <h3 className="text-center text-dark mb-4">
            Other HIV Tests Available
          </h3>
          <div className="row g-4">
            {[
              {
                title: "Insti HIV Test",
                route: "/insti-hiv",
                img: "/images/insti.jpg",
              },
              {
                title: "OraQuick HIV Test",
                route: "/oraquick",
                img: "/images/oraquick.jpg",
              },
              {
                title: "Rapid HIV Finger Prick",
                route: "/rapid-hiv",
                img: "/images/rapid.jpg",
              },
            ].map((test, i) => (
              <div className="col-md-4" key={i}
                data-aos="fade-down"
                data-aos-delay={i * 100}
              >
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={test.img}
                    className="card-img-top"
                    alt={test.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{test.title}</h5>
                    <Link to={test.route} className="btn btn-outline-dark mt-2">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* 3. Steps Section with PNG Icons and Arrows */}
<section className="section-order py-5">
  <div className="container">
    <h3 className="text-center text-info mb-5">
      How to Order & What Happens Next
    </h3>
    <div className="row align-items-center justify-content-center">
      {[0, 1, 2].map((i) => (
        <React.Fragment key={i}>
          <div
            className="col-md-3 mb-4"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="p-4 rounded h-100 text-center border-secondary">
              <img
                src={
                  ["/images/order.png", "/images/collect.png", "/images/send.png"][i]
                }
                alt=""
                className="mb-3"
                style={{ width: "120px", height: "120px" }}
              />
              <h5 className="text-info mb-2">
                {["1. Order Your Kit", "2. Collect Sample", "3. Send to Lab"][i]}
              </h5>
              <p className="mb-0 text-black small">
                {[
                  "Select the HIV Lab Test and place your order. Kits are shipped discreetly.",
                  "Use the included finger-prick tool to collect your blood sample at home.",
                  "Use the prepaid envelope to send your sample to our certified lab.",
                ][i]}
              </p>
            </div>
          </div>

          {/* 👉 Add arrow only between cards */}
          {i < 2 && (
            <div className="d-none d-md-block col-md-1 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/545/545682.png"

                alt="arrow"
                style={{ width: "48px", height: "48px" }}
                className="img-fluid mt-4"
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
</section>


      {/* 4. Testimonials Section – 3 Cards Carousel Style */}
      <section className="section-testimonials bg-light-yellow text-dark py-5">
        <div className="container">
          <h3 className="text-center text-info mb-5">What Our Users Say</h3>
          <div className="testimonial-scroll-wrapper">
            {[
              {
                name: "Alex M.",
                feedback:
                  "The HIV lab test was quick, discreet, and so easy to do at home. Highly recommend it!",
              },
              {
                name: "Priya K.",
                feedback:
                  "Very professional service. I had results within 2 days and it gave me peace of mind.",
              },
              {
                name: "Daniel R.",
                feedback:
                  "Clear instructions and excellent support team. Would definitely use it again.",
              },
              {
                name: "Fatima S.",
                feedback:
                  "The instructions were clear, and the whole process was stress-free.",
              },
              {
                name: "John T.",
                feedback:
                  "Affordable and quick service. I’d recommend it to anyone who values privacy.",
              },
            ].map((t, i) => (
              <div
                className="testimonial-card bg-white p-4 rounded shadow mx-3"
                key={i}
              >
                <p className="fst-italic">"{t.feedback}"</p>
                <p className="fw-bold mt-3">– {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="section-faq bg-white py-5">
        <div className="container">
          <h3 className="text-center text-dark mb-5">
            Frequently Asked Questions
          </h3>
          <div className="accordion" id="faqAccordion">
            {[
              {
                question: "Is the test confidential?",
                answer:
                  "Yes, absolutely. All our test kits are shipped discreetly, and your results are securely stored.",
              },
              {
                question: "How long does it take to receive results?",
                answer:
                  "Typically within 2–3 business days after the lab receives your sample.",
              },
              {
                question: "Is the test kit approved?",
                answer:
                  "Yes, our HIV lab test kits are CE-marked and used by certified labs for accurate diagnosis.",
              },
            ].map((faq, i) => (
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
    </div>
  );
};

export default HivLabTestPageBK;

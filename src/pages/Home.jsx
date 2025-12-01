import { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import HeroHeader from "./HeroHeader";
import StindrExperience from "./StindrExperience";
import ClientMonitor from "@sixthsense/sixthsense-javascript-agent";


const HomePage = () => {

  ClientMonitor.register({
  service: "HEALTH-APP", // Name the app
  collector: 'https://http-collector-observability.sixthsense.rakuten.com/oap',
  pagePath:"index.html",
  serviceVersion: "1.2.1",
  enableSPA: true,
  useFmp: true,
  autoTracePerf: true,
  detailMode: true,
  enableDirectFetchPatching: false,
  environment: "production",
  authorization: "eyJhbGciOiJIUzI1NiJ9.eyJiaWxsaW5nX2lkIjoiMTUwNzNkZWYtNDhlZC00M2UwLTg0ODUtMjkyOTIzYzRiOTdiIiwidGVhbUlkIjoiY2RiMTM2ZTMtMjRhYi00N2VmLWIyYjAtYzZkY2U0YmFiNGQ2IiwiYXVkIjoib2FwIiwiaXNzIjoic2l4dGgtc2Vucy1hdXRoIiwiaWF0IjoxNzYzOTcxODUxfQ.kNyuahPftkOKjq6XIHVK6QKY9e40T4FF1UlyWzSvWiQ",
});
 
ClientMonitor.setPerformance({
  service: "HEALTH-APP", 
  collector: 'https://http-collector-observability.sixthsense.rakuten.com/oap',
  serviceVersion: "1.2.1",
  perfInterval: 1000,
  useFmp: true,
  authorization: "eyJhbGciOiJIUzI1NiJ9.eyJiaWxsaW5nX2lkIjoiMTUwNzNkZWYtNDhlZC00M2UwLTg0ODUtMjkyOTIzYzRiOTdiIiwidGVhbUlkIjoiY2RiMTM2ZTMtMjRhYi00N2VmLWIyYjAtYzZkY2U0YmFiNGQ2IiwiYXVkIjoib2FwIiwiaXNzIjoic2l4dGgtc2Vucy1hdXRoIiwiaWF0IjoxNzYzOTcxODUxfQ.kNyuahPftkOKjq6XIHVK6QKY9e40T4FF1UlyWzSvWiQ" 
 });

 
  return (
    <div className="homepage bg-light text-dark">
      {/* 1. Hero Section */}
      <HeroHeader />
      <StindrExperience />

      {/* 2. Why Choose Stindr */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="multi-color-heading mb-4">Why Choose Stindr?</h2>
          <div className="row g-4">
            {[
              {
                icon: "🛡️",
                title: "Confidential",
                desc: "Your privacy is our priority. Discreet packaging & results.",
              },
              {
                icon: "🚀",
                title: "Fast Results",
                desc: "Lab-certified results within 2–3 days.",
              },
              {
                icon: "🔬",
                title: "Trusted Labs",
                desc: "All tests are CE-marked and processed by certified labs.",
              },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="p-4 border rounded shadow text-center h-100">
                  <div style={{ fontSize: "2rem" }}>
                    <div className="display-3">{item.icon}</div>
                  </div>
                  <h5 className="mt-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Services with Background Image */}
      <section
        className="py-5 text-white"
        style={{
          backgroundImage: `url('/images/services-bg.webp')`, // Replace with your actual image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // optional parallax-like effect
        }}
      >
        <div className="container">
          <div className="">
            <h2 className="text-center mb-4 text-white heading-text-size">
              Our Services
            </h2>
            <div className="row g-4">
              {[
                {
                  title: "Discreet Home Delivery",
                  icon: "🚚",
                  desc: "Test kits and medications are delivered in plain, unmarked packaging for your privacy.",
                },
                {
                  title: "Certified Lab Testing",
                  icon: "🧪",
                  desc: "We partner with certified labs to ensure accuracy and confidentiality of your results.",
                },
                {
                  title: "Same-Day Dispatch",
                  icon: "⚡",
                  desc: "Orders placed before 2pm are dispatched the same day for faster testing.",
                },
                {
                  title: "Online Doctor Support",
                  icon: "👨‍⚕️",
                  desc: "Access medical advice and treatment options through our partner network of doctors.",
                },
                {
                  title: "Affordable Pricing",
                  icon: "💳",
                  desc: "Transparent pricing with no hidden fees. Great value for premium healthcare access.",
                },
                {
                  title: "Confidential Results",
                  icon: "🔒",
                  desc: "Results are securely stored and shared with you only — no third-party access.",
                },
              ].map((service, i) => (
                <div className="col-md-4" key={i}>
                  <div className="bg-white text-dark p-4 rounded shadow-sm h-100 text-center">
                    <div className="display-3">{service.icon}</div>
                    <h5 className="mt-3">{service.title}</h5>
                    <p className="small">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="multi-color-heading mb-4">What Users Say</h2>

          <div
            id="testimonialCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Group testimonials in sets of 2 */}
              {[
                [
                  "The process was simple and private. Got my results fast.",
                  "I was nervous at first, but everything was smooth. Highly recommended!",
                ],
                [
                  "The pill service is affordable and easy to reorder.",
                  "Great customer service and fast delivery!",
                ],
                [
                  "Discreet packaging and clear instructions made it stress-free.",
                  "Highly reliable and convenient service overall.",
                ],
              ].map((group, i) => (
                <div
                  className={`carousel-item testimonial-slide ${
                    i === 0 ? "active" : ""
                  }`}
                  key={i}
                >
                  <div className="row justify-content-center">
                    {group.map((text, j) => (
                      <div className="col-12 col-md-6 mb-4 mb-md-0" key={j}>
                        <div className="bg-white p-4 rounded shadow text-center h-100 mx-2">
                          <p className="fst-italic fs-5">"{text}"</p>
                          <p className="fw-bold mt-3 mb-0">– Verified User</p>
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

      {/* 5. How It Works */}
      <section
        className="py-5 text-white"
        style={{
          backgroundImage: "url('/images/how-it-works-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container position-relative">
          <h2 className="text-center text-white heading-text-size mb-5">
            How It Works
          </h2>

          <div className="row justify-content-center position-relative timeline-wrapper">
            {[
              {
                text: "Choose a test or pill",
                color: "#b3e5fc", // Light Blue
                textColor: "#0277bd",
              },
              {
                text: "Place your order",
                color: "#d1c4e9", // Light Purple
                textColor: "#512da8",
              },
              {
                text: "Receive it discreetly",
                color: "#ffe0b2", // Light Orange
                textColor: "#ef6c00",
              },
              {
                text: "Get results or use as prescribed",
                color: "#c8e6c9", // Light Green
                textColor: "#2e7d32",
              },
            ].map((step, i) => (
              <div className="col-12 col-md-3 text-center px-4" key={i}>
                <div className="timeline-step position-relative">
                  <div
                    className="circle-number mx-auto mb-3"
                    style={{
                      backgroundColor: step.color,
                      color: step.textColor,
                    }}
                  >
                    {i + 1}
                  </div>
                  <p
                    className="fw-semibold"
                    style={{
                      color: step.color,
                      fontWeight: "600 !important",
                      fontSize: "22px",
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-5">
        <div className="container">
          <div className="text-center">
            <h2 className="text-center mb-4 multi-color-heading">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="accordion" id="homeFaq">
            {[
              {
                q: "Is my information private?",
                a: "Absolutely. All your details and test results are 100% confidential. Packages are delivered discreetly without any labels or markings related to the service.",
              },
              {
                q: "Do I need a prescription?",
                a: "For some contraceptive pills, you will need to fill out a short medical questionnaire. If suitable, our team will issue a prescription for you—no clinic visit required.",
              },
              {
                q: "How fast are the test results?",
                a: "You can expect results within 2 to 3 working days from when your sample is received at the lab. We notify you via SMS or email once your results are ready.",
              },
              {
                q: "Are these tests accurate?",
                a: "Yes, our tests are lab-standard and used by healthcare professionals worldwide. They meet medical regulations and provide highly accurate results.",
              },
              {
                q: "What does 'discreet packaging' mean?",
                a: "Our test kits and pills are sent in plain, unbranded packaging with no mention of the contents or the nature of the products. Your privacy is our priority.",
              },
              {
                q: "Can I cancel my order?",
                a: "You can cancel your order before it's dispatched. Once shipped, refunds may be limited based on the medical nature of the products.",
              },
              {
                q: "How do I take the test?",
                a: "Every test kit comes with easy-to-follow instructions and sterile equipment. Most involve a finger-prick blood sample or urine collection, done at home.",
              },
              {
                q: "Is customer support available?",
                a: "Yes, our support team is available via chat and email 7 days a week to help you with orders, questions, or interpreting results.",
              },
              {
                q: "Do you offer emergency contraception?",
                a: "Yes, we provide safe and medically reviewed emergency contraception options that are delivered quickly and discreetly.",
              },
              {
                q: "How do I reorder my pills?",
                a: "Reordering is easy. Just log in, go to your prescription dashboard, and click 'Reorder'. No need to repeat the health check if your plan is valid.",
              },
              {
                q: "What age do I need to be to use this service?",
                a: "You must be 18 years or older to order from our platform. We verify age as part of the ordering process to ensure safety and legal compliance.",
              },
            ].map((faq, i) => (
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header" id={`faq${i}`}>
                  <button
                    className="accordion-button collapsed d-flex align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i}`}
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
                    {faq.q}
                  </button>
                </h2>
                <div
                  id={`collapse${i}`}
                  className="accordion-collapse collapse"
                  data-bs-parent="#homeFaq"
                >
                  <div className="accordion-body">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
import React, { useEffect, useState } from "react";
import {
  FaVial,
  FaPills,
  FaUserMd,
  FaCalendarCheck,
  FaRobot,
} from "react-icons/fa";
import "./StindrExperience.css";

const data = [
  "We have 20+ Test Kits",
  "We have top Pills",
  "Highly experienced Doctors",
  "Book with our Doctors",
  "Take a chatbot-based symptom test",
];

const icons = [<FaVial />, <FaPills />, <FaUserMd />, <FaCalendarCheck />, <FaRobot />];

const StindrExperience = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 3000); // Change text and icon every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side text */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">THE STINDR EXPERIENCE</h2>
            <p className="lead">
              Complete, convenient care. <br />
              Address symptoms, treat root causes, and adjust your behaviours,
              for immediate relief and long-term optimal health.
            </p>
          </div>

          {/* Right side animation */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="animation-wrapper">
              {/* Center Text */}
              <div className="text-content-box">
                <p className="animated-text">{data[current]}</p>
              </div>

              {/* Animated Icon */}
              <div key={current} className="icon-animation-container">
                <div className="animated-icon">
                  {icons[current]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StindrExperience;
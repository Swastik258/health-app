import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./HivLabTestPage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const StepsSection = ({ steps, arrowImage }) => (
  <section className="section-white py-5 text-white"
        style={{
          backgroundImage: "url('../images/how-it-works-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
    <div className="container">
      <h3 className="text-center text-white mb-5">How to Order & What Happens Next</h3>
      <div className="row align-items-center justify-content-center">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div className="col-md-3 mb-4" >
              <div className="p-4 rounded h-100 text-center border-secondary">
                <img src={s.img} alt={s.step} className="mb-3" style={{ width: "120px", height: "120px" }} />
                <h5 className="text-white mb-2">{s.step}</h5>
                <p className="mb-0 text-white small">{s.desc}</p>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="d-none d-md-block col-md-1 text-center">
                <img src={arrowImage} alt="arrow" style={{ width: "48px", height: "48px" }} className="img-fluid mt-4" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;

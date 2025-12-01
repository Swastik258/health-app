import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./HivLabTestPage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const OtherTestsSection = ({ tests }) => {
    return (
  <section className="section-tests py-5">
    <div className="container">
      <h3 className="text-center text-dark mb-4">Other HIV Tests Available</h3>
      <div className="row g-4">
        {tests.map((test, i) => (
          <div className="col-md-4" key={i} >
            <div className="card h-100 border-0 shadow">
              <img src={`https://aiconicskinadmin.azurewebsites.net${test.productImage}`} className="card-img-top" alt={test.productTitle} />
              <div className="card-body text-center">
                <h5 className="card-title">{test.productTitle}</h5>
                <Link to={`../products/${test.slug}`} className="btn btn-primary mt-2">
                  More Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default OtherTestsSection;

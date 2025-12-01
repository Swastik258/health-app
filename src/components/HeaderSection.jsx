import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./HivLabTestPage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import PaymentPopup from "./PaymentPopup";
import { useCart } from "../pages/CartContext";
import AddToCartButton from "./AddToCartButton";

const HeaderSection = ({ title, productId, product, description, features, image }) => 
  {
      const hostName = process.env.REACT_APP_API_HOSTNAME;
      const { addToCart } = useCart();
    return (
  <section className="py-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={image} alt={title} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">{title}</h2>
          <p>{description}</p>
          <ul className="list-unstyled mt-3">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        <AddToCartButton product={product} hostName={hostName} />
        {/*<PaymentPopup features={features} productId={productId} />*/}
        <Link
        to="/cart"
        className="btn btn-primary d-inline-flex align-items-center mt-1"
        style={{ gap: "8px" }}
      >
        View Cart
      </Link>
        </div>
      </div>
    </div>
  </section>
);
}

export default HeaderSection;

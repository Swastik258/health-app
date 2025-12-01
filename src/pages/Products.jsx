import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";


function Products() {
    const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState(null);
  const [ProductFAQ, setProductFAQ] = useState(null);
  const [ProductTestimonial, setProductTestimonial] = useState(null);
  const [loading, setLoading] = useState(true);
  const paymentApi = process.env.REACT_APP_API_Payment;
  const hostName = process.env.REACT_APP_API_HOSTNAME;
  const userLocation = localStorage.getItem("userCountry");
  const parsedLocation = userLocation ? JSON.parse(userLocation) : null;
  const countryId = parsedLocation?.id || null;

  useEffect(() => {
    axios
      .get(`${paymentApi}/product/${slug}?countryId=${countryId}`)
      .then((res) => {
        setProduct(res.data.productDetails); // set product details
        setRelatedProduct(res.data.relatedProducts); // set product details
        setProductFAQ(res.data.faqs); // set product details
        setProductTestimonial(res.data.testimonials); // set product details
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) 
  {return (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <h2>Loading...</h2>
  </div>
);
}
  if (!product)
  {return (
  <div
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <h2>No product found</h2>
  </div>
);
}
//console.log(product.productTitle);
const headerData = {
    title: product.productTitle,
    productId: product.productId,
    product: product,
    description: product.description,
    features: [
      product.variants[0]?.brandName+ " " +product.variants[0]?.genericName,
      product.variants[0]?.pricePerUnit+" "+product.variants[0]?.currency,
    ],
    image: `${hostName}/${product.variants[0]?.productImage}`,
  };

/* const otherTests = [
    { title: "OraQuick HIV Test", route: "/oraquick", img: "/images/oraquick.jpg" },
    { title: "HIV Lab Test", route: "/hiv-lab-test", img: "/images/hiv-lab-test-kit.jpg" },
    { title: "Rapid HIV Finger Prick", route: "/rapid-hiv", img: "/images/rapid.jpg" },
  ]; */

  const steps = [
    {
      img: "../images/order.png",
      step: "1. Order Your Test",
      desc: "Place your order online. We’ll ship the test in discreet packaging.",
    },
    {
      img: "../images/collect.png",
      step: "2. Collect Sample",
      desc: "Use the fingerstick kit to collect a blood drop for the test cassette.",
    },
    {
      img: "../images/send.png",
      step: "3. Get Result Instantly",
      desc: "Result appears in under 1 minute. Easy to read, lab-quality accuracy.",
    },
  ];


  

  return (
     <div className={ slug }>
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={relatedProduct} />
      <StepsSection steps={steps} arrowImage="../images/double-arrow.png" />
      <TestimonialsSection testimonials={ProductTestimonial} />
      <FaqSection faqs={ProductFAQ} />
    </div>
    
  );
}

export default Products;

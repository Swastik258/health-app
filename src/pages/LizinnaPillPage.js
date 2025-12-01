import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const LizinnaPillPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Lizinna – Combined Pill",
    description:
      "Lizinna is a combined oral contraceptive pill that contains ethinylestradiol and norgestimate. It is commonly used for preventing pregnancy and managing period-related symptoms.",
    features: [
      "Taken daily for 21 days with a 7-day break",
      "Over 99% effective with correct use",
      "Can improve acne and regulate cycles",
      "Delivered discreetly after an online consultation",
    ],
    image: "/images/lizinna-pack.jpg", // Update with an actual product image
  };

  const otherTests = [
    { title: "Lucette", route: "/lucette", img: "/images/lucette.jpg" },
    { title: "Levest", route: "/levest", img: "/images/levest-pack.jpg" },
    { title: "Yasmin", route: "/yasmin", img: "/images/yasmin.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Choose Lizinna",
      desc: "Select Lizinna and securely place your order online.",
    },
    {
      img: "/images/consult.png",
      step: "2. Complete Online Form",
      desc: "Answer a few health questions reviewed by our doctor.",
    },
    {
      img: "/images/approve.png",
      step: "3. Medical Approval",
      desc: "Your form is reviewed and approved by a licensed prescriber.",
    },
    {
      img: "/images/send.png",
      step: "4. Fast & Discreet Delivery",
      desc: "Receive your pill in discreet packaging at your doorstep.",
    },
  ];

  const testimonials = [
    {
      name: "Charlotte R.",
      feedback:
        "Lizinna has really balanced my mood and made my cycles more predictable. So glad I switched!",
    },
    {
      name: "Amelia F.",
      feedback:
        "I've been taking Lizinna for over a year now. No issues and it works exactly as intended.",
    },
    {
      name: "Priya N.",
      feedback:
        "Ordering Lizinna online is such a relief. The process is quick, easy, and discreet.",
    },
    {
      name: "Ella M.",
      feedback:
        "I love the convenience of Lizinna. My acne cleared up, and I’ve had fewer cramps each month.",
    },
    {
      name: "Georgia T.",
      feedback:
        "Great experience so far. The pill is effective, and I feel more in control of my health.",
    },
  ];

  const faqs = [
    {
      question: "What is Lizinna used for?",
      answer:
        "Lizinna is a combined contraceptive pill used to prevent pregnancy and regulate menstrual cycles.",
    },
    {
      question: "What hormones are in Lizinna?",
      answer:
        "Lizinna contains ethinylestradiol and norgestimate, synthetic forms of estrogen and progestogen.",
    },
    {
      question: "How do I take Lizinna correctly?",
      answer:
        "Take one pill at the same time each day for 21 days, followed by a 7-day break before starting the next pack.",
    },
    {
      question: "Can Lizinna help with acne?",
      answer:
        "Yes. Lizinna may help improve acne in some individuals by regulating hormone levels.",
    },
    {
      question: "What if I miss a Lizinna pill?",
      answer:
        "If you're less than 12 hours late, take the missed pill immediately. For longer delays, refer to instructions and use backup contraception.",
    },
    {
      question: "Are there any common side effects?",
      answer:
        "Some people may experience mild nausea, breast tenderness, or mood changes, which usually settle over time.",
    },
    {
      question: "Do I need a prescription to get Lizinna?",
      answer:
        "Yes. A prescription is required. You can get one via a quick online consultation or through your doctor.",
    },
    {
      question: "Is Lizinna suitable for first-time users?",
      answer:
        "Yes, it is often prescribed for new users, but always consult with a healthcare professional first.",
    },
    {
      question: "Will the packaging be discreet?",
      answer:
        "Yes. We ship all orders in plain, unbranded packaging to maintain your privacy.",
    },
  ];

  return (
    <div className="lizinna-pill-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="/images/double-arrow.png" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default LizinnaPillPage;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const InstiHivTestPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Insti HIV Test",
    description: "The INSTI HIV Self Test provides quick, lab-accurate results in minutes, from the comfort of your home.",
    features: [
      "Finger-prick based rapid test",
      "Results in just 1 minute",
      "CE marked for self-testing",
      "100% private and secure",
    ],
    image: "/images/insti-header.jpg",
  };

  const otherTests = [
    { title: "OraQuick HIV Test", route: "/oraquick", img: "/images/oraquick.jpg" },
    { title: "HIV Lab Test", route: "/hiv-lab-test", img: "/images/hiv-lab-test-kit.jpg" },
    { title: "Rapid HIV Finger Prick", route: "/rapid-hiv", img: "/images/rapid.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Order Your Test",
      desc: "Place your order online. We’ll ship the test in discreet packaging.",
    },
    {
      img: "/images/collect.png",
      step: "2. Collect Sample",
      desc: "Use the fingerstick kit to collect a blood drop for the test cassette.",
    },
    {
      img: "/images/send.png",
      step: "3. Get Result Instantly",
      desc: "Result appears in under 1 minute. Easy to read, lab-quality accuracy.",
    },
  ];

  const testimonials = [
    {
      name: "Monica P.",
      feedback: "I was nervous at first, but it was over in seconds. Clear result, great peace of mind.",
    },
    {
      name: "Jay R.",
      feedback: "Super easy to use and much faster than going to a clinic. Felt empowered to know my status privately.",
    },
    {
      name: "Sara V.",
      feedback: "Instructions were simple, and the result came out immediately. No stress.",
    },
  ];

  const faqs = [
  {
    question: "What is the Insti HIV Test?",
    answer:
      "The Insti HIV Test is a rapid, at-home test that detects HIV antibodies in a small blood sample. It provides results in as little as 60 seconds."
  },
  {
    question: "How accurate is the Insti HIV Test?",
    answer:
      "The test is over 99% accurate when used correctly and is approved by regulatory health authorities for self-testing."
  },
  {
    question: "How does the test work?",
    answer:
      "You collect a small drop of blood using a finger-prick device and follow the included instructions to add drops to the test membrane. A visible dot will indicate your result."
  },
  {
    question: "How quickly do I get results?",
    answer:
      "Results are available in under 1 minute, making it one of the fastest HIV tests available for home use."
  },
  {
    question: "Is it difficult to use?",
    answer:
      "Not at all. The kit includes clear step-by-step instructions and everything needed to perform the test at home."
  },
  {
    question: "Is my result confidential?",
    answer:
      "Yes. The test is done entirely at home and no personal data is collected during the testing process."
  },
  {
    question: "When should I use the Insti HIV Test?",
    answer:
      "It's best to take the test at least 12 weeks after potential exposure to HIV for the most accurate result, as this allows time for antibodies to develop."
  },
  {
    question: "What if I get a positive result?",
    answer:
      "If your test result is reactive, it’s important to follow up with a confirmatory lab test and speak with a healthcare professional."
  },
  {
    question: "Can I trust the result from a home test?",
    answer:
      "Yes, when used properly, the Insti HIV Test is a reliable indicator of HIV status. However, confirmatory testing is always recommended after a positive result."
  },
  {
    question: "Is the Insti test suitable for all age groups?",
    answer:
      "The test is intended for individuals aged 18 and above. If you're younger or unsure, consult with a healthcare provider first."
  }
];


  return (
    <div className="insti-hiv-test-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="images/double-arrow.png" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default InstiHivTestPage;

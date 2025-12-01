import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const EloinePillPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Eloine – Combined Pill",
    description:
      "Eloine is a low-dose combined oral contraceptive pill that contains both estrogen and progestogen. It's designed to help prevent pregnancy and is often prescribed to reduce acne and regulate periods.",
    features: [
      "91-day pack with 24 active pills & 4 placebo pills",
      "May reduce period pain, flow, and acne",
      "Highly effective when taken correctly",
      "Discreet home delivery available",
    ],
    image: "/images/eloine-pack.jpg", // Replace with a suitable image of the pill
  };

  const otherTests = [
    { title: "Yasmin", route: "/yasmin", img: "/images/yasmin.jpg" },
    { title: "Lucette", route: "/lucette", img: "/images/lucette.jpg" },
    { title: "Levest", route: "/levest", img: "/images/levest-pack.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Select Your Pill",
      desc: "Choose Eloine from our range of combined pills based on your needs.",
    },
    {
      img: "/images/consult.png", // image for online consultation
      step: "2. Online Consultation",
      desc: "Complete a short health questionnaire reviewed by a registered doctor.",
    },
    {
      img: "/images/approve.png", // image for approval
      step: "3. Doctor Approval",
      desc: "If approved, your prescription is processed quickly and securely.",
    },
    {
      img: "/images/send.png",
      step: "4. Delivery to Your Door",
      desc: "Receive your pill in discreet packaging with clear usage instructions.",
    },
  ];

  const testimonials = [
  {
    name: "Sophie K.",
    feedback: "Eloine has made my periods more predictable and reduced my cramps significantly."
  },
  {
    name: "Nina M.",
    feedback: "I had mild side effects the first week, but now I feel great and protected."
  },
  {
    name: "Isabel R.",
    feedback: "Easy to order and arrived discreetly. The packaging was clear and professional."
  },
  {
    name: "Clara L.",
    feedback: "My skin cleared up after using Eloine for a few months. Super happy with the results."
  },
  {
    name: "Emily D.",
    feedback: "It’s a reliable pill and I like that it contains a lower dose of hormones."
  }
];


  const faqs = [
  {
    question: "What is Eloine used for?",
    answer: "Eloine is a combined oral contraceptive pill used to prevent pregnancy and help with hormonal balance."
  },
  {
    question: "How effective is Eloine?",
    answer: "When taken correctly, Eloine is over 99% effective at preventing pregnancy."
  },
  {
    question: "How should I take Eloine?",
    answer: "Take one pill daily at the same time each day for 28 days, following the pill strip instructions."
  },
  {
    question: "Does Eloine help with acne?",
    answer: "Yes, some users report improvement in acne due to its hormonal components."
  },
  {
    question: "Are there any side effects?",
    answer: "Common side effects include mild nausea, breast tenderness, and mood changes, usually temporary."
  },
  {
    question: "Can Eloine delay periods?",
    answer: "Yes, some women use Eloine continuously to delay periods. Consult your doctor before doing so."
  },
  {
    question: "What happens if I miss a pill?",
    answer: "If you miss a pill, follow the leaflet instructions. Missing pills can reduce effectiveness."
  },
  {
    question: "Is a prescription required?",
    answer: "Yes, Eloine requires an online or in-person medical assessment before it can be prescribed."
  },
  {
    question: "Is delivery discreet?",
    answer: "Absolutely. Packaging is plain with no indication of the contents for your privacy."
  }
];


  return (
    <div className="eloine-pill-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection
        steps={steps}
        arrowImage="images/double-arrow.png"
      />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default EloinePillPage;

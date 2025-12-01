import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const Gedarel30PillPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Gedarel 30 – Combined Pill",
    description:
      "Gedarel 30 is a combined contraceptive pill containing ethinylestradiol and desogestrel. It’s designed to prevent pregnancy and may also help reduce period pain and improve cycle regularity.",
    features: [
      "21 active pills taken once daily",
      "Effective when taken consistently",
      "May improve acne and reduce menstrual cramps",
      "Discreet packaging and online prescription available",
    ],
    image: "/images/gedarel30-pack.jpg", // Your image path
  };

  const otherTests = [
    { title: "Eloine", route: "/eloine", img: "/images/eloine-pack.jpg" },
    { title: "Lucette", route: "/lucette", img: "/images/lucette.jpg" },
    { title: "Levest", route: "/levest", img: "/images/levest-pack.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Choose Your Pill",
      desc: "Select Gedarel 30 and complete the secure checkout process.",
    },
    {
      img: "/images/consult.png",
      step: "2. Online Health Review",
      desc: "Fill out a short health questionnaire. A qualified doctor reviews your suitability.",
    },
    {
      img: "/images/approve.png",
      step: "3. Doctor Confirmation",
      desc: "Once approved, your prescription is processed immediately.",
    },
    {
      img: "/images/send.png",
      step: "4. Receive at Home",
      desc: "We ship your pill in discreet packaging with full usage guidance.",
    },
  ];

  const testimonials = [
  {
    name: "Jessica T.",
    feedback: "Gedarel 30 works well for me. My periods are lighter and more manageable now."
  },
  {
    name: "Amira F.",
    feedback: "I had tried other pills, but Gedarel 30 caused fewer mood swings and no weight gain."
  },
  {
    name: "Laura W.",
    feedback: "Very reliable. Easy to take and I’ve had no major side effects so far."
  },
  {
    name: "Priya S.",
    feedback: "Ordering Gedarel online was convenient. The consultation process was smooth and professional."
  }
];


  const faqs = [
  {
    question: "What is Gedarel 30 used for?",
    answer: "Gedarel 30 is a combined contraceptive pill used to prevent pregnancy and regulate menstrual cycles."
  },
  {
    question: "What hormones does Gedarel 30 contain?",
    answer: "It contains ethinylestradiol (30 micrograms) and desogestrel, synthetic versions of estrogen and progestogen."
  },
  {
    question: "How effective is Gedarel 30?",
    answer: "Gedarel 30 is over 99% effective when taken correctly at the same time daily."
  },
  {
    question: "How do I take Gedarel 30?",
    answer: "Take one pill every day for 21 days, followed by a 7-day pill-free break before starting the next pack."
  },
  {
    question: "Can Gedarel 30 help with acne?",
    answer: "Some users report clearer skin while taking Gedarel, but individual results may vary."
  },
  {
    question: "What should I do if I miss a pill?",
    answer: "Take it as soon as you remember. If it's more than 12 hours late, follow the missed pill guidelines in the leaflet."
  },
  {
    question: "Are there side effects?",
    answer: "Common side effects include nausea, headache, breast tenderness, and mild mood changes, especially in the first few months."
  },
  {
    question: "Can I delay my period with Gedarel 30?",
    answer: "Yes. By skipping the 7-day break and starting the next pack immediately, you can delay your period. Consult your doctor first."
  },
  {
    question: "Do I need a prescription for Gedarel 30?",
    answer: "Yes, it requires a prescription after a medical consultation to ensure it's safe and appropriate for you."
  },
  {
    question: "Is the packaging discreet?",
    answer: "Yes, your order will arrive in plain packaging with no mention of the contents or the product name."
  },
  {
    question: "Can I take Gedarel 30 if I’m breastfeeding?",
    answer: "Gedarel 30 is not recommended while breastfeeding. A progestogen-only pill may be a safer alternative. Consult a doctor."
  }
];


  return (
    <div className="gedarel30-pill-page">
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

export default Gedarel30PillPage;

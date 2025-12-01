import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const YasminPillPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Yasmin – Combined Pill",
    description:
      "Yasmin is a widely used combined oral contraceptive pill containing ethinylestradiol and drospirenone. Known for its additional benefits like reducing bloating and improving skin, it’s a reliable choice for birth control.",
    features: [
      "21 active pills followed by a 7-day break",
      "Highly effective at preventing pregnancy",
      "May reduce water retention and acne",
      "Fast, private delivery after medical approval",
    ],
    image: "/images/yasmin.jpg", // Replace with actual product image
  };

  const otherTests = [
    { title: "Lucette", route: "/lucette", img: "/images/lucette.jpg" },
    { title: "Levest", route: "/levest", img: "/images/levest-pack.jpg" },
    { title: "Marvelon", route: "/marvelon", img: "/images/marvelon.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Select Yasmin",
      desc: "Choose Yasmin and begin your quick online order.",
    },
    {
      img: "/images/consult.png",
      step: "2. Fill Medical Form",
      desc: "Answer a few health questions for doctor approval.",
    },
    {
      img: "/images/approve.png",
      step: "3. Review by Doctor",
      desc: "A licensed doctor reviews and confirms your order.",
    },
    {
      img: "/images/send.png",
      step: "4. Discreet Delivery",
      desc: "Your pill is delivered privately to your doorstep.",
    },
  ];

  const testimonials = [
    {
      name: "Samantha P.",
      feedback:
        "Yasmin helped me control my acne and regulate my periods. It's been a huge improvement for my skin.",
    },
    {
      name: "Natalie R.",
      feedback:
        "This pill works perfectly for me. I’ve had minimal side effects and great results overall.",
    },
    {
      name: "Rachel D.",
      feedback:
        "I feel more balanced emotionally since switching to Yasmin. It's definitely been the right choice.",
    },
    {
      name: "Claire W.",
      feedback:
        "The online consultation and fast delivery made getting Yasmin incredibly easy and stress-free.",
    },
    {
      name: "Hannah G.",
      feedback:
        "I’ve used Yasmin for over a year and have had no issues. It keeps everything consistent and predictable.",
    },
    {
      name: "Olivia T.",
      feedback:
        "Yasmin has been great for my mood and skin. Ordering online was smooth and professional.",
    },
  ];

  const faqs = [
    {
      question: "What is Yasmin used for?",
      answer:
        "Yasmin is a combined contraceptive pill that helps prevent pregnancy and may also improve skin and mood for some users.",
    },
    {
      question: "What hormones does Yasmin contain?",
      answer:
        "Yasmin contains ethinylestradiol (estrogen) and drospirenone (progestogen), which prevent ovulation and alter cervical mucus.",
    },
    {
      question: "How do I take Yasmin?",
      answer:
        "Take one pill daily for 21 days followed by a 7-day break, during which you’ll usually have a withdrawal bleed.",
    },
    {
      question: "Can Yasmin help with acne?",
      answer:
        "Yes, Yasmin is known to reduce acne and improve skin clarity for many users over time.",
    },
    {
      question: "Is Yasmin effective right away?",
      answer:
        "If started on day 1 of your period, it works immediately. If started later, use backup contraception for the first 7 days.",
    },
    {
      question: "What should I do if I miss a pill?",
      answer:
        "Take it as soon as you remember. If more than one is missed, refer to the leaflet or consult a healthcare provider.",
    },
    {
      question: "Are there any common side effects with Yasmin?",
      answer:
        "Some users may experience headaches, nausea, or breast tenderness, especially during the first few months.",
    },
    {
      question: "Can I skip my period using Yasmin?",
      answer:
        "Yes, you can skip your period by starting a new pack right after finishing the last one. Speak to a doctor before doing so.",
    },
    {
      question: "Is Yasmin safe for everyone?",
      answer:
        "Not suitable for those with certain health conditions like blood clots, high blood pressure, or migraines with aura. Always consult a doctor.",
    },
    {
      question: "Does Yasmin protect against STIs?",
      answer:
        "No, Yasmin does not protect against sexually transmitted infections. Use condoms for STI protection.",
    },
    {
      question: "Can Yasmin cause mood changes?",
      answer:
        "Some users report mood improvements, while others may experience mood swings. It varies by individual.",
    },
  ];

  return (
    <div className="yasmin-pill-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="/images/double-arrow.png" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default YasminPillPage;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const MarvelonPillPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Marvelon – Combined Pill",
    description:
      "Marvelon is a trusted combined contraceptive pill containing ethinylestradiol and desogestrel. It’s highly effective for birth control and also offers benefits like reduced period pain and clearer skin.",
    features: [
      "21 active pills with a 7-day break",
      "Over 99% effective when taken correctly",
      "May reduce acne, cramping, and PMS symptoms",
      "Delivered privately with no doctor visit required",
    ],
    image: "/images/marvelon.jpg", // Ensure this image is present in your public/images folder
  };

  const otherTests = [
    { title: "Mercilon", route: "/mercilon", img: "/images/mercilon.jpg" },
    { title: "Levest", route: "/levest", img: "/images/levest-pack.jpg" },
    { title: "Yasmin", route: "/yasmin", img: "/images/yasmin.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Select Marvelon",
      desc: "Choose Marvelon from our list of pills and complete your order securely.",
    },
    {
      img: "/images/consult.png",
      step: "2. Fill Out Medical Form",
      desc: "Answer a few health questions for review by a licensed doctor.",
    },
    {
      img: "/images/approve.png",
      step: "3. Doctor Review & Approval",
      desc: "Your responses are reviewed and approved before the prescription is confirmed.",
    },
    {
      img: "/images/send.png",
      step: "4. Discreet Delivery",
      desc: "Receive Marvelon at your doorstep in discreet, secure packaging.",
    },
  ];

  const testimonials = [
    {
      name: "Emily R.",
      feedback:
        "Marvelon has made a huge difference in managing my period symptoms. It’s been super reliable for me.",
    },
    {
      name: "Zoe T.",
      feedback:
        "Easy to order, quick delivery, and I had zero side effects with Marvelon. Love the convenience!",
    },
    {
      name: "Natalie F.",
      feedback:
        "I’ve been on Marvelon for over a year and it’s been smooth. I feel more in control of my cycle.",
    },
    {
      name: "Grace L.",
      feedback:
        "Marvelon helped reduce my heavy periods and I’ve had fewer headaches too. It’s a great option.",
    },
    {
      name: "Ellie J.",
      feedback:
        "Honestly, switching to Marvelon was the best decision. No mood swings and very regular cycles.",
    },
  ];

  const faqs = [
    {
      question: "What is Marvelon used for?",
      answer:
        "Marvelon is a combined oral contraceptive pill that helps prevent pregnancy and may reduce period-related symptoms such as heavy bleeding or cramps.",
    },
    {
      question: "What hormones are in Marvelon?",
      answer:
        "Marvelon contains ethinylestradiol (an estrogen) and desogestrel (a progestogen).",
    },
    {
      question: "How effective is Marvelon at preventing pregnancy?",
      answer:
        "When taken correctly, Marvelon is over 99% effective at preventing pregnancy.",
    },
    {
      question: "How do I take Marvelon?",
      answer:
        "Take one pill every day for 21 days, followed by a 7-day pill-free break. Then start the next pack.",
    },
    {
      question: "Can Marvelon help with acne?",
      answer:
        "Yes, many users notice an improvement in their skin and a reduction in acne while taking Marvelon.",
    },
    {
      question: "Are there side effects with Marvelon?",
      answer:
        "Possible side effects include nausea, mood changes, and breast tenderness, which often improve after the first few months.",
    },
    {
      question: "Is Marvelon safe to take long-term?",
      answer:
        "Marvelon is safe for long-term use under medical supervision, but regular health reviews are recommended.",
    },
  ];

  return (
    <div className="marvelon-pill-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="/images/double-arrow.png" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default MarvelonPillPage;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const MercilonPillPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Mercilon – Combined Pill",
    description:
      "Mercilon is a low-dose combined contraceptive pill containing ethinylestradiol and desogestrel. It’s a great choice for effective birth control with fewer hormone-related side effects.",
    features: [
      "Low-dose formulation with 21 active pills and 7-day break",
      "Over 99% effective when used correctly",
      "May help reduce acne and period discomfort",
      "Delivered confidentially after a quick medical review",
    ],
    image: "/images/mercilon.jpg", // Make sure this image exists
  };

  const otherTests = [
    { title: "Marvelon", route: "/marvelon", img: "/images/marvelon.jpg" },
    { title: "Lucette", route: "/lucette", img: "/images/lucette.jpg" },
    { title: "Levest", route: "/levest", img: "/images/levest-pack.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Select Mercilon",
      desc: "Choose Mercilon from our range of combined pills and place your order securely.",
    },
    {
      img: "/images/consult.png",
      step: "2. Complete Health Form",
      desc: "Answer a few simple medical questions for review by our team.",
    },
    {
      img: "/images/approve.png",
      step: "3. Doctor Approval",
      desc: "Your order is approved after medical review, ensuring safety and suitability.",
    },
    {
      img: "/images/send.png",
      step: "4. Get It Delivered",
      desc: "Your Mercilon pill is shipped discreetly with clear instructions.",
    },
  ];

  const testimonials = [
    {
      name: "Sophie K.",
      feedback:
        "Mercilon has been really gentle on my body. No weight gain or mood swings—just smooth and predictable cycles.",
    },
    {
      name: "Amira D.",
      feedback:
        "I switched to Mercilon after trying other pills, and it's been the most reliable and easy to manage.",
    },
    {
      name: "Nina S.",
      feedback:
        "The online order process was seamless, and Mercilon arrived discreetly. So convenient!",
    },
    {
      name: "Leah M.",
      feedback:
        "I feel more balanced on Mercilon than on previous pills. It's been a great choice for me.",
    },
  ];

  const faqs = [
    {
      question: "What is Mercilon used for?",
      answer:
        "Mercilon is a combined oral contraceptive pill used to prevent pregnancy and regulate menstrual cycles.",
    },
    {
      question: "What hormones does Mercilon contain?",
      answer:
        "It contains ethinylestradiol (an estrogen) and desogestrel (a progestogen).",
    },
    {
      question: "How do I take Mercilon?",
      answer:
        "Take one pill at the same time daily for 21 days, followed by a 7-day pill-free break before starting a new pack.",
    },
    {
      question: "Can I skip the 7-day break with Mercilon?",
      answer:
        "Yes, some people take Mercilon continuously without a break to avoid withdrawal bleeding. Speak to your doctor before doing so.",
    },
    {
      question: "Is Mercilon effective immediately?",
      answer:
        "If you start taking Mercilon on the first day of your period, it’s effective immediately. Otherwise, use backup protection for 7 days.",
    },
    {
      question: "Does Mercilon help with period pain?",
      answer:
        "Yes, Mercilon can help reduce cramps and heavy bleeding associated with periods.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Some users may experience nausea, sore breasts, or mood changes, especially in the first few months.",
    },
    {
      question: "Can Mercilon help with acne?",
      answer:
        "Yes, Mercilon may improve acne in some users due to its hormonal balance.",
    },
    {
      question: "Is Mercilon suitable for everyone?",
      answer:
        "It’s not suitable for people with certain health conditions. A medical review is required before starting it.",
    },
    {
      question: "How is Mercilon different from other pills?",
      answer:
        "Mercilon contains a lower dose of estrogen, which may result in fewer estrogen-related side effects for some users.",
    },
  ];

  return (
    <div className="mercilon-pill-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="/images/double-arrow.png" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default MercilonPillPage;

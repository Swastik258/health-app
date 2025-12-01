import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const OvranettePillPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Ovranette – Combined Pill",
    description:
      "Ovranette is a combined contraceptive pill containing ethinylestradiol and levonorgestrel. It is over 99% effective at preventing pregnancy and may help ease menstrual symptoms.",
    features: [
      "Taken daily for 21 days with a 7-day break",
      "Can help reduce period pain and bleeding",
      "Over 99% effective when used correctly",
      "Delivered discreetly after a quick online consultation",
    ],
    image: "/images/ovranette.jpg", // Replace with an appropriate product image
  };

  const otherTests = [
    { title: "Rigevidon", route: "/rigevidon", img: "/images/rigevidon.jpg" },
    { title: "Lucette", route: "/lucette", img: "/images/lucette.jpg" },
    { title: "Levest", route: "/levest", img: "/images/levest-pack.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Choose Ovranette",
      desc: "Select the Ovranette pill and place your order online.",
    },
    {
      img: "/images/consult.png",
      step: "2. Online Consultation",
      desc: "Complete a short health questionnaire for review.",
    },
    {
      img: "/images/approve.png",
      step: "3. Medical Review",
      desc: "A licensed doctor reviews your answers for approval.",
    },
    {
      img: "/images/send.png",
      step: "4. Discreet Delivery",
      desc: "Receive your pill with secure, private shipping.",
    },
  ];

  const testimonials = [
    {
      name: "Jessica T.",
      feedback:
        "Ovranette has been reliable and easy to take. It really simplified my birth control routine.",
    },
    {
      name: "Lauren R.",
      feedback:
        "I’ve been on Ovranette for over a year now and my periods are lighter and more regular. Great results!",
    },
    {
      name: "Hannah D.",
      feedback:
        "I had concerns initially, but Ovranette has worked wonderfully with minimal side effects.",
    },
    {
      name: "Samantha W.",
      feedback:
        "This pill helped me control my hormonal acne and reduced my PMS symptoms significantly.",
    },
    {
      name: "Charlotte B.",
      feedback:
        "Ordering Ovranette online was simple and discreet. No issues with the delivery or process.",
    },
    {
      name: "Olivia P.",
      feedback:
        "I love how convenient it is to get Ovranette delivered. I’ve never missed a cycle since starting it.",
    },
  ];

  const faqs = [
    {
      question: "What is Ovranette used for?",
      answer:
        "Ovranette is a combined contraceptive pill used to prevent pregnancy and can also help regulate periods.",
    },
    {
      question: "What hormones does it contain?",
      answer:
        "It contains ethinylestradiol (estrogen) and levonorgestrel (progestogen), working together to prevent ovulation.",
    },
    {
      question: "How should I take Ovranette?",
      answer:
        "Take one pill daily for 21 days, followed by a 7-day pill-free break before starting a new pack.",
    },
    {
      question: "Can I skip the 7-day break?",
      answer:
        "Yes, under your doctor’s guidance, you may take the pills continuously to avoid withdrawal bleeding.",
    },
    {
      question: "Is Ovranette effective immediately?",
      answer:
        "If you start on the first day of your period, it provides immediate protection. Otherwise, use additional contraception for 7 days.",
    },
    {
      question: "What if I miss a pill?",
      answer:
        "If it's less than 12 hours, take it as soon as you remember. For longer delays, refer to the pack instructions or consult a pharmacist.",
    },
    {
      question: "Are there side effects with Ovranette?",
      answer:
        "Some users may experience nausea, headaches, or mood changes. These usually subside after a few weeks.",
    },
    {
      question: "Can I use Ovranette long-term?",
      answer:
        "Yes, it’s safe for long-term use with regular health checks, unless your doctor advises otherwise.",
    },
    {
      question: "Does Ovranette protect against STIs?",
      answer:
        "No, it only prevents pregnancy. You should still use condoms for protection against sexually transmitted infections.",
    },
  ];

  return (
    <div className="ovranette-pill-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="/images/double-arrow.png" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default OvranettePillPage;

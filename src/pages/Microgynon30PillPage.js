import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const Microgynon30PillPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Microgynon 30 – Combined Pill",
    description:
      "Microgynon 30 is a widely used combined oral contraceptive pill that contains ethinylestradiol and levonorgestrel. It's highly effective in preventing pregnancy and regulating menstrual cycles.",
    features: [
      "21-day pill with a 7-day break",
      "Contains 30 micrograms of estrogen for reliable protection",
      "Often helps with heavy or painful periods",
      "Delivered discreetly after completing a quick health form",
    ],
    image: "/images/microgynon30.jpg", // Make sure this image exists
  };

  const otherTests = [
    { title: "Levest", route: "/levest", img: "/images/levest-pack.jpg" },
    { title: "Marvelon", route: "/marvelon", img: "/images/marvelon.jpg" },
    { title: "Yasmin", route: "/yasmin", img: "/images/yasmin.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Choose Microgynon 30",
      desc: "Add Microgynon 30 to your cart and proceed to checkout.",
    },
    {
      img: "/images/consult.png",
      step: "2. Complete Health Questionnaire",
      desc: "Answer a few quick health-related questions for doctor review.",
    },
    {
      img: "/images/approve.png",
      step: "3. Doctor Review & Approval",
      desc: "Our medical team reviews your info to ensure suitability.",
    },
    {
      img: "/images/send.png",
      step: "4. Discreet Delivery",
      desc: "Your pills arrive in plain packaging with full usage instructions.",
    },
  ];

  const testimonials = [
    {
      name: "Jasmine R.",
      feedback:
        "Microgynon 30 has worked perfectly for me. It helped regulate my cycle and reduced my period pain significantly.",
    },
    {
      name: "Hannah T.",
      feedback:
        "I appreciate how easy it is to order Microgynon 30 online. It’s affordable, effective, and arrives discreetly.",
    },
    {
      name: "Priya M.",
      feedback:
        "After trying several pills, Microgynon 30 is the one I stuck with. Fewer side effects and a lot more peace of mind.",
    },
    {
      name: "Rachel B.",
      feedback:
        "My skin improved after starting Microgynon 30, and I’ve had no major side effects. Super convenient to get it delivered.",
    },
    {
      name: "Ella S.",
      feedback:
        "It’s been a reliable choice for years. I like the predictability it gives to my monthly cycle.",
    },
  ];

  const faqs = [
    {
      question: "What is Microgynon 30 used for?",
      answer:
        "Microgynon 30 is a combined oral contraceptive pill used primarily for preventing pregnancy and managing menstrual issues.",
    },
    {
      question: "What hormones are in Microgynon 30?",
      answer:
        "It contains ethinylestradiol and levonorgestrel, a combination of estrogen and progestogen.",
    },
    {
      question: "How do I take Microgynon 30?",
      answer:
        "Take one pill daily for 21 days, followed by a 7-day break before starting the next pack.",
    },
    {
      question: "Can I skip periods using Microgynon 30?",
      answer:
        "Yes, you can take packs back-to-back to delay or skip periods, but consult your doctor before doing so.",
    },
    {
      question: "Is it safe for long-term use?",
      answer:
        "Microgynon 30 is considered safe for long-term use for most people, but it’s important to have regular checkups.",
    },
    {
      question: "Does Microgynon 30 help with acne?",
      answer:
        "Yes, some people report improved skin while on Microgynon 30, although results vary.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Possible side effects include nausea, headaches, mood changes, or sore breasts—usually temporary.",
    },
    {
      question: "When does it start working?",
      answer:
        "If taken on the first day of your period, Microgynon 30 provides immediate protection. Otherwise, use backup contraception for 7 days.",
    },
    {
      question: "What if I miss a pill?",
      answer:
        "If you miss a pill, take it as soon as you remember. If more than one pill is missed, follow the instructions in the leaflet or consult your pharmacist.",
    },
  ];

  return (
    <div className="microgynon30-pill-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="/images/double-arrow.png" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default Microgynon30PillPage;

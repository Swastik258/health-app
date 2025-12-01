import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const GonorrhoeaTestPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Gonorrhoea Test",
    description:
      "Our at-home Gonorrhoea test detects infection through a simple sample. Quick, private, and lab-certified — no clinic visit needed.",
    features: [
      "Urine or swab sample (gender-specific)",
      "Results in 2–3 working days",
      "100% confidential and accurate",
      "Treatment advice included if positive",
    ],
    image: "/images/gonorrhoea.jpg", // Replace with your actual image
  };

  const otherTests = [
    { title: "Chlamydia Test", route: "/chlamydia", img: "/images/chlamydia.jpg" },
    { title: "Syphilis Test", route: "/syphilis", img: "/images/syphilis.jpg" },
    { title: "HIV Lab Test", route: "/hiv-lab-test", img: "/images/hiv-lab-test-kit.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Order Your Kit",
      desc: "Choose the Gonorrhoea test and receive a discreetly packaged kit at home.",
    },
    {
      img: "/images/collect.png",
      step: "2. Collect Sample",
      desc: "Men provide a urine sample; women use the included vaginal swab.",
    },
    {
      img: "/images/send.png",
      step: "3. Send It to the Lab",
      desc: "Return the sample using the prepaid envelope included in your kit.",
    },
    {
      img: "/images/result.png",
      step: "4. Get Results & Advice",
      desc: "Get secure results online within 2–3 working days, along with guidance if needed.",
    },
  ];

const testimonials = [
  {
    name: "Jasmine L.",
    feedback:
      "I was nervous to get tested, but this kit made it private and simple. The results were fast and easy to access."
  },
  {
    name: "Ethan P.",
    feedback:
      "Clear instructions and discreet shipping. I felt reassured using this service from the comfort of home."
  },
  {
    name: "Maya R.",
    feedback:
      "This test gave me peace of mind. The whole process was fast, secure, and stress-free."
  },
  {
    name: "Karan S.",
    feedback:
      "No clinic visits or waiting rooms. Just a smooth process from order to results. Highly recommend it!"
  }
];


  const faqs = [
  {
    question: "What is a Gonorrhoea test?",
    answer:
      "A Gonorrhoea test detects the presence of the Neisseria gonorrhoeae bacteria, which causes the sexually transmitted infection gonorrhoea."
  },
  {
    question: "How is the test done?",
    answer:
      "The test is usually done using a urine sample or a swab from the throat, rectum, or genital area depending on your symptoms and sexual activity."
  },
  {
    question: "Can I do this test at home?",
    answer:
      "Yes, our home test kit allows you to collect your sample privately and send it to our certified lab for analysis."
  },
  {
    question: "Is the test reliable?",
    answer:
      "Yes, lab-based Gonorrhoea tests are highly sensitive and specific, ensuring reliable results when instructions are followed properly."
  },
  {
    question: "When should I get tested for gonorrhoea?",
    answer:
      "You should test if you’ve had unprotected sex, new or multiple partners, or if you have symptoms like pain while urinating or unusual discharge."
  },
  {
    question: "How soon after exposure can I test?",
    answer:
      "It’s recommended to wait at least 7–14 days after possible exposure for the most accurate results."
  },
  {
    question: "How long does it take to get results?",
    answer:
      "Typically, results are available within 2–3 days after the lab receives your sample."
  },
  {
    question: "What if I test positive?",
    answer:
      "If your result is positive, you’ll receive clear guidance for treatment and should consult a healthcare provider immediately."
  },
  {
    question: "Can gonorrhoea be cured?",
    answer:
      "Yes, gonorrhoea is curable with antibiotics. Early detection and treatment are essential to avoid complications."
  },
  {
    question: "Is the test confidential?",
    answer:
      "Absolutely. Your sample and results are handled with complete privacy and delivered securely."
  }
];


  return (
    <div className="gonorrhoea-test-page">
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

export default GonorrhoeaTestPage;

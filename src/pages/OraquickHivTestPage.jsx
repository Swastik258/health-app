import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const OraquickHivTestPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "OraQuick HIV Test",
    description:
      "The OraQuick HIV Self-Test detects HIV antibodies using an oral swab, delivering results in 20 minutes. It's painless, easy, and ideal for home testing.",
    features: [
      "No blood required – oral fluid based",
      "Painless and user-friendly",
      "Lab-accurate results in 20 minutes",
      "Discreet packaging and guidance included",
    ],
    image: "/images/oraquick.jpg", // Replace with your actual image
  };

  const otherTests = [
    { title: "Insti HIV Test", route: "/insti-hiv", img: "/images/insti-header.jpg" },
    { title: "HIV Lab Test", route: "/hiv-lab-test", img: "/images/hiv-lab-test-kit.jpg" },
    { title: "Rapid HIV Finger Prick", route: "/rapid-hiv", img: "/images/rapid.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Order OraQuick",
      desc: "Place your order online. We’ll ship the test in discreet, plain packaging.",
    },
    {
      img: "/images/swab.png", // Replace with a real image of oral swab
      step: "2. Swab Your Gums",
      desc: "Swipe the included test stick along your upper and lower gums – no needles or blood.",
    },
    {
      img: "/images/result.png",
      step: "3. Read Results",
      desc: "In just 20 minutes, get your private, easy-to-read result. Support available if needed.",
    },
  ];

const testimonials = [
  {
    name: "Rachel P.",
    feedback:
      "The OraQuick test was incredibly easy to use. I loved that I didn’t need to deal with blood or needles."
  },
  {
    name: "Jordan L.",
    feedback:
      "Fast, private, and very straightforward. The instructions were clear, and I had my result in 20 minutes."
  },
  {
    name: "Sanjay M.",
    feedback:
      "A great option for people who are anxious about testing. Doing it at home gave me peace of mind."
  },
  {
    name: "Maria G.",
    feedback:
      "The whole process was simple and stress-free. I highly recommend this test to anyone wanting quick answers."
  },
  {
    name: "Tyrone S.",
    feedback:
      "OraQuick is a lifesaver. The oral swab method made it painless, and I felt reassured with the result."
  },
  {
    name: "Lina K.",
    feedback:
      "Discreet packaging, easy directions, and rapid results. It’s the best self-test I’ve ever used."
  }
];


  const faqs = [
  {
    question: "What is the OraQuick HIV Test?",
    answer:
      "The OraQuick HIV Test is an FDA-approved rapid self-test that detects HIV-1 and HIV-2 antibodies using an oral swab sample."
  },
  {
    question: "How does the OraQuick test work?",
    answer:
      "You collect an oral fluid sample by swabbing your upper and lower gums, place the swab in the developer solution, and wait 20 minutes for results."
  },
  {
    question: "Is the OraQuick test accurate?",
    answer:
      "Yes, it’s over 99% accurate for negative results and about 92% accurate for detecting positive results when used correctly."
  },
  {
    question: "How long does it take to get results?",
    answer:
      "Results are ready in just 20 minutes after placing the swab in the test solution."
  },
  {
    question: "Is a blood sample required?",
    answer:
      "No, OraQuick uses an oral fluid sample from your gums—no needles or blood collection required."
  },
  {
    question: "Can I eat or drink before taking the test?",
    answer:
      "Avoid eating, drinking, or using oral care products 30 minutes before testing for accurate results."
  },
  {
    question: "When should I take the OraQuick test after exposure?",
    answer:
      "The test is most accurate 3 months (90 days) after potential exposure, as it detects antibodies that take time to develop."
  },
  {
    question: "What should I do if my test is positive?",
    answer:
      "If the test shows a positive result, follow up immediately with a healthcare provider for a confirmatory blood test and further guidance."
  },
  {
    question: "Can I reuse the test kit?",
    answer:
      "No, the OraQuick HIV Test is designed for one-time use only. Do not reuse the kit or any of its components."
  },
  {
    question: "Is the OraQuick test confidential?",
    answer:
      "Yes. The test is done privately at home, and no information is shared unless you choose to disclose it."
  },
  {
    question: "Is this test approved for home use?",
    answer:
      "Yes, OraQuick is FDA-approved for over-the-counter home use and meets quality and safety standards."
  },
  {
    question: "Does a negative result mean I’m 100% HIV-free?",
    answer:
      "A negative result means no HIV antibodies were detected. If you’re within the window period or unsure, retest later or consult a healthcare provider."
  }
];


  return (
    <div className="oraquick-hiv-test-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="images/double-arrow.png" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default OraquickHivTestPage;

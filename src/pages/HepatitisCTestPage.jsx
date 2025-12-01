import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const HepatitisCTestPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Hepatitis C Test",
    description:
      "Our Hepatitis C home test detects antibodies to the Hepatitis C virus, helping you identify past or current infection. A reliable, lab-certified test without needing a clinic visit.",
    features: [
      "Simple finger-prick blood sample",
      "Fast results within 2–3 working days",
      "Confidential lab testing process",
      "Guidance provided if positive",
    ],
    image: "/images/hepatitis-c-header.jpg", // Replace with appropriate image
  };

  const otherTests = [
    { title: "Hepatitis B Test", route: "/hepatitis-b", img: "/images/hepatitis-b-header.jpg" },
    { title: "HIV Lab Test", route: "/hiv-lab-test", img: "/images/hiv-lab-test-kit.jpg" },
    { title: "Syphilis Test", route: "/syphilis", img: "/images/syphilis.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Order the Test Kit",
      desc: "Place your order online. The kit is delivered discreetly to your home.",
    },
    {
      img: "/images/collect.png",
      step: "2. Take Your Sample",
      desc: "Collect a small blood sample using the finger-prick tool included.",
    },
    {
      img: "/images/send.png",
      step: "3. Send It to Our Lab",
      desc: "Use the prepaid envelope to return your sample safely for analysis.",
    },
    {
      img: "/images/result.png",
      step: "4. Receive Your Results",
      desc: "Access secure results within 2–3 working days and get medical guidance if needed.",
    },
  ];

  const testimonials = [
  {
    name: "Neha S.",
    feedback:
      "The Hepatitis C test was simple and stress-free. It gave me peace of mind to test at home."
  },
  {
    name: "David R.",
    feedback:
      "I was impressed by how fast and confidential the process was. Got results in two days!"
  },
  {
    name: "Amir L.",
    feedback:
      "Easy to use and very discreet. The instructions were clear and straightforward."
  },
  {
    name: "Lily M.",
    feedback:
      "The kit arrived quickly and was professionally packaged. Very smooth experience."
  },
  {
    name: "Carlos G.",
    feedback:
      "This was much more comfortable than going to a clinic. Highly recommend for privacy and convenience."
  }
];


  const faqs = [
  {
    question: "What is a Hepatitis C test?",
    answer:
      "A Hepatitis C test checks your blood for antibodies or viral RNA to detect a current or past Hepatitis C infection."
  },
  {
    question: "How do I take the test?",
    answer:
      "You collect a small blood sample at home using a finger-prick device, then send it to our certified lab using the prepaid envelope."
  },
  {
    question: "Who should get tested for Hepatitis C?",
    answer:
      "Anyone who has had unprotected sex, shared needles, or received blood transfusions before 1992 should consider getting tested."
  },
  {
    question: "Is the test accurate?",
    answer:
      "Yes. Lab-based Hepatitis C testing is highly accurate and reliable when performed with a proper blood sample."
  },
  {
    question: "How soon can I test after exposure?",
    answer:
      "It’s best to test at least 8–12 weeks after possible exposure for accurate antibody detection."
  },
  {
    question: "What happens if I test positive?",
    answer:
      "If positive, you’ll be advised to consult a doctor for confirmatory testing and discuss treatment options."
  },
  {
    question: "Is the test confidential?",
    answer:
      "Absolutely. Your results are secure, and all kits are shipped discreetly to ensure privacy."
  }
];


  return (
    <div className="hepatitis-c-test-page">
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

export default HepatitisCTestPage;

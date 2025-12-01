import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const SyphilisTestPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Syphilis Test",
    description:
      "Our at-home Syphilis test is a simple blood-based test that detects early and late-stage syphilis. It’s fast, private, and provides certified lab results in just a few days.",
    features: [
      "Easy finger-prick blood sample",
      "Accurate results within 2–3 days",
      "Completely private & discreet",
      "Guidance for treatment if positive",
    ],
    image: "/images/syphilis.jpg", // Replace with your image
  };

  const otherTests = [
    { title: "HIV Lab Test", route: "/hiv-lab-test", img: "/images/hiv-lab-test-kit.jpg" },
    { title: "Chlamydia Test", route: "/chlamydia", img: "/images/chlamydia-header.jpg" },
    { title: "Gonorrhoea Test", route: "/gonorrhoea", img: "/images/gonorrhoea.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Order Your Test Kit",
      desc: "Your kit will arrive in discreet packaging with everything you need.",
    },
    {
      img: "/images/collect.png", // Replace with blood sample icon
      step: "2. Collect a Blood Sample",
      desc: "Use the finger-prick lancet and collection card provided in the kit.",
    },
    {
      img: "/images/send.png",
      step: "3. Post It to Our Lab",
      desc: "Use the prepaid envelope included to return your sample safely.",
    },
    {
      img: "/images/result.png",
      step: "4. Get Results Online",
      desc: "You’ll receive secure results within 2–3 business days with next steps if needed.",
    },
  ];

const testimonials = [
  {
    name: "Alisha D.",
    feedback:
      "The Syphilis test was quick and easy to do from home. I appreciated the privacy and fast results."
  },
  {
    name: "Thomas K.",
    feedback:
      "Discreet packaging and step-by-step instructions made the process stress-free and straightforward."
  },
  {
    name: "Meera J.",
    feedback:
      "I got my results in just 2 days and felt completely reassured. Highly recommend this test for peace of mind."
  },
  {
    name: "Jordan T.",
    feedback:
      "Much easier than going to a clinic. The finger-prick test was simple, and I felt safe and informed throughout."
  }
];


  const faqs = [
  {
    question: "What is a Syphilis test?",
    answer:
      "A Syphilis test detects antibodies in your blood that indicate a current or past infection with the Treponema pallidum bacteria."
  },
  {
    question: "How do I take the Syphilis test?",
    answer:
      "Our home test kit requires a small finger-prick blood sample, which you send to our certified lab using the provided prepaid envelope."
  },
  {
    question: "Is the test accurate?",
    answer:
      "Yes, the test is processed by certified labs and is highly accurate for detecting syphilis antibodies."
  },
  {
    question: "When should I take a Syphilis test?",
    answer:
      "You should test if you've had unprotected sex, new or multiple partners, or are showing symptoms like sores, rashes, or swollen lymph nodes."
  },
  {
    question: "How soon after exposure can I test?",
    answer:
      "It’s best to test at least 3–6 weeks after exposure, as this gives the body time to produce detectable antibodies."
  },
  {
    question: "How long does it take to get results?",
    answer:
      "Results are typically available within 2–3 working days after the lab receives your sample."
  },
  {
    question: "What happens if I test positive?",
    answer:
      "If you test positive, we will provide guidance on next steps, and you should seek treatment from a healthcare provider immediately."
  },
  {
    question: "Is this test confidential?",
    answer:
      "Yes, your sample and results are handled with complete privacy and confidentiality throughout the process."
  }
];


  return (
    <div className="syphilis-test-page">
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

export default SyphilisTestPage;

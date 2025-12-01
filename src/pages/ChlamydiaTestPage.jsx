import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const ChlamydiaTestPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Chlamydia Test",
    description:
      "Our discreet at-home Chlamydia test helps detect infection early with fast lab results and guidance. Suitable for men and women.",
    features: [
      "Urine sample or swab (depending on gender)",
      "Certified lab testing with 2–3 day turnaround",
      "Private and easy-to-follow instructions",
      "Free treatment guidance if positive",
    ],
    image: "/images/chlamydia-header.jpg", // Replace with your test image
  };

  const otherTests = [
    { title: "Gonorrhoea Test", route: "/gonorrhoea", img: "/images/gonorrhoea.jpg" },
    { title: "Syphilis Test", route: "/syphilis", img: "/images/syphilis.jpg" },
    { title: "HIV Lab Test", route: "/hiv-lab-test", img: "/images/hiv-lab-test-kit.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Order Your Kit",
      desc: "Select the Chlamydia test online and receive your kit with discreet packaging.",
    },
    {
      img: "/images/collect.png", // Replace with sample-collection image
      step: "2. Collect Sample",
      desc: "Provide a urine sample (men) or swab (women) using clear, included instructions.",
    },
    {
      img: "/images/send.png",
      step: "3. Send to Lab",
      desc: "Use the prepaid return envelope to send your sample to our certified lab.",
    },
    {
      img: "/images/result.png",
      step: "4. Get Your Results",
      desc: "Your results will be available securely online within 2–3 working days.",
    },
  ];

const testimonials = [
  {
    name: "Nina W.",
    feedback:
      "The kit was very easy to use, and I got my results quickly. It was a relief to do it all from home."
  },
  {
    name: "Omar D.",
    feedback:
      "Discreet packaging and fast turnaround. I felt in control of my sexual health for the first time."
  },
  {
    name: "Leah S.",
    feedback:
      "The instructions were clear, and the process was smooth. I would definitely recommend this to others."
  },
  {
    name: "Chris B.",
    feedback:
      "It gave me peace of mind without the awkward clinic visit. Everything felt professional and private."
  }
];


  const faqs = [
  {
    question: "What is a Chlamydia test?",
    answer:
      "A Chlamydia test is used to detect the presence of the Chlamydia trachomatis bacteria, which causes the most common sexually transmitted infection."
  },
  {
    question: "How is the test done?",
    answer:
      "The test is typically done using a urine sample or a swab from the genital area, depending on the testing method provided in the kit."
  },
  {
    question: "Do I need to visit a clinic?",
    answer:
      "No, this is a home test kit. You can collect the sample yourself and send it to the lab using the prepaid envelope."
  },
  {
    question: "Is the Chlamydia test accurate?",
    answer:
      "Yes, lab-based Chlamydia tests are highly accurate when the sample is collected and handled correctly."
  },
  {
    question: "When should I get tested for Chlamydia?",
    answer:
      "You should test if you've had unprotected sex, multiple partners, or if you’re experiencing symptoms like unusual discharge or pain during urination."
  },
  {
    question: "Is the test confidential?",
    answer:
      "Absolutely. Your sample is handled discreetly, and results are delivered securely to protect your privacy."
  },
  {
    question: "How long does it take to receive results?",
    answer:
      "Results are typically available within 2–3 working days after the lab receives your sample."
  },
  {
    question: "What if I test positive?",
    answer:
      "If you test positive, you’ll receive clear instructions on treatment options, and you should follow up with a healthcare professional."
  }
];


  return (
    <div className="chlamydia-test-page">
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

export default ChlamydiaTestPage;

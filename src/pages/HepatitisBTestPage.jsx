import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const HepatitisBTestPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Hepatitis B Test",
    description:
      "Our at-home Hepatitis B test detects current or past infection by identifying the hepatitis B surface antigen (HBsAg) using a finger-prick blood sample.",
    features: [
      "Quick and easy finger-prick sample collection",
      "Certified lab testing and secure results",
      "Results available within 2–3 working days",
      "Complete privacy and guidance if positive",
    ],
    image: "/images/hepatitis-b-header.jpg", // Replace with your image
  };

  const otherTests = [
    { title: "Hepatitis C Test", route: "/hepatitis-c", img: "/images/hepatitis-c-header.jpg" },
    { title: "HIV Lab Test", route: "/hiv-lab-test", img: "/images/hiv-lab-test-kit.jpg" },
    { title: "Syphilis Test", route: "/syphilis", img: "/images/syphilis.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Place Your Order",
      desc: "Choose the Hepatitis B test online and receive your discreetly packaged kit.",
    },
    {
      img: "/images/collect.png",
      step: "2. Collect Your Blood Sample",
      desc: "Use the finger-prick lancet and sample card provided in the kit.",
    },
    {
      img: "/images/send.png",
      step: "3. Return It to the Lab",
      desc: "Use the prepaid envelope to securely send your sample to our certified lab.",
    },
    {
      img: "/images/result.png",
      step: "4. Receive Results",
      desc: "Results are delivered via secure online portal within 2–3 working days.",
    },
  ];


  const testimonials = [
  {
    name: "Ravi M.",
    feedback:
      "The Hepatitis B test kit was very easy to use, and I liked that I didn’t need to visit a clinic."
  },
  {
    name: "Elena G.",
    feedback:
      "I got my results in just two days. Everything was discreet and professionally handled."
  },
  {
    name: "Marcus D.",
    feedback:
      "Great service and fast delivery. The instructions were clear and simple to follow."
  },
  {
    name: "Sana P.",
    feedback:
      "I was able to test from home without stress. Definitely a convenient and reliable service."
  }
];

const faqs = [
  {
    question: "What is a Hepatitis B test?",
    answer:
      "A Hepatitis B test detects the presence of Hepatitis B surface antigens (HBsAg) or antibodies in your blood to determine infection or immunity."
  },
  {
    question: "How do I take the test at home?",
    answer:
      "You collect a small blood sample using a finger-prick device provided in the kit and send it to our lab using the prepaid envelope."
  },
  {
    question: "Is this test accurate?",
    answer:
      "Yes, it is a highly accurate test processed by certified labs to detect Hepatitis B infection or past exposure."
  },
  {
    question: "Who should take a Hepatitis B test?",
    answer:
      "Anyone with potential exposure to the virus, including through unprotected sex, shared needles, or close contact with someone infected."
  },
  {
    question: "Is the test confidential?",
    answer:
      "Yes. All testing is done discreetly, and your results are delivered securely and privately."
  },
  {
    question: "How long does it take to get results?",
    answer:
      "You’ll receive your results within 2–3 business days after the sample reaches the lab."
  },
  {
    question: "What happens if I test positive?",
    answer:
      "You will be advised to consult a healthcare provider for follow-up testing and appropriate care or treatment."
  },
  {
    question: "Can Hepatitis B be cured?",
    answer:
      "There is no cure for chronic Hepatitis B, but treatments can help manage the condition and reduce risks of complications."
  },
  {
    question: "Can I take this test if I’m vaccinated?",
    answer:
      "Yes. The test may also detect immunity due to vaccination, depending on the type of Hepatitis B test performed."
  },
  {
    question: "Is the test painful?",
    answer:
      "Only a small finger-prick is required, similar to checking blood sugar. Most people find it very manageable."
  },
  {
    question: "Can I test during symptoms?",
    answer:
      "Yes. If you're experiencing symptoms like fatigue, jaundice, or nausea, testing is recommended right away."
  }
];


  return (
    <div className="hepatitis-b-test-page">
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

export default HepatitisBTestPage;

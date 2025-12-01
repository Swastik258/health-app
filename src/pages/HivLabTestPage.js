import React, {useEffect} from "react";
import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HivLabTestPage = () => {
  const headerData = {
    title: "HIV Lab Test",
    description: "This test uses a small blood sample to detect HIV antibodies and antigens with high accuracy.",
    features: [
      "Simple finger-prick sample",
      "Lab-verified results in 2–3 days",
      "100% confidential & discreet shipping",
    ],
    image: "/images/hiv-lab-test-kit.jpg",
  };

  const otherTests = [
    { title: "Insti HIV Test", route: "/insti-hiv", img: "/images/Stindr_Blood_Kit_In_Box.jpg" },
    { title: "OraQuick HIV Test", route: "/oraquick", img: "/images/Stindr_Blood_Kit_In_Box.jpg" },
    { title: "Rapid HIV Finger Prick", route: "/rapid-hiv", img: "/images/Stindr_Blood_Kit_In_Box.jpg" },
  ];

  const steps = [
    { img: "/images/order.png", step: "1. Order Your Kit", desc: "Select the HIV Lab Test and place your order. Kits are shipped discreetly." },
    { img: "/images/collect.png", step: "2. Collect Sample", desc: "Use the included finger-prick tool to collect your blood sample at home." },
    { img: "/images/send.png", step: "3. Send to Lab", desc: "Use the prepaid envelope to send your sample to our certified lab." },
  ];

  const testimonials = [
    { name: "Alex M.", feedback: "The HIV lab test was quick, discreet, and so easy to do at home. Highly recommend it!" },
    { name: "Priya K.", feedback: "Very professional service. I had results within 2 days and it gave me peace of mind." },
    { name: "Daniel R.", feedback: "Clear instructions and excellent support team. Would definitely use it again." },
    { name: "Fatima S.", feedback: "The instructions were clear, and the whole process was stress-free." },
    { name: "John T.", feedback: "Affordable and quick service. I’d recommend it to anyone who values privacy." },
  ];
const faqs = [
  {
    question: "What is an HIV lab test?",
    answer:
      "An HIV lab test detects the presence of HIV antibodies and antigens in a small blood sample. It is more accurate than rapid home tests and is processed by certified laboratories.",
  },
  {
    question: "How accurate is the HIV lab test?",
    answer:
      "Our lab test uses 4th-generation technology and is over 99% accurate in detecting HIV, even in early stages of infection (typically after 18–45 days).",
  },
  {
    question: "How do I take the test?",
    answer:
      "You’ll collect a small blood sample using a simple finger-prick device included in your kit. The sample is placed into a tube and returned to the lab using a prepaid envelope.",
  },
  {
    question: "How long does it take to get results?",
    answer:
      "Once your sample arrives at the lab, results are usually available within 2–3 business days. You’ll be notified securely by email or SMS.",
  },
  {
    question: "Is the test confidential?",
    answer:
      "Yes, 100%. Your test is sent in discreet packaging, and your personal information is protected by strict privacy protocols and data encryption.",
  },
  {
    question: "What happens if my result is positive?",
    answer:
      "If your result is reactive (positive), our medical team will contact you with support and help you connect with confirmatory testing and appropriate care options.",
  },
  {
    question: "Can I take the test if I have no symptoms?",
    answer:
      "Absolutely. HIV may not cause symptoms for years. Regular testing is recommended for anyone who is sexually active or may have been exposed.",
  },
  {
    question: "When should I take the test after exposure?",
    answer:
      "The 4th-gen HIV test is most accurate 28 days or more after potential exposure. If you're unsure, consider retesting after a few weeks.",
  },
  {
    question: "Is this test suitable for home use?",
    answer:
      "Yes, it’s designed for home use. Clear instructions and materials are included, and no clinic visit is required.",
  },
  {
    question: "Can I order this test anonymously?",
    answer:
      "While we need basic details to process your test and deliver results, we do not share your information and use discreet, privacy-first practices.",
  },
];


  
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // only animate once
    });
  }, []);
  return (
    <div className="hiv-lab-test-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="images/double-arrow.webp" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default HivLabTestPage;

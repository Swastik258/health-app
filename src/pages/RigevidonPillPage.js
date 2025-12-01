import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const RigevidonPillPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Rigevidon – Combined Pill",
    description:
      "Rigevidon is a combined contraceptive pill that contains ethinylestradiol and levonorgestrel. It is widely prescribed for effective and convenient pregnancy prevention.",
    features: [
      "21-day active pill cycle with a 7-day break",
      "Over 99% effective with correct use",
      "May help regulate periods and reduce pain",
      "Easy online ordering with fast and discreet delivery",
    ],
    image: "/images/rigevidon.jpg", // Replace with actual product image
  };

  const otherTests = [
    { title: "Levest", route: "/levest", img: "/images/levest-pack.jpg" },
    { title: "Lucette", route: "/lucette", img: "/images/lucette.jpg" },
    { title: "Ovranette", route: "/ovranette", img: "/images/ovranette.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Select Rigevidon",
      desc: "Choose your pill and proceed to secure checkout.",
    },
    {
      img: "/images/consult.png",
      step: "2. Complete Health Form",
      desc: "Fill out a short online medical questionnaire.",
    },
    {
      img: "/images/approve.png",
      step: "3. Medical Approval",
      desc: "A qualified doctor reviews and approves your order.",
    },
    {
      img: "/images/send.png",
      step: "4. Receive Discreet Delivery",
      desc: "Your order is shipped with full instructions in discreet packaging.",
    },
  ];

  const testimonials = [
    {
      name: "Amelia H.",
      feedback:
        "Rigevidon has worked really well for me. It keeps my cycles regular and I’ve had no major side effects.",
    },
    {
      name: "Chloe M.",
      feedback:
        "I switched to Rigevidon after trying other pills, and it’s been the most reliable and convenient one so far.",
    },
    {
      name: "Ella J.",
      feedback:
        "This pill has helped reduce my period pain and I love the flexibility of ordering it online.",
    },
    {
      name: "Sophie T.",
      feedback:
        "Rigevidon made my periods lighter and more predictable. It's been a great option for me.",
    },
    {
      name: "Grace L.",
      feedback:
        "The service was fast and discreet. Rigevidon fits easily into my daily routine without stress.",
    },
  ];

  const faqs = [
    {
      question: "What is Rigevidon used for?",
      answer:
        "Rigevidon is a combined oral contraceptive pill used to prevent pregnancy and help manage menstrual symptoms.",
    },
    {
      question: "What hormones are in Rigevidon?",
      answer:
        "It contains ethinylestradiol (estrogen) and levonorgestrel (progestogen), which work together to prevent ovulation.",
    },
    {
      question: "How do I take Rigevidon?",
      answer:
        "Take one pill daily for 21 days, followed by a 7-day break before starting your next pack.",
    },
    {
      question: "Is Rigevidon effective immediately?",
      answer:
        "Yes, if taken on the first day of your period. If started later, use backup contraception for 7 days.",
    },
    {
      question: "Can I use Rigevidon continuously without a break?",
      answer:
        "Yes, continuous use is possible, but it should be done under the guidance of your doctor.",
    },
    {
      question: "What should I do if I miss a pill?",
      answer:
        "If you miss one pill, take it as soon as you remember. If more are missed, follow the instructions on your leaflet or consult a pharmacist.",
    },
    {
      question: "Does Rigevidon help with acne or PMS?",
      answer:
        "Many users report reduced PMS symptoms and clearer skin while using Rigevidon.",
    },
    {
      question: "Are there any side effects with Rigevidon?",
      answer:
        "Possible side effects include nausea, mood changes, and breast tenderness. These often settle within a few weeks.",
    },
    {
      question: "Can I take Rigevidon if I smoke?",
      answer:
        "Smoking while on combined pills increases health risks. It's not recommended for smokers over 35 years old.",
    },
    {
      question: "Does Rigevidon protect against STIs?",
      answer:
        "No, Rigevidon does not protect against sexually transmitted infections. Use condoms for STI protection.",
    },
  ];

  return (
    <div className="rigevidon-pill-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="/images/double-arrow.png" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default RigevidonPillPage;

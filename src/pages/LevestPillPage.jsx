import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const LevestPillPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Levest – Combined Pill",
    description:
      "Levest is a popular combined oral contraceptive pill that contains ethinylestradiol and levonorgestrel. It helps prevent pregnancy, manage period symptoms, and improve acne in some users.",
    features: [
      "21 active tablets followed by a 7-day break",
      "Over 99% effective when used correctly",
      "May regulate periods and reduce period pain",
      "Delivered discreetly to your door after online consultation",
    ],
    image: "/images/levest-pack.jpg", // Add a branded product image here
  };

  const otherTests = [
    {
      title: "Gedarel 30",
      route: "/gedarel-30",
      img: "/images/gedarel30-pack.jpg",
    },
    { title: "Lucette", route: "/lucette", img: "/images/lucette.jpg" },
    { title: "Yasmin", route: "/yasmin", img: "/images/yasmin.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Choose Levest",
      desc: "Select the Levest pill and complete your checkout securely.",
    },
    {
      img: "/images/consult.png",
      step: "2. Complete Online Review",
      desc: "Fill out a short medical form for doctor review.",
    },
    {
      img: "/images/approve.png",
      step: "3. Doctor Approval",
      desc: "Once approved, your order is processed by a licensed pharmacy.",
    },
    {
      img: "/images/send.png",
      step: "4. Receive Discreet Delivery",
      desc: "Your pill is shipped in discreet packaging with full instructions.",
    },
  ];

  const testimonials = [
    {
      name: "Emma L.",
      feedback:
        "Levest helped me manage my period pain and gave me peace of mind with reliable protection.",
    },
    {
      name: "Nina K.",
      feedback:
        "I switched to Levest after trying other pills, and this one works great for my body with minimal side effects.",
    },
    {
      name: "Sophie J.",
      feedback:
        "Ordering Levest online was easy and discreet. The consultation process was quick and reassuring.",
    },
    {
      name: "Hannah M.",
      feedback:
        "Been using Levest for 6 months. No major issues and my skin is clearer too!",
    },
  ];

  const faqs = [
    {
      question: "What is Levest used for?",
      answer:
        "Levest is a combined oral contraceptive pill used to prevent pregnancy and help regulate menstrual cycles.",
    },
    {
      question: "What hormones are in Levest?",
      answer:
        "Levest contains ethinylestradiol and levonorgestrel, synthetic versions of estrogen and progestogen.",
    },
    {
      question: "How should I take Levest?",
      answer:
        "Take one pill daily for 21 days followed by a 7-day break, then start the next pack on day 29.",
    },
    {
      question: "What if I miss a pill?",
      answer:
        "Take the missed pill as soon as you remember. If more than 12 hours late, use additional contraception for 7 days.",
    },
    {
      question: "Can Levest help with period pain or acne?",
      answer:
        "Yes. Many users report lighter periods, reduced cramps, and improved skin with Levest.",
    },
    {
      question: "Does Levest cause weight gain?",
      answer:
        "Most people don’t experience significant weight changes. However, individual side effects may vary.",
    },
    {
      question: "Is a prescription required for Levest?",
      answer:
        "Yes. You need to complete an online consultation or visit a doctor to get a prescription.",
    },
    {
      question: "Can I use Levest to skip my period?",
      answer:
        "Yes, you can skip the 7-day break and start the next pack right away. Always consult a doctor first.",
    },
    {
      question: "Is the packaging discreet?",
      answer:
        "Absolutely. All deliveries are made in plain, unmarked packaging to ensure your privacy.",
    },
  ];

  return (
    <div className="levest-pill-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="images/double-arrow.png" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default LevestPillPage;

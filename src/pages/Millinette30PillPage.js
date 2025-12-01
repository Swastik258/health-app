import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const Millinette30PillPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Millinette 30 – Combined Pill",
    description:
      "Millinette 30 is a combined oral contraceptive pill containing ethinylestradiol and gestodene. It's an effective option for preventing pregnancy and may help improve period symptoms like pain and heavy bleeding.",
    features: [
      "Contains 30mcg ethinylestradiol and 75mcg gestodene",
      "Taken for 21 days followed by a 7-day break",
      "May ease period pain and reduce menstrual flow",
      "Discreet online consultation and fast delivery",
    ],
    image: "/images/millinette30.jpg", // Ensure this image exists
  };

  const otherTests = [
    {
      title: "Microgynon 30",
      route: "/microgynon",
      img: "/images/microgynon30.jpg",
    },
    { title: "Lucette", route: "/lucette", img: "/images/lucette.jpg" },
    {
      title: "Gedarel 30",
      route: "/gedarel-30",
      img: "/images/gedarel30-pack.jpg",
    },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Choose Millinette 30",
      desc: "Select Millinette 30 and proceed to a secure checkout.",
    },
    {
      img: "/images/consult.png",
      step: "2. Complete Online Review",
      desc: "Fill out a quick health questionnaire for medical approval.",
    },
    {
      img: "/images/approve.png",
      step: "3. Doctor Approves",
      desc: "Our medical team will verify if Millinette 30 suits you.",
    },
    {
      img: "/images/send.png",
      step: "4. Discreet Delivery",
      desc: "Receive your pill in plain packaging at your doorstep.",
    },
  ];

  const testimonials = [
    {
      name: "Sophie A.",
      feedback:
        "Millinette 30 has helped regulate my cycle and made my periods much lighter and easier to manage.",
    },
    {
      name: "Chloe M.",
      feedback:
        "Very reliable and no noticeable side effects. It’s been a smooth experience so far with Millinette 30.",
    },
    {
      name: "Amelia J.",
      feedback:
        "Ordering Millinette 30 online saved me time and the delivery was super discreet. Great service!",
    },
    {
      name: "Isla W.",
      feedback:
        "I used to suffer from bad cramps, but since I started Millinette 30, things have significantly improved.",
    },
    {
      name: "Freya K.",
      feedback:
        "I feel more in control of my cycle and haven’t had any mood swings. It’s the best pill I’ve tried.",
    },
    {
      name: "Lily T.",
      feedback:
        "Super convenient to get this online without needing to visit the GP every time. Millinette 30 is a lifesaver.",
    },
  ];

  const faqs = [
    {
      question: "What is Millinette 30 used for?",
      answer:
        "Millinette 30 is a combined contraceptive pill used to prevent pregnancy and may also help with heavy or painful periods.",
    },
    {
      question: "What hormones does it contain?",
      answer:
        "Millinette 30 contains ethinylestradiol (an estrogen) and gestodene (a progestogen).",
    },
    {
      question: "How do I take Millinette 30?",
      answer:
        "Take one pill at the same time every day for 21 days, followed by a 7-day break during which you’ll usually have a withdrawal bleed.",
    },
    {
      question: "Can Millinette 30 help with acne?",
      answer:
        "Yes, it may help improve acne in some users due to the hormonal balance it provides.",
    },
    {
      question: "Does it affect fertility after stopping?",
      answer:
        "No, your fertility returns to normal quickly after stopping Millinette 30. You can conceive as soon as ovulation resumes.",
    },
    {
      question: "Are there common side effects?",
      answer:
        "Some people may experience mild side effects like nausea, headaches, breast tenderness, or mood changes.",
    },
    {
      question: "What happens if I miss a pill?",
      answer:
        "If you miss one pill, take it as soon as you remember. If you miss more than one, follow the instructions in the pack or consult a pharmacist.",
    },
    {
      question: "Can I take Millinette 30 continuously?",
      answer:
        "Yes, some users take it continuously to skip periods, but you should consult with a doctor before doing this regularly.",
    },
    {
      question: "Is it safe for long-term use?",
      answer:
        "Yes, Millinette 30 is generally safe for long-term use under medical supervision with regular checkups.",
    },
    {
      question: "Does it interact with other medications?",
      answer:
        "Some medications can reduce its effectiveness. Always inform your doctor or pharmacist about all the medicines you are taking.",
    },
    {
      question: "How effective is Millinette 30?",
      answer:
        "When taken correctly, it's over 99% effective in preventing pregnancy.",
    },
  ];

  return (
    <div className="millinette30-pill-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="/images/double-arrow.png" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default Millinette30PillPage;

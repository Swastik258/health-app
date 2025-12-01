import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeaderSection from "../components/HeaderSection";
import OtherTestsSection from "../components/OtherTestsSection";
import StepsSection from "../components/StepsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";

const LucettePillPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const headerData = {
    title: "Lucette – Combined Pill",
    description:
      "Lucette is a combined contraceptive pill containing drospirenone and ethinylestradiol. It’s widely used for birth control and can also help with acne and painful periods.",
    features: [
      "28-day pack: 21 active pills + 7 inactive",
      "Over 99% effective when taken correctly",
      "Can help with hormonal acne and bloating",
      "Delivered discreetly with no in-person visit",
    ],
    image: "/images/lucette.jpg", // Ensure this image exists
  };

  const otherTests = [
    { title: "Yasmin", route: "/yasmin", img: "/images/yasmin.jpg" },
    { title: "Levest", route: "/levest", img: "/images/levest-pack.jpg" },
    { title: "Lizinna", route: "/lizinna", img: "/images/lizinna-pack.jpg" },
  ];

  const steps = [
    {
      img: "/images/order.png",
      step: "1. Choose Lucette",
      desc: "Pick Lucette from our range and place your order securely.",
    },
    {
      img: "/images/consult.png",
      step: "2. Fill Medical Form",
      desc: "Answer a few health-related questions for doctor review.",
    },
    {
      img: "/images/approve.png",
      step: "3. Doctor Review",
      desc: "Our licensed doctor checks your form before approval.",
    },
    {
      img: "/images/send.png",
      step: "4. Get Discreet Delivery",
      desc: "Your order is packed and delivered discreetly to your door.",
    },
  ];

  const testimonials = [
    {
      name: "Sophie M.",
      feedback:
        "Lucette has been amazing for my skin and period cramps. I feel more balanced and less bloated.",
    },
    {
      name: "Isla D.",
      feedback:
        "The online consultation for Lucette was quick and easy. Discreet delivery made it all the better.",
    },
    {
      name: "Chloe S.",
      feedback:
        "I switched to Lucette after trying several pills, and this one finally works well for me.",
    },
    {
      name: "Freya L.",
      feedback:
        "Zero side effects and my cycles are super regular now. Would definitely recommend Lucette.",
    },
    {
      name: "Ruby G.",
      feedback:
        "Fast approval, great support, and it’s been effective. Lucette is now my go-to choice.",
    },
    {
      name: "Hannah K.",
      feedback:
        "I was nervous to try a new pill, but Lucette has been gentle and consistent. Really happy with it.",
    },
  ];

  const faqs = [
    {
      question: "What is Lucette used for?",
      answer:
        "Lucette is a combined oral contraceptive pill used to prevent pregnancy and manage hormonal symptoms like acne and heavy periods.",
    },
    {
      question: "What hormones does Lucette contain?",
      answer:
        "Lucette contains ethinylestradiol and drospirenone, synthetic versions of estrogen and progestogen.",
    },
    {
      question: "How effective is Lucette?",
      answer:
        "Lucette is over 99% effective at preventing pregnancy when taken correctly and consistently.",
    },
    {
      question: "Can Lucette help with acne?",
      answer:
        "Yes, Lucette is often prescribed for acne treatment as it regulates hormone levels that cause breakouts.",
    },
    {
      question: "How do I take Lucette?",
      answer:
        "Take one pill at the same time every day for 21 days, then take a 7-day break before starting the next pack.",
    },
    {
      question: "What if I miss a Lucette pill?",
      answer:
        "If you're less than 12 hours late, take the missed pill immediately. If more than 12 hours, follow the missed pill guidance and use backup contraception.",
    },
    {
      question: "What are the side effects of Lucette?",
      answer:
        "Common side effects may include nausea, breast tenderness, or mood changes, which often settle within the first few months.",
    },
    {
      question: "Do I need a prescription for Lucette?",
      answer:
        "Yes, Lucette requires a prescription, which you can get online through a medical questionnaire or from your GP.",
    },
    {
      question: "Can I take Lucette continuously?",
      answer:
        "Yes, some users take Lucette back-to-back without a break to skip their period, but consult a doctor before doing so.",
    },
    {
      question: "Is Lucette safe for long-term use?",
      answer:
        "Lucette is considered safe for long-term use under medical supervision, though regular reviews are advised.",
    },
    {
      question: "Will my Lucette order be delivered discreetly?",
      answer:
        "Yes, all orders are shipped in unbranded, discreet packaging to ensure privacy.",
    },
  ];

  return (
    <div className="lucette-pill-page">
      <HeaderSection {...headerData} />
      <OtherTestsSection tests={otherTests} />
      <StepsSection steps={steps} arrowImage="/images/double-arrow.png" />
      <TestimonialsSection testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default LucettePillPage;

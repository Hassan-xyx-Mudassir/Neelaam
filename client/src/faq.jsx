import React, { useState } from 'react';
import './FAQ.css';
import { Accordion } from '@/components/ui/accordion';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "PRODUCT INFO",
      questions: [
        { question: "CAN I BUY LIQUID DEATH WHOLESALE?", answer: "Yes, you can buy it wholesale through our distributor network." },
        { question: "WHERE CAN I BUY LIQUID DEATH?", answer: "You can find Liquid Death in many retailers and online stores." },
        { question: "WHERE CAN I BUY LIQUID DEATH ICED TEA?", answer: "Liquid Death Iced Tea is available at select retailers." },
        { question: "ARE YOUR CANS RECYCLABLE?", answer: "Yes, all our cans are 100% recyclable." },
        { question: "IS THERE CAFFEINE IN LIQUID DEATH?", answer: "Only our iced tea contains caffeine." },
        { question: "IS LIQUID DEATH SAFE FOR CHILDREN?", answer: "Yes, it is safe for children, though the iced tea has caffeine." },
        { question: "IS LIQUID DEATH GLUTEN FREE AND VEGAN?", answer: "Yes, Liquid Death is both gluten-free and vegan." },
        { question: "I'M PREGNANT. CAN I DRINK LIQUID DEATH MOUNTAIN WATER?", answer: "Consult your doctor before consuming any beverage while pregnant." },
        { question: "WHAT IS THE SHELF LIFE OF LIQUID DEATH?", answer: "The shelf life is generally 2 years from production." }
      ]
    },
    {
      category: "ORDERING & SHIPPING",
      questions: [
        { question: "HOW CAN I PLACE AN ORDER?", answer: "You can place an order directly through our website." },
        { question: "WHAT SHIPPING OPTIONS DO YOU OFFER?", answer: "We offer standard and expedited shipping." },
        { question: "DO YOU SHIP INTERNATIONALLY?", answer: "Yes, we ship worldwide." },
        { question: "HOW LONG DOES SHIPPING TAKE?", answer: "Shipping takes 3-5 business days for domestic orders." }
      ]
    },
    {
      category: "RETURNS & REFUNDS",
      questions: [
        { question: "WHAT IS YOUR RETURN POLICY?", answer: "You can return items within 30 days for a full refund." },
        { question: "HOW DO I REQUEST A REFUND?", answer: "Please contact our customer service team for refund requests." },
        { question: "CAN I EXCHANGE AN ITEM?", answer: "Yes, exchanges are accepted within 30 days of purchase." }
      ]
    }
  ];

  return (<>
    <div className="parent">
        
     <header className="faq-header">
        <div className="brand-name">Neelaam</div>
        <div className="header-icons">
          <div className="icon">👤</div>
          <div className="icon">🛒</div>
          <div className="icon">❤️</div>
        </div>
      </header>   
    <div className="faq-container">

      <div className="faq-heading">FAQs</div>

      {faqData.map((category, index) => (
        <div key={index} className="faq-category">
          <div className="category-heading">{category.category}</div>

          {category.questions.map((item, idx) => (
            <div key={idx} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleAccordion(idx)}
              >
                {item.question}
                <span className="accordion-icon">{activeIndex === idx ? '-' : '+'}</span>
              </div>
              {activeIndex === idx && (
                <div className="faq-answer">{item.answer}</div>
              )}
              {idx !== category.questions.length - 1 && <hr className="separator" />}
            </div>
          ))}
        </div>
      ))}
    </div></div>
    </>
  );
};

export default Faq;

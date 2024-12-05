import React, { useState } from 'react';
import './FAQ.css';
//import { Accordion } from '@/components/ui/accordion';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "USING NEELAAM",
      questions: [
        { question: "HOW DO I REGISTER ON NEELAAM?", answer: "Click on the 'Sign Up' button, fill out your details, and verify your account via email or SMS." },
        { question: "CAN I SELL ITEMS ON NEELAAM?", answer: "Yes, registered users can list items for auction or fixed-price sales." },
        { question: "IS NEELAAM AVAILABLE IN URDU?", answer: "Yes, you can switch to Urdu from the language settings in your account." },
        { question: "HOW DO I REPORT A USER OR ITEM?", answer: "Use the 'Report' button on the user’s profile or item listing, and our team will review the case." },
        { question: "WHAT HAPPENS IF I WIN AN AUCTION?", answer: "You’ll receive a notification with the seller's details and payment instructions to finalize your purchase." },
      ],
    },
    {
      category: "PAYMENTS & SHIPPING",
      questions: [
        { question: "WHAT PAYMENT OPTIONS ARE AVAILABLE?", answer: "We support local payment methods, including Easypaisa, JazzCash, and bank transfers." },
        { question: "DOES NEELAAM OFFER CASH ON DELIVERY (COD)?", answer: "Yes, COD is available for eligible listings. Check the seller’s terms before bidding." },
        { question: "HOW ARE SHIPPING COSTS CALCULATED?", answer: "Shipping costs are determined by the seller based on the item’s weight and delivery location." },
        { question: "CAN I TRACK MY ORDER?", answer: "If the seller provides a tracking ID, you can follow your shipment's progress through the courier’s website." },
      ],
    },
    {
      category: "RETURNS & REFUNDS",
      questions: [
        { question: "WHAT IS NEELAAM’S RETURN POLICY?", answer: "Returns are handled by individual sellers. Check the return policy on the item listing." },
        { question: "HOW DO I REQUEST A REFUND?", answer: "Contact the seller directly via the messaging system. If unresolved, raise a dispute with our support team." },
        { question: "CAN I CANCEL A BID?", answer: "Bids cannot be canceled. Make sure you're committed before placing a bid." },
      ],
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

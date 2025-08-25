import React, { useState } from "react";

const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);
  
  const faqs = [
    {
      id: 1,
      question: "What is self-drive rental?",
      answer: "Self-drive rental allows you to rent a car or bike and drive it yourself without a driver, giving you full control over your trip."
    },
    {
      id: 2,
      question: "What are the age requirements for renting a self-drive vehicle?",
      answer: "Typically, renters must be at least 21 years old and hold a valid driving license. Specific age and license duration requirements may vary."
    },
    {
      id: 3,
      question: "Do I need insurance for self-drive rentals?",
      answer: "Yes, all our self-drive vehicles come with basic insurance coverage. Additional insurance options are available for extra protection."
    },
    {
      id: 4,
      question: "Is there a mileage limit on self-drive rentals?",
      answer: "Most of our self-drive rentals come with a daily mileage allowance. Extra kilometers are charged at a nominal rate; details will be provided at booking."
    },
    {
      id: 5,
      question: "Can I travel out of state with my self-drive rental?",
      answer: "Yes, you can travel out of state with prior approval from our rental team. Please inform us in advance to arrange necessary permits if required."
    },
    {
      id: 6,
      question: "What should I do in case of a breakdown?",
      answer: "We offer 24/7 roadside assistance. If you face any issues, contact our support immediately for quick help and vehicle replacement if necessary."
    }
  ];

  const toggle = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div style={{ 
      backgroundColor: '#f8fafc', 
      padding: '5rem 1rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '800', 
          color: '#1f2937', 
          textAlign: 'center', 
          marginBottom: '3rem' 
        }}>
          Frequently Asked Questions
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map(({ id, question, answer }) => (
            <div key={id} style={{ 
              border: '1px solid #e5e7eb', 
              borderRadius: '1rem', 
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}>
              <button
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.25rem 1.5rem',
                  textAlign: 'left',
                  backgroundColor: activeId === id ? '#4ade80' : '#f0fdf4',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onClick={() => toggle(id)}
                aria-expanded={activeId === id}
              >
                <span style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: '600', 
                  color: '#166534',
                  paddingRight: '1rem'
                }}>
                  {question}
                </span>
                <span style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  color: '#166534',
                  transition: 'transform 0.3s ease',
                  transform: activeId === id ? 'rotate(45deg)' : 'rotate(0)',
                  flexShrink: 0
                }}>
                  +
                </span>
              </button>
              
              <div
                style={{
                  padding: activeId === id ? '1.5rem' : '0 1.5rem',
                  height: activeId === id ? 'auto' : '0',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease',
                  color: '#4b5563',
                  lineHeight: '1.6'
                }}
              >
                {answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
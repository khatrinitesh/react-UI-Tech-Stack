import React, { useState } from "react";


const Accordion = () => {
  return (
    <>
       <h1>React Ripple UI Accordion Example</h1>
      <RippleAccordion title="Accordion 1">
        <p>This is the content of the first accordion.</p>
      </RippleAccordion>
      <RippleAccordion title="Accordion 2">
        <p>This is the content of the second accordion.</p>
      </RippleAccordion>
    </>
  );
};

export default Accordion;

const RippleAccordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="accordion">
          <div className="accordion-header" onClick={toggleAccordion}>
            <h3>{title}</h3>
          </div>
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    );
  };
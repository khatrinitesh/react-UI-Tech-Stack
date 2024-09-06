import React from 'react';

const Accordion = () => {
  return (
    <>
      {/*  Accordion using radio inputs */}
      <div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" defaultChecked />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>

{/* Accordion with plus/minus icon */}
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
  <div className="collapse-content">
    <p>hello</p>
  </div>
</div>

{/* Using Accordion and Join together */}
<div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
</div>
    </>
  );
}

export default Accordion;

import React from 'react';

const Badge = () => {
  return (
    <>
     <span className="badge">Badge</span> 

     {/* Badge with brand colors */}
     <div className="badge">default</div>
<div className="badge badge-neutral">neutral</div>
<div className="badge badge-primary">primary</div>
<div className="badge badge-secondary">secondary</div>
<div className="badge badge-accent">accent</div>
<div className="badge badge-ghost">ghost</div>

{/* Outline badge */}
<div className="badge badge-outline">default</div>
<div className="badge badge-primary badge-outline">primary</div>
<div className="badge badge-secondary badge-outline">secondary</div>
<div className="badge badge-accent badge-outline">accent</div>

{/* Badge sizes */}
<div className="badge badge-lg">987,654</div>
<div className="badge badge-md">987,654</div>
<div className="badge badge-sm">987,654</div>
<div className="badge badge-xs">987,654</div>

{/* Empty badge */}
<div className="badge badge-primary badge-lg"></div>
<div className="badge badge-primary badge-md"></div>
<div className="badge badge-primary badge-sm"></div>
<div className="badge badge-primary badge-xs"></div>

{/*  Badge with state colors */}
<div className="badge badge-info gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block h-4 w-4 stroke-current">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"></path>
  </svg>
  info
</div>
<div className="badge badge-success gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block h-4 w-4 stroke-current">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"></path>
  </svg>
  success
</div>
<div className="badge badge-warning gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block h-4 w-4 stroke-current">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"></path>
  </svg>
  warning
</div>
<div className="badge badge-error gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block h-4 w-4 stroke-current">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"></path>
  </svg>
  error
</div>

{/* Badge in a text */}
<h2 className="text-xl">
  Heading
  <span className="badge badge-lg">NEW</span>
</h2>
<h3 className="text-lg">
  Heading
  <span className="badge badge-md">NEW</span>
</h3>
<h4 className="text-base">
  Heading
  <span className="badge badge-sm">NEW</span>
</h4>
<h5 className="text-sm">
  Heading
  <span className="badge badge-xs">NEW</span>
</h5>

{/* Badge in a button */}
<button className="btn">
  Inbox
  <div className="badge">+99</div>
</button>
<button className="btn">
  Inbox
  <div className="badge badge-secondary">+99</div>
</button>
    </>
  );
}

export default Badge;

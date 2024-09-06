import React from 'react';

const Alert = () => {
  return (
    <>
      <div role="alert" className="alert">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="stroke-info h-6 w-6 shrink-0">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>12 unread messages. Tap to see.</span>
</div>

{/* Alert with buttons */}
<div role="alert" className="alert">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="stroke-info h-6 w-6 shrink-0">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <span>we use cookies for no reason.</span>
  <div>
    <button className="btn btn-sm">Deny</button>
    <button className="btn btn-sm btn-primary">Accept</button>
  </div>
</div>

{/* Alert with title and description */}
<div role="alert" className="alert shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="stroke-info h-6 w-6 shrink-0">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
  <div>
    <h3 className="font-bold">New message!</h3>
    <div className="text-xs">You have 1 unread message</div>
  </div>
  <button className="btn btn-sm">See</button>
</div>

    </>
  );
}

export default Alert;

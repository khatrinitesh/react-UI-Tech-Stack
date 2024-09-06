import React from 'react';

const Toast = () => {
  return (
    <>
      <div className="toast">
  <div className="alert alert-info">
    <span>New message arrived.</span>
  </div>
</div>

{/* toast-top toast-start */}
<div className="toast toast-top toast-start">
  <div className="alert alert-info">
    <span>New mail arrived.</span>
  </div>
  <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
    </>
  );
}

export default Toast;

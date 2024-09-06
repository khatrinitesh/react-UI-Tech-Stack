import React from 'react';

const Textarea = () => {
  return (
    <>
      <textarea className="textarea-bordered textarea" placeholder="Bio"></textarea>

      {/* With form control and labels */}
      <label className="form-control">
  <div className="label">
    <span className="label-text">Your bio</span>
    <span className="label-text-alt">Alt label</span>
  </div>
  <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
  <div className="label">
    <span className="label-text-alt">Your bio</span>
    <span className="label-text-alt">Alt label</span>
  </div>
</label>
    </>
  );
}

export default Textarea;

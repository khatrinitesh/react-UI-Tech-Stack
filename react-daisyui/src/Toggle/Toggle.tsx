import React from 'react';

const Toggle = () => {
  return (
    <>
      <input type="checkbox" className="toggle" defaultChecked />

      {/* With label and form-control */}
      <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span>
    <input type="checkbox" className="toggle" defaultChecked />
  </label>
</div>

{/* Checkboxes with brand colors */}
<div className="flex flex-col">
  <div className="form-control w-52">
    <label className="label cursor-pointer">
      <span className="label-text">Remember me</span>
      <input type="checkbox" className="toggle toggle-primary" defaultChecked />
    </label>
  </div>
  <div className="form-control w-52">
    <label className="label cursor-pointer">
      <span className="label-text">Remember me</span>
      <input type="checkbox" className="toggle toggle-secondary" defaultChecked />
    </label>
  </div>
  <div className="form-control w-52">
    <label className="label cursor-pointer">
      <span className="label-text">Remember me</span>
      <input type="checkbox" className="toggle toggle-accent" defaultChecked />
    </label>
  </div>
</div>

{/* Checkboxes with state colors */}
<input type="checkbox" className="toggle toggle-success" defaultChecked />
<input type="checkbox" className="toggle toggle-warning" defaultChecked />
<input type="checkbox" className="toggle toggle-info" defaultChecked />
<input type="checkbox" className="toggle toggle-error" defaultChecked />
    </>
  );
}

export default Toggle;

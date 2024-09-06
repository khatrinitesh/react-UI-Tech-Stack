import React from 'react';

const Checkbox = () => {
  return (
    <>
      <input type="checkbox" defaultChecked className="checkbox" />

      {/* With label and form-control */}
      <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span>
    <input type="checkbox" defaultChecked className="checkbox" />
  </label>
</div>

<input type="checkbox" defaultChecked className="checkbox checkbox-xs" />
<input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
<input type="checkbox" defaultChecked className="checkbox checkbox-md" />
<input type="checkbox" defaultChecked className="checkbox checkbox-lg" />
    </>
  );
}

export default Checkbox;

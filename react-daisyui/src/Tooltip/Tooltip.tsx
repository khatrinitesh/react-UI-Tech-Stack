import React from 'react';

const Tooltip = () => {
  return (
    <>
      <div className="tooltip" data-tip="hello">
  <button className="btn">Hover me</button>
</div>

{/* Force open */}
<div className="tooltip tooltip-open" data-tip="hello">
  <button className="btn">Force open</button>
</div>
    </>
  );
}

export default Tooltip;

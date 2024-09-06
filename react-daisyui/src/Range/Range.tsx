import React from 'react';

const Range = () => {
  return (
    <>
      <input type="range" min={0} max="100" value="40" className="range" />

      {/* With steps and measure */}
      <input type="range" min={0} max="100" value="25" className="range" step="25" />
<div className="flex w-full justify-between px-2 text-xs">
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
  <span>|</span>
</div>

{/* Range with custom color */}
<input type="range" min={0} max="100" value="40" className="range [--range-shdw:yellow]" />
    </>
  );
}

export default Range;

import React from 'react';

const FileInput = () => {
  return (
    <>
      <input disabled  type="file" className="file-input-bordered file-input w-full max-w-xs" />

      {/* Ghost (no background) */}
      <input type="file" className="file-input file-input-ghost w-full max-w-xs" />

      {/* With form-control and labels */}
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Pick a file</span>
    <span className="label-text-alt">Alt label</span>
  </div>
  <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
  <div className="label">
    <span className="label-text-alt">Alt label</span>
    <span className="label-text-alt">Alt label</span>
  </div>
</label>
    </>
  );
}

export default FileInput;

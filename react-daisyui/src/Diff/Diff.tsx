import React from 'react';

const Diff = () => {
  return (
    <>
    {/* diff text */}
    <div className="diff aspect-[16/9]">
  <div className="diff-item-1">
    <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      DAISY
    </div>
  </div>
  <div className="diff-item-2">
    <div className="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
  </div>
  <div className="diff-resizer"></div>
</div>

    <div className="diff aspect-[16/9]">
  <div className="diff-item-1">
    <img alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </div>
  <div className="diff-item-2">
    <img
      alt="daisy"
      src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-bw.webp" />
  </div>
  <div className="diff-resizer"></div>
</div>
    </>
  );
}

export default Diff;

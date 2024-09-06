import React from 'react';

const Artboard = () => {
  return (
    <>
      <div className="artboard phone-1">320×568</div>

      {/* Artboard horizontal size 1 (568×320) */}
      <div className="artboard artboard-horizontal phone-1">568×320</div>

      {/* Artboard horizontal size 2 (667×375) */}
      <div className="artboard artboard-horizontal phone-2">667×375</div>
    </>
  );
}

export default Artboard;

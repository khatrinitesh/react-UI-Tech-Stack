import React from 'react';
import { Spin } from 'react-swift-reveal';


const SpinAnimation = () => {
  return (
    <>
      <Spin>
      <div className="box">
        This element will spin as it enters the viewport.
      </div>
    </Spin> 
    </>
  );
}

export default SpinAnimation;

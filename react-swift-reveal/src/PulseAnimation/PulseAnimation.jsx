import React from 'react';
import { Pulse } from 'react-swift-reveal';

const PulseAnimation = () => {
  return (
    <>
      <Pulse>
      <div className="box">
        This element will pulse as it enters the viewport.
      </div>
    </Pulse>
    </>
  );
}

export default PulseAnimation;

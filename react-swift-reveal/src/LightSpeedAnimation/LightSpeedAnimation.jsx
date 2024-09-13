import React from 'react';
import { LightSpeed } from 'react-swift-reveal';

const LightSpeedAnimation = () => {
  return (
    <>
      <LightSpeed>
      <div className="box">
        This element will move with lightspeed as it enters the viewport.
      </div>
    </LightSpeed> 
    </>
  );
}

export default LightSpeedAnimation;

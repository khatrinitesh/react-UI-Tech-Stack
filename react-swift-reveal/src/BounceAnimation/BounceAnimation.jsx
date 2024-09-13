import React from 'react';
import { Bounce } from 'react-swift-reveal';

const BounceAnimation = () => {
  return (
    <>
      <Bounce>
      <div className="box">
        This element will bounce as it enters the viewport.
      </div>
    </Bounce>
    </>
  );
}

export default BounceAnimation;

import React from 'react';
import { RubberBand } from 'react-swift-reveal';

const RubberBandAnimation = () => {
  return (
    <>
      <RubberBand>
      <div className="box">
        This element will rubberband as it enters the viewport.
      </div>
    </RubberBand>
    </>
  );
}

export default RubberBandAnimation;

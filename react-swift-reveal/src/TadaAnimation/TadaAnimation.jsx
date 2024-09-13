import React from 'react';
import { Tada } from 'react-swift-reveal';

const TadaAnimation = () => {
  return (
    <>
      <Tada>
      <div className="box">
        This element will tada as it enters the viewport.
      </div>
    </Tada>
    </>
  );
}

export default TadaAnimation;

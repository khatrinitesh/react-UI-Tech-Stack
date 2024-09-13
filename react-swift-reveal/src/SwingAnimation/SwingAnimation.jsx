import React from 'react';
import { Swing } from 'react-swift-reveal';

const SwingAnimation = () => {
  return (
    <>
        <Swing>
      <div className="box">
        This element will swing as it enters the viewport.
      </div>
    </Swing>
    </>
  );
}

export default SwingAnimation;

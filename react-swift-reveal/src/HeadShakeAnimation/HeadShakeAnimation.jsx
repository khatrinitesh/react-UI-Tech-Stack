import React from 'react';
import { HeadShake } from 'react-swift-reveal';

const HeadShakeAnimation = () => {
  return (
    <>
      <HeadShake>
      <div className="box">
        This element will shake its head as it enters the viewport.
      </div>
    </HeadShake>
    </>
  );
}

export default HeadShakeAnimation;

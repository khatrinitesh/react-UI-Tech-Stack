import React from 'react';
import { Wobble } from 'react-swift-reveal';

const WobbleAnimation = () => {
  return (
    <>
       <Wobble>
      <div className="box">
        This element will wobble as it enters the viewport.
      </div>
    </Wobble>
    </>
  );
}

export default WobbleAnimation;

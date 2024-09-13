import React from 'react';
import { Flip } from 'react-swift-reveal';


const FlipAnimation = () => {
  return (
    <>
       <Flip>
      <div className="box">
        This element will flip as it enters the viewport.
      </div>
    </Flip>
    </>
  );
}

export default FlipAnimation;

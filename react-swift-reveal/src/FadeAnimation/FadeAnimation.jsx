import React from 'react';
import { Fade } from 'react-swift-reveal';

const FadeAnimation = () => {
  return (
    <>
       <Fade>
      <div className="box">
        This element will fade in as it enters the viewport.
      </div>
    </Fade>
    </>
  );
}

export default FadeAnimation;

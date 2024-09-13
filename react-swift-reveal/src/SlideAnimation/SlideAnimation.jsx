import React from 'react';
import { Slide } from "react-swift-reveal";

const SlideAnimation = () => {
  return (
    <>
      <Slide>
      <div className="box">
        This element will slide as it enters the viewport.
      </div>
    </Slide>
    </>
  );
}

export default SlideAnimation;

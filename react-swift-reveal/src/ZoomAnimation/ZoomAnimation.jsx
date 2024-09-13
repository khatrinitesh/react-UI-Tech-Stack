import React from 'react';
import { Zoom } from "react-swift-reveal";

const ZoomAnimation = () => {
  return (
    <>
      <Zoom>
      <div className="box">
        This element will zoom in as it enters the viewport.
      </div>
    </Zoom> 
    </>
  );
}

export default ZoomAnimation;

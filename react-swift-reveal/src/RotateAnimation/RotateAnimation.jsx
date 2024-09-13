import React from 'react';
import { Rotate } from "react-swift-reveal";

const RotateAnimation = () => {
  return (
    <>
     <Rotate>
      <div className="box">
        This element will rotate as it enters the viewport.
      </div>
    </Rotate> 
    </>
  );
}

export default RotateAnimation;

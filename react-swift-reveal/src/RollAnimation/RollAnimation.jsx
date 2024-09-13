import React from 'react';
import { Roll } from "react-swift-reveal";

const RollAnimation = () => {
  return (
    <>
      <Roll>
      <div className="box">
        This element will roll as it enters the viewport.
      </div>
    </Roll>
    </>
  );
}

export default RollAnimation;

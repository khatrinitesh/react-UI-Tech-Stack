import React from 'react';
import { Jump } from 'react-swift-reveal';

const JumpAnimation = () => {
  return (
    <>
      <Jump>
      <div className="box">
        This element will jump as it enters the viewport.
      </div>
    </Jump>
    </>
  );
}

export default JumpAnimation;

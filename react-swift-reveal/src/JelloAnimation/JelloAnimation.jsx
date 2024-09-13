import React from 'react';
import { Jello } from 'react-swift-reveal';

const JelloAnimation = () => {
  return (
    <>
      <Jello>
      <div className="box">
        This element will jello as it enters the viewport.
      </div>
    </Jello>
    </>
  );
}

export default JelloAnimation;

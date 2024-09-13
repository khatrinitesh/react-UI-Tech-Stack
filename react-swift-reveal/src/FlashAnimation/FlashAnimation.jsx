import React from 'react';
import { Flash } from 'react-swift-reveal';

const FlashAnimation = () => {
  return (
    <>
      <Flash>
      <div className="box">
        This element will flash as it enters the viewport.
      </div>
    </Flash>
    </>
  );
}

export default FlashAnimation;

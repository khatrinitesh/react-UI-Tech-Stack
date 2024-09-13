import React from 'react';
import { Pop } from 'react-swift-reveal';

const PopAnimation = () => {
  return (
    <>
       <Pop>
      <div className="box">
        This element will pop as it enters the viewport.
      </div>
    </Pop>
    </>
  );
}

export default PopAnimation;

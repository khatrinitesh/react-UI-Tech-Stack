import React from 'react';

const Rating = () => {
  return (
    <>
      <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>

{/* mask-star-2 with warning color */}
<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>

{/* mask-heart with multiple colors */}
<div className="rating gap-1">
  <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" defaultChecked />
  <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
  <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
</div>

{/* mask-star-2 with green-500 color */}
<div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>

{/*  */}
    </>
  );
}

export default Rating;

import React from 'react';

const Select = () => {
  return (
    <>
      <select disabled className="select select-bordered w-full max-w-xs">
  <option disabled selected>Pick your favorite Simpson</option>
  <option>Homer</option>
  <option>Marge</option>
  <option>Bart</option>
  <option>Lisa</option>
  <option>Maggie</option>
</select>

{/* With form-control and labels */}
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Pick the best fantasy franchise</span>
    <span className="label-text-alt">Alt label</span>
  </div>
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  <div className="label">
    <span className="label-text-alt">Alt label</span>
    <span className="label-text-alt">Alt label</span>
  </div>
</label>
    </>
  );
}

export default Select;

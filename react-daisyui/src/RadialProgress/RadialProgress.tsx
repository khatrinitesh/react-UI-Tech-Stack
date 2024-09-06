import React from 'react';

const RadialProgress = () => {
  return (
    <>
      <div className="radial-progress" style={{ "--value": 70 }} role="progressbar">
  70%
</div>

{/* Different values */}
<div className="radial-progress" style={{"--value":0}} role="progressbar">0%</div>
<div className="radial-progress" style={{"--value":20}} role="progressbar">20%</div>
<div className="radial-progress" style={{"--value":60}} role="progressbar">60%</div>
<div className="radial-progress" style={{"--value":80}} role="progressbar">80%</div>
<div className="radial-progress" style={{"--value":100}} role="progressbar">100%</div>

{/* custom color */}
<div className="radial-progress" style={{"--value":0}} role="progressbar">0%</div>
<div className="radial-progress" style={{"--value":20}} role="progressbar">20%</div>
<div className="radial-progress" style={{"--value":60}} role="progressbar">60%</div>
<div className="radial-progress" style={{"--value":80}} role="progressbar">80%</div>
<div className="radial-progress" style={{"--value":100}} role="progressbar">100%</div>

{/* With background color and border */}
<div
  className="radial-progress bg-primary text-primary-content border-primary border-4"
  style={{ "--value": 70 }}
  role="progressbar">
  70%
</div>

{/* Custom size and custom thickness */}
<div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }} role="progressbar">70%</div>
<div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">70%</div>
    </>
  );
}

export default RadialProgress;

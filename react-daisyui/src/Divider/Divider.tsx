import React from 'react';

const Divider = () => {
  return (
    <>
      <div className="flex w-full flex-col border-opacity-50">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <div className="divider">OR</div>
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>

<br />

{/*Divider horizontal  */}
<div className="flex w-full">
  <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">content</div>
  <div className="divider divider-horizontal">OR</div>
  <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">content</div>
</div>
    </>
  );
}

export default Divider;

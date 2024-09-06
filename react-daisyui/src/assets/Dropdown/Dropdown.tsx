import React from 'react';

const Dropdown = () => {
  return (
    <>
      <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

{/* Dropdown / aligns to end */}
<div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

{/*  Dropdown top */}
<div className="dropdown dropdown-top">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

{/* Dropdown top / aligns to end */}
<div className="dropdown dropdown-top dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

{/* Dropdown bottom */}
<div className="dropdown dropdown-bottom">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

{/* Dropdown bottom / aligns to end */}
<div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>


{/* Dropdown left */}
<div className="dropdown dropdown-left">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

{/* Dropdown left / aligns to end */}
<div className="dropdown dropdown-left dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

{/* # Dropdown right
 */}
 # Dropdown right
<div className="dropdown dropdown-right">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>


{/* Dropdown on hover */}
<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">Hover</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

{/* Force open */}
<div className="dropdown dropdown-open">
  <div tabIndex={0} role="button" className="btn m-1">Button</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

{/* # Card as dropdown */}
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Click</div>
  <div
    tabIndex={0}
    className="dropdown-content card card-compact bg-primary text-primary-content z-[1] w-64 p-2 shadow">
    <div className="card-body">
      <h3 className="card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div>
  </div>
</div>

{/* Dropdown in navbar */}
<div className="navbar bg-base-300 rounded-box">
  <div className="flex-1 px-2 lg:flex-none">
    <a className="text-lg font-bold">daisyUI</a>
  </div>
  <div className="flex flex-1 justify-end px-2">
    <div className="flex items-stretch">
      <a className="btn btn-ghost rounded-btn">Button</a>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Dropdown</div>
        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* Helper dropdown */}
<div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
    <svg
      tabIndex={0}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  </div>
  <div
    tabIndex={0}
    className="card compact dropdown-content bg-base-100 rounded-box z-[1] w-64 shadow">
    <div tabIndex={0} className="card-body">
      <h2 className="card-title">You needed more info?</h2>
      <p>Here is a description!</p>
    </div>
  </div>
</div>
    </>
  );
}

export default Dropdown;


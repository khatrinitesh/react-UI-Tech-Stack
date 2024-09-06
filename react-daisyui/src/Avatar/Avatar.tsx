import React from 'react';

const Avatar = () => {
  return (
    <>
      {/* Avatar */}
      <div className="avatar">
  <div className="w-24 rounded">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>

{/* Avatar in custom sizes */}
<div className="avatar">
  <div className="w-32 rounded">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div className="avatar">
  <div className="w-20 rounded">
    <img
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div className="avatar">
  <div className="w-16 rounded">
    <img
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
<div className="avatar">
  <div className="w-8 rounded">
    <img
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>

{/* Avatar rounded */}
<div className="avatar">
  <div className="w-24 rounded-xl">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div className="avatar">
  <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
{/* Avatar with mask */}
<div className="avatar">
  <div className="mask mask-squircle w-24">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div className="avatar">
  <div className="mask mask-hexagon w-24">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div className="avatar">
  <div className="mask mask-triangle w-24">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>

{/*  Avatar group */}
<div className="avatar-group -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
</div>

{/* Avatar group with counter */}
<div className="avatar-group -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="bg-neutral text-neutral-content w-12">
      <span>+99</span>
    </div>
  </div>
</div>

{/* Avatar with ring */}
<div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>

{/*  Avatar with presence indicator */}
<div className="avatar online">
  <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div className="avatar offline">
  <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>

{/* Avatar placeholder */}
<div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-24 rounded-full">
    <span className="text-3xl">D</span>
  </div>
</div>
<div className="avatar online placeholder">
  <div className="bg-neutral text-neutral-content w-16 rounded-full">
    <span className="text-xl">AI</span>
  </div>
</div>
<div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-12 rounded-full">
    <span>SY</span>
  </div>
</div>
<div className="avatar placeholder">
  <div className="bg-neutral text-neutral-content w-8 rounded-full">
    <span className="text-xs">UI</span>
  </div>
</div>


    </>
  );
}

export default Avatar;

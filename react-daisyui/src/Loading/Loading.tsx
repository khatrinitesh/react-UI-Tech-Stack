import React from 'react';

const Loading = () => {
  return (
    <>
      {/*Loading spinner  */}
      <span className="loading loading-spinner loading-xs"></span>
<span className="loading loading-spinner loading-sm"></span>
<span className="loading loading-spinner loading-md"></span>
<span className="loading loading-spinner loading-lg"></span>

{/* Loading dots */}
<span className="loading loading-dots loading-xs"></span>
<span className="loading loading-dots loading-sm"></span>
<span className="loading loading-dots loading-md"></span>
<span className="loading loading-dots loading-lg"></span>

{/* Loading ring */}
<span className="loading loading-ring loading-xs"></span>
<span className="loading loading-ring loading-sm"></span>
<span className="loading loading-ring loading-md"></span>
<span className="loading loading-ring loading-lg"></span>

{/* Loading ball */}
<span className="loading loading-ball loading-xs"></span>
<span className="loading loading-ball loading-sm"></span>
<span className="loading loading-ball loading-md"></span>
<span className="loading loading-ball loading-lg"></span>

{/* Loading bars */}
<span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>

{/* Loading infinity */}
<span className="loading loading-infinity loading-xs"></span>
<span className="loading loading-infinity loading-sm"></span>
<span className="loading loading-infinity loading-md"></span>
<span className="loading loading-infinity loading-lg"></span>

{/* Loading with colors */}
<span className="loading loading-spinner text-primary"></span>
<span className="loading loading-spinner text-secondary"></span>
<span className="loading loading-spinner text-accent"></span>
<span className="loading loading-spinner text-neutral"></span>
<span className="loading loading-spinner text-info"></span>
<span className="loading loading-spinner text-success"></span>
<span className="loading loading-spinner text-warning"></span>
<span className="loading loading-spinner text-error"></span>
    </>
  );
}

export default Loading;

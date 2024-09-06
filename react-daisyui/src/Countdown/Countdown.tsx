import React from 'react';

interface CountdownProps {
    counter: number;
  }

const Countdown:React.FC<CountdownProps> = ({counter}) => {
  return (
    <>
      {/* Countdown */}
      <span className="countdown font-mono text-6xl">
        <span
          style={{ "--value": counter } as React.CSSProperties} // Corrected this line
        ></span>
      </span>
    </>
  );
}

export default Countdown;

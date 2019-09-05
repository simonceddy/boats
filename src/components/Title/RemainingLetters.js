import React from 'react';

function RemainingLetters({ children }) {
  return (
    <span className="text-4xl lg:text-5xl lowercase text-black">
      {children}
    </span>
  );
}

export default RemainingLetters;

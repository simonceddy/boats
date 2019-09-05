import React from 'react';

function FirstLetter({ children }) {
  return (
    <span className="text-5xl lg:text-6xl uppercase text-red-900 mx-2">
      {children}
    </span>
  );
}

export default FirstLetter;

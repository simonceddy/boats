import React from 'react';
import boats1 from '../assets/boats1.svg';

function Boat({ onClick }) {
  return (
    <div className="w-full flex flex-row justify-center">
      <div
        className="bg-white border-8 border-black p-0 sm:w-5/12 w-4/5"
        onClick={onClick}
        role="presentation"
      >
        <img src={boats1} alt="BOATS" className="w-full" />
      </div>
    </div>
  );
}

export default Boat;

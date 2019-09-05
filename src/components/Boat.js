import React from 'react';
import boats1 from '../assets/boats1.svg';

function Boat({ onClick }) {
  return (
    <div>
      <div
        className="bg-white border-8 border-black py-2"
        onClick={onClick}
        role="presentation"
      >
        <img src={boats1} alt="BOATS" width="500px" />
      </div>
    </div>
  );
}

export default Boat;

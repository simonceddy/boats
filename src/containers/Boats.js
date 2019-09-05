import React, { useState } from 'react';
import Boat from '../components/Boat';
import Title from '../components/Title';
import boatsText from '../support/boats';

const getBoats = () => boatsText[Math.floor(Math.random() * boatsText.length)];

function Boats() {
  const [boatsTitle, setBoatsTitle] = useState(getBoats());

  const resetBoats = () => {
    // console.log('new boats');
    setBoatsTitle(getBoats());
  };

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Boat onClick={resetBoats} />
      <Title title={boatsTitle} onClick={resetBoats} />
    </div>
  );
}

export default Boats;

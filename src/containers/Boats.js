import React, { useState } from 'react';
import Boat from '../components/Boat';
import TitleBox from '../components/TitleBox';
import boatsText from '../support/boats';

// console.log(boatsText.length);

const getBoats = () => boatsText[Math.floor(Math.random() * boatsText.length)];

function Boats() {
  const [boatsTitle, setBoatsTitle] = useState(getBoats());
  const resetBoats = () => {
    // console.log('new boats');
    setBoatsTitle(getBoats());
  };

  return (
    <div className="flex flex-col justify-start py-2 items-center md:justify-center h-full w-full">
      <Boat onClick={resetBoats} />
      <TitleBox title={boatsTitle} onClick={resetBoats} />
    </div>
  );
}

export default Boats;

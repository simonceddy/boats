import React from 'react';
import FirstLetter from './FirstLetter';
import RemainingLetters from './RemainingLetters';

function Title({ letter, children }) {
  return (
    <FirstLetter>
      {letter}
      {children === '' ? null : (
        <RemainingLetters>
          {children}
        </RemainingLetters>
      ) }
    </FirstLetter>
  );
}

export default Title;

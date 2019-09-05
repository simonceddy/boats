import React from 'react';

export default function transformTitle(title) {
  const bits = title.split(' ').map((bit, id) => {
    const first = bit.charAt(0);
    const rest = bit.replace(/^(B|O|A|T|S)/, '');
    const key = id + 1;

    return () => (
      <span key={key}>
        <span className="text-5xl uppercase text-red-900">
          {first}
          {rest === '' ? null : (
            <span className="text-4xl lowercase text-black">
              {rest}
            </span>
          ) }
          {key >= 5 ? null : ' '}
        </span>
      </span>
    );
  });

  return bits;
}

import React from 'react';
import { prepareTitle } from '../support/titleTransformer';
import Title from './Title/index';

function TitleBox({ title = '', onClick }) {
  const {
    b, o, a, t, s
  } = prepareTitle(title);
  return (
    <div
      onClick={onClick}
      className="text-4xl italic w-full sm:w-auto font-bold cursor-pointer flex flex-col text-left sm:flex-row sm:text-center px-2 flex-wrap justify-center"
      role="presentation"
    >
      <Title letter="b">{b}</Title>
      <Title letter="o">{o}</Title>
      <Title letter="a">{a}</Title>
      <Title letter="t">{t}</Title>
      <Title letter="s">{s}</Title>
    </div>
  );
}

export default TitleBox;

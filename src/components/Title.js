import React from 'react';
import transformTitle from '../support/titleTransformer';

function Title({ title = '', onClick }) {
  const transformedTitle = transformTitle(title);
  return (
    <div
      onClick={onClick}
      className="text-4xl italic font-bold cursor-pointer text-center"
      role="presentation"
    >
      {transformedTitle.map((word) => word())}
    </div>
  );
}

export default Title;

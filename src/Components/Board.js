import React from 'react';

const Board = ({ title, children }) => {
  return (
    <section>
      <span>{title}</span>
      <div>{children}</div>
    </section>
  );
};

export default Board;

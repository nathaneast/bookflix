import React from 'react';

import Detail from './Detail';

function Board({ title, children, detail, hasDetail, resetDetail }) {
  return (
    <section>
      <span>{title}</span>
      <div>{children}</div>

      {hasDetail() && (
        <Detail
          title={detail.title}
          author={detail.author}
          image={detail.image}
          price={detail.price}
          priceSales={detail.priceSales}
          desc={detail.desc}
          date={detail.date}
          publisher={detail.publisher}
          categoryName={detail.categoryName}
          buyLink={detail.buyLink}
          rating={detail.rating}
          resetDetail={resetDetail}
        />
      )}
    </section>
  );
};

export default Board;

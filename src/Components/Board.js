import React from 'react';

import Detail from './Detail';

function Board({ title, children, detail, hasDetail }) {
  return (
    <section>
      <span>{title}</span>
      <div>{children}</div>

      {hasDetail() && (
        <Detail
          title={detail.title}
          author={detail.author}
          image={detail.coverLargeUrl}
          price={detail.priceStandard}
          priceSales={detail.priceSales}
          desc={detail.description}
          date={detail.pubDate}
          publisher={detail.publisher}
          categoryName={detail.categoryName}
          buyLink={detail.additionalLink}
        />
      )}
    </section>
  );
};

export default Board;

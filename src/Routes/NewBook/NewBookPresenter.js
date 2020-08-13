import React from 'react';

import Board from '../../Components/Board';
import Poster from '../../Components/Poster';

function newBookPresenter({ items, detail, setDetail, hasDetail, resetDetail }) {
  return (
    <Board
      title={'NewBook'}
      detail={detail}
      hasDetail={hasDetail}
      resetDetail={resetDetail}
    >
      {items.map(item => (
        <Poster
          key={item.itemId}
          title={item.title}
          author={item.author}
          image={item.coverLargeUrl}
          price={item.priceStandard}
          priceSales={item.priceSales}
          desc={item.description}
          date={item.pubDate}
          publisher={item.publisher}
          categoryName={item.categoryName}
          buyLink={item.additionalLink}
          rating={item.mileageRate}
          setDetail={setDetail}
        />
      ))}
    </Board>
  );
};

export default newBookPresenter;

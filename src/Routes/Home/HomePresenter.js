import React from 'react';

import Board from '../../Components/Board';
import Poster from '../../Components/Poster';

function HomePresenter({ items, setDetail, detail, hasDetail }) {
  return (
    <Board
      title={'BestSeller'}
      detail={detail}
      hasDetail={hasDetail}
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
          setDetail={setDetail}
        />
      ))}
    </Board>
  );
};

export default HomePresenter;

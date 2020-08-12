import React from 'react';

import Board from '../../Components/Board';
import Poster from '../../Components/Poster';

const HomePresenter = ({ items }) => {
  console.log(items)
  return (
    <Board title={'BestSeller'}>
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
        />
      ))}
    </Board>
  );
};

export default HomePresenter;

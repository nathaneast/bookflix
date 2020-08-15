import React from 'react';

import Board from '../../Components/Board';
import Poster from '../../Components/Poster';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

function RecommendPresenter({ items, detail, setDetail, isDetail, resetDetail, error, loading }) {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
          <Board
            detail={detail}
            isDetail={isDetail}
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
        )}

      {error && <Message text={error} />}
    </>
  );
};

export default RecommendPresenter;

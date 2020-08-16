import React from 'react';
import PropTypes from 'prop-types';

import Board from '../../Components/Board';
import Poster from '../../Components/Poster';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

function RecommendPresenter({ items, detail, error, loading, isDetail, setDetail, resetDetail, handleModal }) {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
          <Board
            detail={detail}
            isDetail={isDetail}
            resetDetail={resetDetail}
            handleModal={handleModal}
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

RecommendPresenter.propTypes = {
  items: PropTypes.array.isRequired,
  detail: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool,
  isDetail: PropTypes.func,
  setDetail: PropTypes.func,
  resetDetai: PropTypes.func,
  handleModal: PropTypes.func
}

export default RecommendPresenter;

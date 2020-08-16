import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Board from '../../Components/Board';
import Poster from '../../Components/Poster';
import Message from '../../Components/Message';
import Loader from '../../Components/Loader';

const Form = styled.form`
  margin-bottom: 30px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 17px;
  width: 100%;
  margin-left: 10px;
`;

function SearchPresenter({ items, detail, searchTerm, loading, error, isItems, isDetail, setDetail, resetDetail, updateTerm, handleSubmit, handleModal }) {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='검색할 책 제목을 입력하세요' value={searchTerm} onChange={updateTerm} />
      </Form>

      {searchTerm && (
        isItems() ? (
          loading ? (
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
            )
        ) : (
            <Message text={'검색 결과가 존재하지 않습니다'} />
          )
      )}

      {error && <Message text={error} />}
    </>
  );
};

SearchPresenter.propTypes = {
  items: PropTypes.array.isRequired,
  detail: PropTypes.object,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  isItems: PropTypes.func,
  isDetail: PropTypes.func,
  setDetail: PropTypes.func,
  resetDetai: PropTypes.func,
  updateTerm: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleModal: PropTypes.func,
}

export default SearchPresenter;

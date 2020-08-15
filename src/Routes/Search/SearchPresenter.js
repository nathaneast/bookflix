import React from 'react';
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

function SearchPresenter({ items, detail, setDetail, isDetail, resetDetail, searchTerm, updateTerm, handleSubmit, isItems, loading, error }) {
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

export default SearchPresenter;

import React, { useState } from 'react';

import { searchApi } from '../../api';
import SearchPresenter from './SearchPresenter';

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState({});

  const resetDetail = () => setDetail({});
  const handleDetail = bookData => setDetail(bookData);
  const hasDetail = () => Object.keys(detail).length;
  const updateTerm = e => setSearchTerm(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (searchTerm !== '') {
      searchByTerm();
    }
  };
  const searchByTerm = async () => {
    const { data: { item } } = await searchApi(searchTerm);
    setItems(item);
  }

  // useEffect(() => {
    // const getSearchItems = async () => {
    //   const { data: { item } } = await searchSellerApi();
    //   setItems(item);
    // }
    // getSearchItems();
  // }, [searchTerm]);

  return (
    <>
      {<SearchPresenter
        items={items}
        detail={detail}
        setDetail={handleDetail}
        hasDetail={hasDetail}
        resetDetail={resetDetail}
        searchTerm={searchTerm}
        updateTerm={updateTerm}
        handleSubmit={handleSubmit}
      />}
    </>
  );
}

export default SearchContainer;

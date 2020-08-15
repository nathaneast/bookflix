import React, { useState, useEffect } from 'react';

import { searchApi } from '../../api';
import SearchPresenter from './SearchPresenter';

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isItems = () => Boolean(items.length);
  const resetDetail = () => setDetail({});
  const handleDetail = bookData => setDetail(bookData);
  const isDetail = () => Boolean(Object.keys(detail).length);
  const updateTerm = e => setSearchTerm(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (searchTerm !== '') {
      searchByTerm();
    }
  };
  const searchByTerm = async () => {
    try {
      setLoading(true);
      const { data: { item } } = await searchApi(searchTerm);
      setItems(item);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (searchTerm) {
      searchByTerm();
    } 
  }, [searchTerm]);

  return (
    <>
      {<SearchPresenter
        items={items}
        detail={detail}
        setDetail={handleDetail}
        isDetail={isDetail}
        resetDetail={resetDetail}
        searchTerm={searchTerm}
        updateTerm={updateTerm}
        handleSubmit={handleSubmit}
        isItems={isItems}
        loading={loading}
        error={error}
      />}
    </>
  );
}

export default SearchContainer;

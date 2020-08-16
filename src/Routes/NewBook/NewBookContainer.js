import React, { useState, useEffect } from 'react';

import { newBookApi } from '../../api';
import NewBookPresenter from './NewBookPresenter';

function NewBookContainer() {
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isItems = () => Boolean(items.length);
  const isDetail = () => Boolean(Object.keys(detail).length);
  const resetDetail = () => setDetail({});
  const handleDetail = bookData => setDetail(bookData);
  const handleModal = e => {
    if (e.target === e.currentTarget) {
      resetDetail();
    }
  }
  const getNewBookItems = async () => {
    try {
      setLoading(true);
      const { data: { item } } = await newBookApi();
      setItems(item);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getNewBookItems();
  }, []);

  return (
    <>
      {isItems() && (
        <NewBookPresenter
          items={items}
          detail={detail}
          error={error}
          loading={loading}
          isDetail={isDetail}
          resetDetail={resetDetail}
          setDetail={handleDetail}
          handleModal={handleModal}
        />
      )}
    </>
  );
}

export default NewBookContainer;

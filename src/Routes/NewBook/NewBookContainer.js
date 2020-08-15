import React, { useState, useEffect } from 'react';

import { newBookApi } from '../../api';
import NewBookPresenter from './NewBookPresenter';

function NewBookContainer() {
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isItems = () => Boolean(items.length);
  const resetDetail = () => setDetail({});
  const handleDetail = bookData => setDetail(bookData);
  const isDetail = () => Boolean(Object.keys(detail).length);
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
          setDetail={handleDetail}
          isDetail={isDetail}
          resetDetail={resetDetail}
          error={error}
          loading={loading}
        />
      )}
    </>
  );
}

export default NewBookContainer;

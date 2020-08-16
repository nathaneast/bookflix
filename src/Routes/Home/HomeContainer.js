import React, { useState, useEffect } from 'react';

import { bestSellerApi } from '../../api';
import HomePresenter from './HomePresenter';

function HomeContainer() {
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isItems = () => Boolean(items.length);
  const resetDetail = () => setDetail({});
  const isDetail = () => Boolean(Object.keys(detail).length);
  const handleDetail = bookData => setDetail(bookData);
  const handleModal = e => {
    if (e.target === e.currentTarget) {
      resetDetail();
    }
  }
  const getBestSellerItems = async () => {
    try {
      setLoading(true);
      const { data: { item } } = await bestSellerApi();
      setItems(item);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBestSellerItems();
  }, []);

  return (
    <>
      {isItems() && (
        <HomePresenter
          items={items}
          detail={detail}
          error={error}
          loading={loading}
          isDetail={isDetail}
          setDetail={handleDetail}
          resetDetail={resetDetail}
          handleModal={handleModal}
        />
      )}
    </>
  );
}

export default HomeContainer;

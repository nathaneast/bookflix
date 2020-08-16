import React, { useState, useEffect } from 'react';

import { recommendApi } from '../../api';
import RecommendPresenter from './RecommendPresenter';

function RecommendContainer() {
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
  const getRecommendItems = async () => {
    try {
      setLoading(true);
      const { data: { item } } = await recommendApi();
      setItems(item);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRecommendItems();
  }, []);

  return (
    <>
      {isItems() && (
        <RecommendPresenter
          items={items}
          detail={detail}
          error={error}
          loading={loading}
          isItems={isItems}
          isDetail={isDetail}
          setDetail={handleDetail}
          resetDetail={resetDetail}
          handleModal={handleModal}
        />
      )}
    </>
  );
}

export default RecommendContainer;

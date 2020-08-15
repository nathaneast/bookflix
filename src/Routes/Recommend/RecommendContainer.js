import React, { useState, useEffect } from 'react';

import { recommendApi } from '../../api';
import RecommendPresenter from './RecommendPresenter';

function RecommendContainer() {
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isItems = () => Boolean(items.length);
  const resetDetail = () => setDetail({});
  const handleDetail = bookData => setDetail(bookData);
  const isDetail = () => Boolean(Object.keys(detail).length);
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
          setDetail={handleDetail}
          isDetail={isDetail}
          resetDetail={resetDetail}
          isItems={isItems}
          error={error}
          loading={loading}
        />
      )}
    </>
  );
}

export default RecommendContainer;

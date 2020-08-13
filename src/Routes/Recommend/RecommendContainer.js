import React, { useState, useEffect } from 'react';

import { recommendApi } from '../../api';
import RecommendPresenter from './RecommendPresenter';

function RecommendContainer() {
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState({});

  const resetDetail = () => setDetail({});
  const handleDetail = bookData => setDetail(bookData);
  const hasDetail = () => Object.keys(detail).length;

  useEffect(() => {
    const getRecommendItems = async () => {
      const { data: { item } } = await recommendApi();
      setItems(item);
    }
    getRecommendItems();
  }, []);

  return (
    <>
      {items.length && (
        <RecommendPresenter
          items={items}
          detail={detail}
          setDetail={handleDetail}
          hasDetail={hasDetail}
          resetDetail={resetDetail}
        />
      )}
    </>
  );
}

export default RecommendContainer;

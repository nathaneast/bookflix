import React, { useState, useEffect } from 'react';

import { bestSellerApi } from '../../api';
import HomePresenter from './HomePresenter';

function HomeContainer() {
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState({});

  const handleDetail = bookData => {
    setDetail(bookData);
  }

  const hasDetail = () => Object.keys(detail).length;

  useEffect(() => {
    const getBestSellerItems = async () => {
      const { data: { item } } = await bestSellerApi();
      setItems(item);
    }
    getBestSellerItems();
  }, []);

  return (
    <>
      {items.length && (
        <HomePresenter
          items={items}
          setDetail={handleDetail}
          detail={detail}
          hasDetail={hasDetail}
        />
      )}
    </>
  );
}

export default HomeContainer;

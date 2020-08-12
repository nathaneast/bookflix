import React, { useState, useEffect } from 'react';

import { bestSellerApi } from '../../api';
import HomePresenter from './HomePresenter';

function HomeContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getBestSellerItems = async () => {
      const { data: { item } } = await bestSellerApi();
      setItems(item);
    }
    getBestSellerItems();
  }, []);

  return (
    <>
      {items && (
        <HomePresenter
          items={items}
        />
      )}
    </>
  );
}

export default HomeContainer;

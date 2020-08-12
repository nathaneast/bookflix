import React, { useState, useEffect } from 'react';
import { bestSellerApi } from '../../api';

function HomeContainer() {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState(null);

  const getBestSellerItems = async () => {
    // const { data: { item } } = await bestSellerApi();
    await bestSellerApi().then(result => {
      const { data: { item } } = result;
      setItems(item);
      console.log(items)
    })
  }

  useEffect(() => {
    getBestSellerItems();
  }, []);

  return (
    <div>123</div>
  );
}

export default HomeContainer;

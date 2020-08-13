import React, { useState, useEffect } from 'react';

import { newBookApi } from '../../api';
import NewBookPresenter from './NewBookPresenter';

function NewBookContainer() {
  const [items, setItems] = useState([]);
  const [detail, setDetail] = useState({});

  const resetDetail = () => setDetail({});
  const handleDetail = bookData => setDetail(bookData);
  const hasDetail = () => Object.keys(detail).length;

  useEffect(() => {
    const getNewBookItems = async () => {
      const { data: { item } } = await newBookApi();
      setItems(item);
    }
    getNewBookItems();
  }, []);

  return (
    <>
      {items.length && (
        <NewBookPresenter
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

export default NewBookContainer;

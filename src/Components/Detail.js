import React from 'react';

function Detail({ title, author, image, price, priceSales, desc, date, publisher, categoryName, buyLink }) {

  return (
    <div>
      <span>detail</span>
      <span>{title}</span>
    </div>
  );
};

export default Detail;


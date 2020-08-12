import React from 'react';

const Poster = ({ title, author, image, price, priceSales, desc, date, publisher, categoryName, buyLink }) => {
  return (
    <div>
      <img src={image} alt={title}></img>
      <span>{title}</span>
    </div>
  );
};

export default Poster;

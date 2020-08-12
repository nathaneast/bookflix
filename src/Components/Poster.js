import React from 'react';

function Poster({ title, author, image, price, priceSales, desc, date, publisher, categoryName, buyLink, setDetail }) {

  const handleDetail = () => {
    setDetail({
      title,
      author,
      image,
      price,
      priceSales,
      desc,
      date,
      publisher,
      categoryName,
      buyLink
    });
  }


  return (
    <div onClick={() => handleDetail()}>
      <img src={image} alt={title}></img>
      <span>{title}</span>
      <span>{author}</span>
    </div>
  );
};

export default Poster;

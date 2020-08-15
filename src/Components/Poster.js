import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    height: 280px;
    width: 210px;
    background-size: cover;
    border-radius: 5px;
    background-position: center center;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    position: absolute;
    bottom: 10px;
    right: 15px;
    font-size: 20px;
    font-weight: bolder;
    opacity: 0;
`;

const ImageContainer = styled.div`
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
    cursor: pointer;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  padding: 5px;
  font-weight: bolder;
`;

function Poster({ title, author, image, price, priceSales, desc, date, publisher, categoryName, buyLink, rating, setDetail }) {
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
      buyLink,
      rating
    });
  }

  return (
    <Item onClick={() => handleDetail()}>
      <ImageContainer>
        <Image src={image} alt={title} />
        <Rating>
          <span role='img' aria-label='rating'>⭐</span>
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <span>{author}</span>
    </Item>
  );
};

export default Poster;

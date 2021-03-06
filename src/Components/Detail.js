import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h3`
  padding-left: 10px;
  font-size: 25px;
`;

const CloseContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CloseButton = styled.div`
  all: unset;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;
const Image = styled.img`
  width: 250px;
  height: 350px;
`;

const BookDetail = styled.div`
  margin: 0px 20px;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
`;

const Article = styled.div`
  margin: 10px;
`;

const Desc = styled.div`
  text-align: left;
  margin: 0px 20px;
`;

const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Price = styled.span`
  text-decoration: line-through;
  font-size: 20px;
  color: #bdc3c7;
`;

const PriceSales = styled.span`
  font-size: 20px;
  color: #c44569;
`;

const BuyButton = styled.button`
    all: unset;
    cursor: pointer;
    padding: 10px;
    background-color: #2c3e50;
    font-size: 20px;
    border-radius: 5px;
`;

const BuyLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 20px;
    background-color: #2c3e50;
`;

const Item = styled.span``;

const Wrapper = styled.div``;

const Modal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: white;
  padding: 20px 50px;
  text-align: center;
  position: relative;
  width: 650px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

function Detail({ title, author, image, price, priceSales, desc, date, publisher, categoryName, buyLink, rating, resetDetail, handleModal }) {
  
  return (
    <Modal>
      <Overlay onClick={e => handleModal(e)}>
        <Content>
          <Header>
            <Title>{title}</Title>
            <CloseContainer>
              <CloseButton>
                <Item onClick={() => resetDetail()}>
                  <span role='img' aria-label='cancel'>❌</span>
                </Item>
              </CloseButton>
            </CloseContainer>
          </Header>

          <Section>
            <ImageContainer>
              <Image src={image} alt={title}></Image>
            </ImageContainer>

            <Article>
              <BookDetail>
                <Item>저자: {author}</Item>
                <Item>종류: {categoryName}</Item>
                <Item>평점: {rating} / 10</Item>
                <Item>출판사: {publisher}</Item>
                <Item>출판일: {date}</Item>
              </BookDetail>
              <Desc>
                <p>{desc.substr(0, 100)}...</p>
              </Desc>
              <Wrapper>
                <PriceDetail>
                  <Item>
                    <span role='img' aria-label='price'>💰</span>
                  </Item>
                  <Price>{price}</Price>
                  <PriceSales>{priceSales}</PriceSales>
                </PriceDetail>
                <Wrapper>
                  <BuyButton>
                    <BuyLink href={buyLink} target='_blank'>구매하기</BuyLink>
                  </BuyButton>
                </Wrapper>
              </Wrapper>
            </Article>
          </Section>
        </Content>
      </Overlay>
    </Modal>
  );
};

Detail.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  priceSales: PropTypes.number,
  desc: PropTypes.string,
  date: PropTypes.string,
  publisher: PropTypes.string,
  categoryName: PropTypes.string,
  buyLink: PropTypes.string,
  rating: PropTypes.string,
  setDetail: PropTypes.func,
  handleModal: PropTypes.func
}

export default Detail;

import React from 'react';
import styled from 'styled-components';

import Detail from './Detail';

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 240px);
  grid-gap: 40px 0px;
`;

function Board({ children, detail, isDetail, resetDetail }) {
  return (
    <Section>
      {children}

      {isDetail() && (
        <Detail
          author={detail.author}
          image={detail.image}
          price={detail.price}
          priceSales={detail.priceSales}
          desc={detail.desc}
          date={detail.date}
          publisher={detail.publisher}
          categoryName={detail.categoryName}
          buyLink={detail.buyLink}
          rating={detail.rating}
          resetDetail={resetDetail}
        />
      )}
    </Section>
  );
};

export default Board;

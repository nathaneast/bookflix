import React from 'react';
import styled from 'styled-components';

const Emoji = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 40px;
`;

function Loader() {
  return (
    <Emoji>
      <span role='img' aria-label='Loading'>⏰</span>
    </Emoji>
  );
}

export default Loader

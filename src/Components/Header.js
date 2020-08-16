import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 10px 10px 20px;
`;

const Title = styled.a`
  text-decoration: none;
  font-size: 25px;
  margin-right: 15px;
  color: #2c3e50;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0px;
  margin: 5px;
`;
const Item = styled.li`
  font-size: 17px;
  font-weight: bolder;
  margin: 5px;
  padding: 5px;
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.current === 'true' ? '#6c5ce7' : '#2c3e50')};
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <div>
      <Title href='/'>BOOKFLIX</Title>
    </div>
    <nav>
      <List>
        <Item >
          <SLink to='/' current={pathname === '/' ? 'true' : 'false'}>베스트셀러</SLink>
        </Item>
        <Item>
          <SLink to='/newBook' current={pathname === '/newBook' ? 'true' : 'false'}>신간도서</SLink>
        </Item>
        <Item>
          <SLink to='/recommend' current={pathname === '/recommend' ? 'true' : 'false'}>추천도서</SLink>
        </Item>
        <Item>
          <SLink to='/search' current={pathname === '/search' ? 'true' : 'false'}>도서검색</SLink>
        </Item>
      </List>
    </nav>
  </Header>
));

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from '../Routes/Home'
import NewBook from '../Routes/NewBook'
import Recommend from '../Routes/Recommend'
import Search from '../Routes/Search'

export default () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">베스트셀러</Link></li>
            <li>
              <Link to="/newBook">신간도서</Link>
            </li>
            <li>
              <Link to="/recommend">추천도서</Link>
            </li>
            <li>
              <Link to="/search">도서검색</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/newBook' component={NewBook} />
          <Route path='/recommend' component={Recommend} />
          <Route path='/search' component={Search} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    </Router>
  );
};

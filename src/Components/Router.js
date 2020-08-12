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
              <Link to="/">Home</Link></li>
            <li>
              <Link to="/newBook">newBook</Link>
            </li>
            <li>
              <Link to="/recommend">recommend</Link>
            </li>
            <li>
              <Link to="/search">search</Link>
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

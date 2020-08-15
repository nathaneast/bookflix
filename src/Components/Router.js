import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from './Header';
import Home from '../Routes/Home'
import NewBook from '../Routes/NewBook'
import Recommend from '../Routes/Recommend'
import Search from '../Routes/Search'

export default () => {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/newBook' component={NewBook} />
          <Route path='/recommend' component={Recommend} />
          <Route path='/search' component={Search} />
          <Redirect from='*' to='/' />
        </Switch>
    </Router>
  );
};

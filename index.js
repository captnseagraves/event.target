import React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/App';
import Calendar from './modules/calendar';
import CategoryList from './modules/category_list';
import Feed from './modules/feed';

import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={App}></Route>
      <Route path="/calendar" component={Calendar}></Route>
      <Route path="/category_list" component={CategoryList}></Route>
      <Route path="/feed" component={Feed}></Route>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
